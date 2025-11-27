// app/parmarthSopan/detail.tsx
import Slider from '@react-native-community/slider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ChevronLeft, Music, PauseCircle, PlayCircle, User } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItemById, getStaticSectionById, SopanItem, StaticSection } from '../../assets/text/parmarthSopanData';
import { useAudio } from '../../context/AudioContext';

const THEME = {
  background: '#FFF8F0', // Cream/Book background
  text: '#3E2723',       // Dark Brown text
  subText: '#8D6E63',    // Light Brown
  primary: '#D2B48C',    // Tan
  accent: '#FFB88D',
  card: '#FFFFFF',
  cardBorder: '#EFEBE9',
  meaningBox: '#FFF3E0', // Very light orange for meaning
  sliderThumb: '#E65100',
  sliderTrack: '#D7CCC8',
  sliderActive: '#E65100',
};

export default function SopanDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { itemId, isStatic } = useLocalSearchParams();
  const { playSound, pauseSound, seekSound, isPlaying, currentTrackId, playbackStatus } = useAudio();
  
  const [isDragging, setIsDragging] = useState(false);
  const [slideValue, setSlideValue] = useState(0);

  // Retrieve Item Data
  const item = isStatic === 'true' 
    ? getStaticSectionById(itemId as string) 
    : getItemById(itemId as string);

  // Type Guards
  const isSopanItem = isStatic !== 'true';
  const sopanItem = isSopanItem ? (item as SopanItem) : null;
  const staticItem = !isSopanItem ? (item as StaticSection) : null;

  // --- AUDIO LOGIC ---
  const hasAudio = !!sopanItem?.audioDriveId;
  const isCurrentTrack = currentTrackId === sopanItem?.id;
  const isTrackPlaying = isCurrentTrack && isPlaying;
  
  useEffect(() => {
    if (isCurrentTrack && !isDragging) {
      setSlideValue(playbackStatus.position);
    }
  }, [playbackStatus.position, isCurrentTrack, isDragging]);

  const handlePlayPause = async () => {
    if (!sopanItem?.audioDriveId) return;

    if (isCurrentTrack) {
      if (isPlaying) {
        await pauseSound();
      } else {
        const uri = `https://docs.google.com/uc?export=download&id=${sopanItem.audioDriveId}`;
        await playSound(uri, sopanItem.id);
      }
    } else {
      const uri = `https://docs.google.com/uc?export=download&id=${sopanItem.audioDriveId}`;
      await playSound(uri, sopanItem.id);
    }
  };

  const handleSeek = async (value: number) => {
    await seekSound(value);
    setIsDragging(false);
  };

  const formatTime = (millis: number) => {
    if (!millis) return '0:00';
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!item) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
          <TouchableOpacity onPress={() => router.back()}><ArrowLeft color={THEME.text} /></TouchableOpacity>
        </View>
        <View style={styles.centerBox}><Text style={styles.errorText}>Item not found</Text></View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER: Left Aligned Title */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} hitSlop={20}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {item.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* --- MAIN TITLE SECTION (Optional: You can keep or remove since it's now in header) --- */}
        {/* We keep it for full context, as header truncates long titles */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>{item.title}</Text>
          {sopanItem && (
            <View style={styles.metaRow}>
              <User size={14} color={THEME.subText} />
              <Text style={styles.authorText}>{sopanItem.author}</Text>
            </View>
          )}
        </View>

        {/* --- AUDIO PLAYER CARD --- */}
        {hasAudio && sopanItem && (
          <View style={styles.audioCard}>
            <View style={styles.audioHeader}>
              <View style={styles.singerInfo}>
                 <Music size={16} color={THEME.accent} style={{marginRight: 6}} />
                 <Text style={styles.singerName}>
                    {sopanItem.singer ? `Singer: ${sopanItem.singer}` : 'Audio Playback'}
                 </Text>
              </View>
            </View>

            <View style={styles.playerRow}>
              <TouchableOpacity onPress={handlePlayPause} disabled={false}>
                 {isTrackPlaying ? (
                   <PauseCircle size={48} color={THEME.accent} fill="#FFF3E0" />
                 ) : (
                   <PlayCircle size={48} color={THEME.accent} fill="#FFF3E0" />
                 )}
              </TouchableOpacity>

              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={isCurrentTrack ? playbackStatus.duration : 100}
                  value={isCurrentTrack ? slideValue : 0}
                  onSlidingStart={() => setIsDragging(true)}
                  onSlidingComplete={handleSeek}
                  minimumTrackTintColor={THEME.sliderActive}
                  maximumTrackTintColor={THEME.sliderTrack}
                  thumbTintColor={THEME.sliderThumb}
                  disabled={!isCurrentTrack && !hasAudio}
                />
                <View style={styles.timeRow}>
                  <Text style={styles.timeText}>
                    {isCurrentTrack ? formatTime(slideValue) : '0:00'}
                  </Text>
                  <Text style={styles.timeText}>
                    {isCurrentTrack ? formatTime(playbackStatus.duration) : '0:00'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* --- CONTENT / VERSE CARD --- */}
        <View style={isSopanItem ? styles.contentCard : styles.staticContainer}>
          <Text style={styles.verseText}>
            {sopanItem ? sopanItem.hindiText : staticItem?.content}
          </Text>
        </View>

        {/* --- MEANING CARD --- */}
        {sopanItem?.meaning ? (
          <View style={styles.meaningCard}>
            <Text style={styles.meaningLabel}>ANUVAD / MEANING</Text>
            <Text style={styles.meaningText}>{sopanItem.meaning}</Text>
          </View>
        ) : null}
        
        <View style={{ height: 40 }} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  centerBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: THEME.subText, fontSize: 16 },

  // Header - Left Aligned
  header: { 
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20, paddingBottom: 15,
    borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: THEME.background
  },
  backBtn: { padding: 4, marginRight: 15 },
  headerTitle: { 
    fontSize: 18, fontWeight: '700', color: THEME.text, 
    flex: 1, textAlign: 'left' // Left Align
  },

  scrollContent: { padding: 20 },

  // Title Section
  titleSection: { marginBottom: 25, alignItems: 'center' },
  mainTitle: { 
    fontSize: 24, fontWeight: 'bold', color: THEME.text, 
    textAlign: 'center', marginBottom: 8, lineHeight: 32 
  },
  metaRow: { flexDirection: 'row', alignItems: 'center', opacity: 0.8 },
  authorText: { fontSize: 15, color: THEME.subText, marginLeft: 6, fontWeight: '500' },

  // Audio Card
  audioCard: {
    backgroundColor: THEME.card, borderRadius: 16, padding: 16, marginBottom: 25,
    elevation: 3, shadowColor: '#5D4037', shadowOpacity: 0.1, shadowRadius: 8, shadowOffset: {width:0, height:4},
    borderWidth: 1, borderColor: THEME.cardBorder
  },
  audioHeader: { flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' },
  singerInfo: { flexDirection: 'row', alignItems: 'center' },
  singerName: { fontSize: 13, fontWeight: '600', color: THEME.accent, textTransform: 'uppercase', letterSpacing: 0.5 },
  
  playerRow: { flexDirection: 'row', alignItems: 'center' },
  sliderContainer: { flex: 1, marginLeft: 15 },
  slider: { width: '100%', height: 40 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 2, marginTop: -5 },
  timeText: { fontSize: 11, color: THEME.subText, fontVariant: ['tabular-nums'] },

  // Content Card
  contentCard: {
    backgroundColor: THEME.card, borderRadius: 16, padding: 24, marginBottom: 20,
    elevation: 1, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5,
    borderWidth: 1, borderColor: THEME.cardBorder
  },
  staticContainer: {
    marginBottom: 20, paddingHorizontal: 5
  },
  verseText: { 
    fontSize: 18, lineHeight: 30, color: THEME.text, 
    textAlign: 'left', fontWeight: '400' 
  },

  // Meaning Card
  meaningCard: {
    backgroundColor: THEME.meaningBox, borderRadius: 12, padding: 20,
    borderLeftWidth: 4, borderLeftColor: THEME.accent
  },
  meaningLabel: { 
    fontSize: 12, fontWeight: 'bold', color: THEME.subText, 
    marginBottom: 10, letterSpacing: 1.5 
  },
  meaningText: { 
    fontSize: 16, lineHeight: 28, color: THEME.text, 
    fontStyle: 'italic' 
  },
});