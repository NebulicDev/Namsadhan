// app/pravachans/[year].tsx
import Slider from '@react-native-community/slider';
import * as FileSystem from 'expo-file-system';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store'; // Use SecureStore
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
import { useAudio } from '../../context/AudioContext';
import logger from '../../utils/logger'; // Import the logger

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
const DOWNLOADED_TRACKS_KEY = 'downloaded_pravachans'; // Key for downloaded tracks

export default function YearScreen() {
  const router = useRouter();
  const { year } = useLocalSearchParams<{ year: string }>();
  const {
    playSound,
    pauseSound,
    seekSound,
    isPlaying,
    currentTrackId,
    playbackStatus,
  } = useAudio();
  const [downloadedTracks, setDownloadedTracks] = useState<{
    [key: string]: string;
  }>({});
  const [downloadingTracks, setDownloadingTracks] = useState<{
    [key: string]: boolean;
  }>({});
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTracksForYear = async () => {
      if (!year) return;
      setIsLoading(true);
      try {
        const cachedData = await SecureStore.getItemAsync(CACHE_KEY);
        if (cachedData) {
          const allPravachans: YearType[] = JSON.parse(cachedData);
          const yearData = allPravachans.find((item) => item.year === year);
          if (yearData) {
            setTracks(yearData.tracks);
          }
        }
      } catch (e) {
        logger.error('Failed to load cached pravachans for year:', e);
        Alert.alert('Error', 'Could not load the tracks for this year.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTracksForYear();
    loadDownloadedTracks();
  }, [year]);

  const loadDownloadedTracks = async () => {
    try {
      const tracks = await SecureStore.getItemAsync(DOWNLOADED_TRACKS_KEY);
      if (tracks) {
        setDownloadedTracks(JSON.parse(tracks));
      }
    } catch (error) {
      logger.error('Failed to load downloaded tracks from storage', error);
    }
  };

  const saveDownloadedTrack = async (trackId: string, fileUri: string) => {
    try {
      const updatedTracks = { ...downloadedTracks, [trackId]: fileUri };
      setDownloadedTracks(updatedTracks);
      await SecureStore.setItemAsync(
        DOWNLOADED_TRACKS_KEY,
        JSON.stringify(updatedTracks)
      );
    } catch (error) {
      logger.error('Failed to save downloaded track to storage', error);
    }
  };

  const downloadTrack = async (track: TrackType) => {
    setDownloadingTracks((prev) => ({ ...prev, [track.id]: true }));
    const fileUri = FileSystem.documentDirectory + `${track.id}.mp3`;
    try {
      const { uri } = await FileSystem.downloadAsync(track.url, fileUri);
      saveDownloadedTrack(track.id, uri);
    } catch (error) {
      logger.error('Error downloading track:', error);
      Alert.alert(
        'Download Error',
        'Could not download the pravachan. Please try again.'
      );
    } finally {
      setDownloadingTracks((prev) => ({ ...prev, [track.id]: false }));
    }
  };

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
              const fileUri = downloadedTracks[track.id];
              await FileSystem.deleteAsync(fileUri, { idempotent: true });
              const updatedTracks = { ...downloadedTracks };
              delete updatedTracks[track.id];
              setDownloadedTracks(updatedTracks);
              await SecureStore.setItemAsync(
                DOWNLOADED_TRACKS_KEY,
                JSON.stringify(updatedTracks)
              );
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
    const isDownloaded = downloadedTracks[track.id];
    if (!isDownloaded) {
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
        await playSound(isDownloaded, track.id);
      }
    } else {
      await playSound(isDownloaded, track.id);
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
      <SafeAreaView
        style={[
          styles.screenContainer,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
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
        <Text style={styles.title}>Pravachans {year}</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <TrackItem
            item={item}
            downloadedTracks={downloadedTracks}
            downloadingTracks={downloadingTracks}
            handlePlayPause={handlePlayPause}
            downloadTrack={downloadTrack}
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

// TrackItem component remains the same
type TrackItemProps = {
    item: TrackType;
    downloadedTracks: { [key: string]: string };
    downloadingTracks: { [key: string]: boolean };
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
    downloadedTracks,
    downloadingTracks,
    handlePlayPause,
    downloadTrack,
    deleteTrack,
    currentTrackId,
    isPlaying,
    playbackStatus,
    onSlidingComplete,
    formatTime,
}: TrackItemProps) => {
    const isDownloaded = !!downloadedTracks[item.id];
    const isDownloading = downloadingTracks[item.id];
    const isActive = item.id === currentTrackId;

    return (
        <View style={styles.card}>
            <View style={styles.trackRow}>
                <View style={styles.trackInfo}>
                    <Text style={styles.trackTitle}>{item.title}</Text>
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
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },
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