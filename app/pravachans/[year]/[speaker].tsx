// app/pravachans/[year]/[speaker].tsx
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import {
  ArrowDownToLine,
  ChevronLeft,
  Music,
  Pause,
  Play,
  Trash2,
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAudio } from '../../../context/AudioContext';
import { useDownload } from '../../../context/DownloadContext';
import logger from '../../../utils/logger';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
  sliderThumb: '#5D4037',
  sliderTrack: '#D7CCC8',
  sliderActive: '#8D6E63',
};

type TrackType = {
  id: string;
  title: string;
  speaker: string;
  driveId: string;
  url: string;
  year: number;
};

type YearType = {
  year: string;
  tracks: TrackType[];
};

type PlayStatusType = {
  position: number;
  duration: number;
};

const CACHE_KEY = 'pravachans_data_v2';

export default function SpeakerRecordingsScreen() {
  const router = useRouter();
  const { year, speaker } = useLocalSearchParams<{ year: string; speaker: string }>();
  const insets = useSafeAreaInsets();
  
  const {
    playSound,
    pauseSound,
    seekSound,
    isPlaying,
    currentTrackId,
    playbackStatus,
  } = useAudio();
  
  const {
    downloadState,
    startDownload,
    getDownloadedFileUri,
    deleteDownloadedTrack,
    loadDownloadedTracks,
  } = useDownload();

  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- DATA LOGIC (UNTOUCHED) ---
  useEffect(() => {
    const loadTracksForSpeaker = async () => {
      if (!year || !speaker) return;
      setIsLoading(true);
      try {
        const cachedData = await SecureStore.getItemAsync(CACHE_KEY);
        if (cachedData) {
          const allPravachans: YearType[] = JSON.parse(cachedData);
          const yearData = allPravachans.find((item) => item.year === year);
          
          if (yearData) {
            const speakerTracks = yearData.tracks.filter(
                t => (t.speaker || 'Unknown Speaker') === speaker
            );
            setTracks(speakerTracks);
          }
        }
      } catch (e) {
        logger.error('Failed to load tracks for speaker:', e);
        Alert.alert('Error', 'Could not load the tracks.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTracksForSpeaker();
    loadDownloadedTracks();
  }, [year, speaker]);

  const deleteTrack = async (track: TrackType) => {
    Alert.alert(
      'Delete Download',
      `Remove "${track.title}" from downloads?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              if (currentTrackId === track.id) {
                await pauseSound();
              }
              await deleteDownloadedTrack(track.id);
            } catch (error) {
              logger.error('Failed to delete track', error);
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handlePlayPause = async (track: TrackType) => {
    const fileUri = getDownloadedFileUri(track.id);
    if (!fileUri) {
      Alert.alert(
        'Download Required',
        'Please download the pravachan to listen effortlessly without buffering.'
      );
      return;
    }

    if (currentTrackId === track.id) {
      if (isPlaying) {
        await pauseSound();
      } else {
        await playSound(fileUri, track.id);
      }
    } else {
      await playSound(fileUri, track.id);
    }
  };

  const formatTime = (millis: number) => {
    if (!millis) return '0:00';
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  const onSlidingComplete = async (value: number) => {
    await seekSound(value);
  };

  if (isLoading) {
    return (
      <View style={[styles.screenContainer, styles.center]}>
        <ActivityIndicator size="large" color={THEME.text} />
      </View>
    );
  }

  const renderItem = ({ item }: { item: TrackType }) => {
    const trackDownloadState = downloadState[item.id];
    const isDownloaded = trackDownloadState?.isCompleted ?? false;
    const isDownloading = trackDownloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    return (
      <View style={styles.cardWrapper}>
         <LinearGradient
            colors={isActive ? ['#FFFFFF', '#FFF8E1'] : ['#FFFFFF', '#FFFDF9']}
            style={[styles.card, isActive && styles.cardActive]}
        >
            <View style={styles.trackRow}>
                {/* Left Icon */}
                <View style={[styles.iconContainer, isActive && styles.iconActive]}>
                    {isActive && isPlaying ? (
                        <Pause size={24} color={isActive ? '#FFF' : THEME.primary} fill={isActive ? '#FFF' : 'transparent'} />
                    ) : (
                        <Music size={24} color={isActive ? '#FFF' : THEME.primary} />
                    )}
                </View>

                {/* Title & Info */}
                <View style={styles.infoContainer}>
                    <Text style={[styles.trackTitle, isActive && styles.textActive]} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={styles.trackSubtitle}>
                        {isDownloaded ? 'Available Offline' : 'Download to Play'}
                    </Text>
                </View>

                {/* Actions */}
                <View style={styles.actions}>
                    {isDownloaded && (
                         <TouchableOpacity 
                            style={styles.actionButton} 
                            onPress={() => deleteTrack(item)}
                            hitSlop={10}
                        >
                            <Trash2 size={20} color={THEME.textLight} />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={[styles.actionButton, styles.mainAction]}
                        onPress={() => (isDownloaded ? handlePlayPause(item) : startDownload(item))}
                        disabled={isDownloading}
                    >
                        {isDownloading ? (
                            <ActivityIndicator size="small" color={THEME.primary} />
                        ) : isDownloaded ? (
                            isActive && isPlaying ? (
                                <Pause size={24} color={THEME.accent} fill={THEME.accent} />
                            ) : (
                                <Play size={24} color={THEME.accent} fill={THEME.accent} style={{ marginLeft: 2 }} />
                            )
                        ) : (
                            <ArrowDownToLine size={24} color={THEME.primary} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Slider (Visible when active) */}
            {isActive && (
                <View style={styles.sliderView}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={playbackStatus.duration || 1}
                        value={playbackStatus.position}
                        onSlidingComplete={onSlidingComplete}
                        minimumTrackTintColor={THEME.sliderActive}
                        maximumTrackTintColor={THEME.sliderTrack}
                        thumbTintColor={THEME.sliderThumb}
                    />
                    <View style={styles.timeRow}>
                        <Text style={styles.timeText}>
                            {formatTime(playbackStatus.position)}
                        </Text>
                        <Text style={styles.timeText}>
                            {formatTime(playbackStatus.duration)}
                        </Text>
                    </View>
                </View>
            )}
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>{speaker}</Text>
            <Text style={styles.subtitle}>{tracks.length} Pravachans</Text>
        </View>
      </View>

      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  backButton: { marginRight: 15 },
  title: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  subtitle: { fontSize: 13, color: THEME.textLight, marginTop: 2 },

  listContent: { paddingHorizontal: 16, paddingBottom: 40, paddingTop: 10 },

  cardWrapper: {
    marginBottom: 12,
    borderRadius: 20,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: THEME.cardBg,
  },
  card: {
    borderRadius: 20,
    padding: 16,
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
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5E6D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconActive: {
    backgroundColor: THEME.text,
  },
  
  infoContainer: { flex: 1 },
  trackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 2,
  },
  textActive: {
    fontWeight: 'bold',
  },
  trackSubtitle: {
    fontSize: 12,
    color: THEME.textLight,
  },
  
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  mainAction: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  sliderView: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.03)',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginTop: -8,
  },
  timeText: {
    fontSize: 11,
    color: THEME.textLight,
    fontVariant: ['tabular-nums'],
  },
});