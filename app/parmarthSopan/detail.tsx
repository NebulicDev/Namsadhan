// app/parmarthSopan/detail.tsx
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ChevronLeft, Music, Pause, Play, User } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
  background: '#FFF8F0',
  text: '#3E2723',
  subText: '#8D6E63',
  primary: '#D2B48C',
  accent: '#FFB88D',
  card: '#FFFFFF',
  cardBg: '#FFFFFF',
  cardBorder: '#EFEBE9',
  meaningBox: '#FFF3E0',
  sliderThumb: '#5D4037',
  sliderTrack: '#D7CCC8',
  sliderActive: '#8D6E63',
};

export default function SopanDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { itemId, isStatic } = useLocalSearchParams();
  const { playSound, pauseSound, seekSound, isPlaying, currentTrackId, playbackStatus } = useAudio();
  
  const [isDragging, setIsDragging] = useState(false);
  const [slideValue, setSlideValue] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);

  // Retrieve Item Data
  const item = isStatic === 'true' 
    ? getStaticSectionById(itemId as string) 
    : getItemById(itemId as string);

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

    try {
      if (isCurrentTrack) {
        if (isPlaying) {
          await pauseSound();
        } else {
          setIsBuffering(true);
          const uri = `https://docs.google.com/uc?export=download&id=${sopanItem.audioDriveId}`;
          await playSound(uri, sopanItem.id);
          setIsBuffering(false);
        }
      } else {
        setIsBuffering(true);
        const uri = `https://docs.google.com/uc?export=download&id=${sopanItem.audioDriveId}`;
        await playSound(uri, sopanItem.id);
        setIsBuffering(false);
      }
    } catch (e) {
      setIsBuffering(false);
      console.error(e);
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
        
        {/* --- MAIN TITLE SECTION --- */}
        <View style={styles.titleSection}>
          {/* <Text style={styles.mainTitle}>{item.title}</Text> */}
          {sopanItem && (
            <View style={styles.metaRow}>
              <User size={14} color={THEME.subText} />
              <Text style={styles.authorText}>{sopanItem.author}</Text>
            </View>
          )}
        </View>

        {/* --- CONTENT / VERSE CARD --- */}
        <View style={isSopanItem ? styles.contentCard : styles.staticContainer}>
          <Text style={styles.verseText}>
            {sopanItem ? sopanItem.hindiText : staticItem?.content}
          </Text>
        </View>

        {/* --- MEANING CARD --- */}
        {sopanItem?.meaning ? (
          <View style={styles.meaningCard}>
            <Text style={styles.meaningLabel}>MEANING / अनुवाद</Text>
            <Text style={styles.meaningText}>{sopanItem.meaning}</Text>
          </View>
        ) : null}

        {/* --- AUDIO PLAYER CARD (MOVED TO BOTTOM & COMPACT) --- */}
        {hasAudio && sopanItem && (
          <View style={styles.cardWrapper}>
            <LinearGradient
                colors={isCurrentTrack ? ['#FFFFFF', '#FFF8E1'] : ['#FFFFFF', '#FFFDF9']}
                style={[styles.audioCard, isCurrentTrack && styles.cardActive]}
            >
                <View style={styles.trackRow}>
                    {/* Left Icon (Smaller) */}
                    <View style={[styles.iconContainer, isCurrentTrack && styles.iconActive]}>
                        {isCurrentTrack && isPlaying ? (
                            <Pause size={20} color={isCurrentTrack ? '#FFF' : THEME.primary} fill={isCurrentTrack ? '#FFF' : 'transparent'} />
                        ) : (
                            <Music size={20} color={isCurrentTrack ? '#FFF' : THEME.primary} />
                        )}
                    </View>

                    {/* Info */}
                    <View style={styles.trackInfo}>
                        <Text style={[styles.trackTitle, isCurrentTrack && styles.textActive]}>
                          {sopanItem.singer ? `Sung by: ${sopanItem.singer}` : 'Audio Playback'}
                        </Text>
                    </View>

                    {/* Actions */}
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.actionButton, styles.mainAction]}
                            onPress={handlePlayPause}
                            disabled={isBuffering}
                        >
                            {isBuffering ? (
                                <ActivityIndicator size="small" color={THEME.accent} />
                            ) : isTrackPlaying ? (
                                <Pause size={20} color={THEME.accent} fill={THEME.accent} />
                            ) : (
                                <Play size={20} color={THEME.accent} fill={THEME.accent} style={{ marginLeft: 2 }} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Slider (Visible when active) */}
                {isCurrentTrack && (
                    <View style={styles.sliderView}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={playbackStatus.duration || 100}
                            value={slideValue}
                            onSlidingStart={() => setIsDragging(true)}
                            onSlidingComplete={handleSeek}
                            minimumTrackTintColor={THEME.sliderActive}
                            maximumTrackTintColor={THEME.sliderTrack}
                            thumbTintColor={THEME.sliderThumb}
                        />
                        <View style={styles.timeRow}>
                            <Text style={styles.timeText}>{formatTime(slideValue)}</Text>
                            <Text style={styles.timeText}>{formatTime(playbackStatus.duration)}</Text>
                        </View>
                    </View>
                )}
            </LinearGradient>
          </View>
        )}
        
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
    flex: 1, textAlign: 'left'
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
    borderLeftWidth: 4, borderLeftColor: THEME.accent, marginBottom: 25 // Added margin bottom for spacing before audio
  },
  meaningLabel: { 
    fontSize: 12, fontWeight: 'bold', color: THEME.subText, 
    marginBottom: 10, letterSpacing: 1.5 
  },
  meaningText: { 
    fontSize: 16, lineHeight: 28, color: THEME.text, 
    fontStyle: 'italic' 
  },

  // --- COMPACT AUDIO CARD ---
  cardWrapper: {
    marginBottom: 10,
    borderRadius: 16, // Slightly smaller radius
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: THEME.cardBg,
  },
  audioCard: {
    borderRadius: 16,
    padding: 12, // Reduced padding
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  cardActive: {
    borderColor: THEME.primary,
    borderWidth: 1,
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40, // Reduced size
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5E6D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12, // Reduced margin
  },
  iconActive: {
    backgroundColor: THEME.text,
  },
  trackInfo: { flex: 1 },
  trackTitle: { 
    fontSize: 15, // Reduced font size
    fontWeight: '600', 
    color: THEME.text,
  },
  textActive: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 36, // Reduced button size
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  mainAction: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sliderView: {
    marginTop: 10, // Reduced margin
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.03)',
  },
  slider: {
    width: '100%',
    height: 30, // Compact slider height
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginTop: -5,
  },
  timeText: {
    color: THEME.subText,
    fontSize: 10, // Smaller time font
    fontVariant: ['tabular-nums'],
  },
});