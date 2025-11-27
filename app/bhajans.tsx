// app/bhajans.tsx
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  ArrowDownToLine,
  ChevronLeft,
  Music,
  Pause,
  Play,
  Trash2,
} from 'lucide-react-native';
import { useEffect } from 'react';
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
import { useAudio } from '../context/AudioContext';
import { useDownload } from '../context/DownloadContext';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
  sliderThumb: '#5D4037',
  sliderTrack: '#D7CCC8',
  sliderActive: '#8D6E63',
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
  const insets = useSafeAreaInsets();
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

  const renderItem = ({ item }: { item: any }) => {
    const trackDownloadState = downloadState[item.id];
    const isDownloaded = trackDownloadState?.isCompleted ?? false;
    const isDownloading = trackDownloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    return (
      // REPLACED Animated.View with standard View for performance
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

                {/* Title & Subtitle */}
                <View style={styles.trackInfo}>
                    <Text style={[styles.trackTitle, isActive && styles.textActive]}>{item.title}</Text>
                    <Text style={styles.trackSubtitle}>
                         {isDownloaded ? 'Available Offline' : 'Download to Play'}
                    </Text>
                </View>

                {/* Actions */}
                <View style={styles.actions}>
                    {isDownloaded && (
                         <TouchableOpacity 
                            style={styles.actionButton} 
                            onPress={() => deleteTrack(item.id)}
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
                        maximumValue={playbackStatus.duration}
                        value={playbackStatus.position}
                        onSlidingComplete={onSlidingComplete}
                        minimumTrackTintColor={THEME.sliderActive}
                        maximumTrackTintColor={THEME.sliderTrack}
                        thumbTintColor={THEME.sliderThumb}
                    />
                    <View style={styles.timeRow}>
                        <Text style={styles.timeText}>{formatTime(playbackStatus.position)}</Text>
                        <Text style={styles.timeText}>{formatTime(playbackStatus.duration)}</Text>
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
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Bhajans</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* List */}
      <FlatList
        data={MUSIC_DATA}
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
  
  // HEADER
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },

  // LIST
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },

  // CARD
  cardWrapper: {
    marginBottom: 16,
    borderRadius: 20,
    // Shadow
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
  
  // ICON
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5E6D3', // Light tan
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconActive: {
    backgroundColor: THEME.text, // Dark brown
  },

  // INFO
  trackInfo: { flex: 1 },
  trackTitle: { 
    fontSize: 17, 
    fontWeight: '600', 
    color: THEME.text,
    marginBottom: 2 
  },
  textActive: {
    fontWeight: 'bold',
  },
  trackSubtitle: {
    fontSize: 12,
    color: THEME.textLight,
  },

  // ACTIONS
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

  // SLIDER
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
    color: THEME.textLight,
    fontSize: 11,
    fontVariant: ['tabular-nums'],
  },
});