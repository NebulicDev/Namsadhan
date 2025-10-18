// app/bhajans.tsx
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import { ChevronLeft, Download, Music4, Pause, Play, Trash2 } from 'lucide-react-native';
import { useEffect } from 'react';
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
import { useAudio } from '../context/AudioContext';
import { useDownload } from '../context/DownloadContext';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
};

const MUSIC_DATA = [
  {
    id: '1',
    title: 'Prastavik',
    url: 'https://drive.google.com/uc?export=download&id=1ZE4IOKTcwbWDVsIfEg6t_y6ouv9N57W2',
  },
  {
    id: '2',
    title: 'Kakad Arti',
    url: 'https://drive.google.com/uc?export=download&id=1QE4obQNx2RebmgXtgyvIoLscu7EIBigZ',
  },
  {
    id: '3',
    title: 'Sakalche Bhajan',
    url: 'https://drive.google.com/uc?export=download&id=1s9Me_3pQlmSchAmRzGvSFQZUOTJRfw-G',
  },
  {
    id: '4',
    title: 'Duparche Bhajan',
    url: 'https://drive.google.com/uc?export=download&id=1KRfT9noKVEtnAVu2Okl23WKFCPQEpb7O',
  },
  {
    id: '5',
    title: 'Ratriche Bhajan',
    url: 'https://drive.google.com/uc?export=download&id=1s8cyIaOGAcQHXAUB5PouJF7dde-HDFdg',
  },
];

export default function BhajansScreen() {
  const router = useRouter();
  const { playSound, pauseSound, seekSound, isPlaying, currentTrackId, playbackStatus } = useAudio();
  const {
    downloadState,
    startDownload,
    getDownloadedFileUri,
    deleteDownloadedTrack,
    loadDownloadedTracks,
  } = useDownload();

  useEffect(() => {
    loadDownloadedTracks();
  }, []);

  const deleteTrack = async (trackId: string) => {
    Alert.alert(
      'Delete Bhajan',
      'Are you sure you want to delete this downloaded bhajan?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              if (currentTrackId === trackId) {
                await pauseSound();
              }
              await deleteDownloadedTrack(trackId);
              Alert.alert('Success', 'The bhajan has been deleted.');
            } catch (error) {
              console.error('Failed to delete bhajan', error);
              Alert.alert('Error', 'Could not delete the bhajan.');
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handlePlayPause = async (track: any) => {
    const fileUri = getDownloadedFileUri(track.id);
    if (!fileUri) {
      Alert.alert('Not Downloaded', 'Please download the bhajan before playing.');
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

  const TrackItem = ({ item }: { item: any }) => {
    const trackDownloadState = downloadState[item.id];
    const isDownloaded = trackDownloadState?.isCompleted ?? false;
    const isDownloading = trackDownloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    return (
      <View style={styles.card}>
        <View style={styles.trackRow}>
          <View style={styles.iconContainer}>
            <Music4 size={28} color={THEME.primary} />
          </View>
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle}>{item.title}</Text>
          </View>

          {isDownloaded && (
            <TouchableOpacity style={styles.actionButton} onPress={() => deleteTrack(item.id)}>
              <Trash2 size={24} color={THEME.lightText} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => (isDownloaded ? handlePlayPause(item) : startDownload(item))}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <ActivityIndicator color={THEME.primary} />
            ) : isDownloaded ? (
              isActive && isPlaying ? (
                <Pause size={28} color={THEME.accent} />
              ) : (
                <Play size={28} color={THEME.accent} />
              )
            ) : (
              <Download size={28} color={THEME.primary} />
            )}
          </TouchableOpacity>
        </View>
        {isActive && (
          <View style={styles.sliderView}>
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
              <Text style={styles.timeText}>{formatTime(playbackStatus.position)}</Text>
              <Text style={styles.timeText}>{formatTime(playbackStatus.duration)}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Bhajans</Text>
        <View style={{ width: 28 }} />
      </View>
      <FlatList
        data={MUSIC_DATA}
        renderItem={TrackItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 18, fontWeight: '600', color: THEME.text },
  actionButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderView: {
    marginTop: 10,
  },
  slider: {
    width: '100%',
    height: 40,
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