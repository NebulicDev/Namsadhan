import Slider from '@react-native-community/slider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import {
    ChevronLeft,
    Download,
    Pause,
    Play,
    Trash2,
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useAudio } from '../../../context/AudioContext';
import { useDownload } from '../../../context/DownloadContext';
import logger from '../../../utils/logger';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
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
  // Capture both year and speaker parameters
  const { year, speaker } = useLocalSearchParams<{ year: string; speaker: string }>();
  
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
            // Filter tracks specifically for this speaker
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
      `Are you sure you want to delete "${track.title}"?`,
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
              Alert.alert('Error', 'Could not delete the pravachan.');
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
        'Not Downloaded',
        'Please download the pravachan before playing.'
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
      <SafeAreaView style={[styles.screenContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={THEME.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        {/* Display Speaker name as title */}
        <Text style={styles.title} numberOfLines={1}>{speaker}</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <TrackItem
            item={item}
            downloadState={downloadState[item.id]}
            handlePlayPause={handlePlayPause}
            downloadTrack={startDownload}
            deleteTrack={deleteTrack}
            currentTrackId={currentTrackId}
            isPlaying={isPlaying}
            playbackStatus={playbackStatus}
            onSlidingComplete={onSlidingComplete}
            formatTime={formatTime}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

// ------------------ SUB COMPONENTS ------------------

type TrackItemProps = {
    item: TrackType;
    downloadState: any;
    handlePlayPause: (track: TrackType) => Promise<void>;
    downloadTrack: (track: TrackType) => Promise<void>;
    deleteTrack: (track: TrackType) => Promise<void>;
    currentTrackId: string | null;
    isPlaying: boolean;
    playbackStatus: PlayStatusType;
    onSlidingComplete: (value: number) => Promise<void>;
    formatTime: (millis: number) => string;
};

const TrackItem = ({
    item,
    downloadState,
    handlePlayPause,
    downloadTrack,
    deleteTrack,
    currentTrackId,
    isPlaying,
    playbackStatus,
    onSlidingComplete,
    formatTime,
}: TrackItemProps) => {
    const isDownloaded = downloadState?.isCompleted ?? false;
    const isDownloading = downloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    return (
        <View style={styles.card}>
            <View style={styles.trackRow}>
                <View style={styles.trackInfo}>
                    <Text style={styles.trackTitle}>{item.title}</Text>
                    {/* We don't need to show speaker name here again as it's in the header, 
                        but we can show it or year if desired. */}
                    <Text style={styles.trackArtist}>{item.speaker}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    {isDownloaded ? (
                        <>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => handlePlayPause(item)}
                            >
                                {isPlaying && isActive ? (
                                    <Pause size={24} color={THEME.accent} />
                                ) : (
                                    <Play size={24} color={THEME.accent} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => deleteTrack(item)}
                            >
                                <Trash2 size={24} color={THEME.lightText} />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => downloadTrack(item)}
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <ActivityIndicator color={THEME.primary} />
                            ) : (
                                <Download size={24} color={THEME.primary} />
                            )}
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            {isActive && (
                <View>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={playbackStatus.duration}
                        value={playbackStatus.position}
                        onSlidingComplete={onSlidingComplete}
                        minimumTrackTintColor={THEME.accent}
                        maximumTrackTintColor={THEME.lightText}
                        thumbTintColor={THEME.primary}
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
        </View>
    );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: THEME.text, flex: 1 },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  trackRow: { flexDirection: 'row', alignItems: 'center' },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 16, fontWeight: '600', color: THEME.text },
  trackArtist: { fontSize: 14, color: THEME.lightText, marginTop: 2 },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 10,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: -10,
  },
  timeText: {
    color: THEME.lightText,
    fontSize: 12,
  },
});