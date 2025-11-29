// app/pravachans/[id]/[collectionId].tsx
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    ArrowDownToLine,
    ChevronLeft,
    Music,
    Pause,
    Play,
    Trash2,
} from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
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
import { getDriveDownloadUrl, PRAVACHANS_DATA, PravachanTrack } from '../../../assets/text/pravachansData';
import { MarqueeText } from '../../../components/MarqueeText';
import { useAudio } from '../../../context/AudioContext';
import { useDownload } from '../../../context/DownloadContext';

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

export default function CollectionDetailsScreen() {
  const router = useRouter();
  // We capture params from the URL here
  const { id, collectionId, title } = useLocalSearchParams<{ id: string; collectionId: string; title: string }>();
  const insets = useSafeAreaInsets();
  
  // Contexts
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

  const [speakerData] = useState(PRAVACHANS_DATA.find(s => s.id === id));

  useEffect(() => {
    loadDownloadedTracks();
  }, []);

  // Filter Tracks based on the Collection ID (Year or "all")
  const filteredTracks = useMemo(() => {
    if (!speakerData) return [];
    
    if (collectionId === 'all') {
        // Return tracks that DON'T have a year
        return speakerData.tracks.filter(t => !t.year);
    } 
    
    // Otherwise filter by specific year
    return speakerData.tracks.filter(t => t.year?.toString() === collectionId);
  }, [speakerData, collectionId]);

  // Handlers
  const deleteTrack = async (track: PravachanTrack) => {
    Alert.alert(
      'Delete Download',
      `Remove "${track.title}" from downloads?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
             if (currentTrackId === track.id) {
               await pauseSound();
             }
             await deleteDownloadedTrack(track.id);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handlePlayPause = async (track: PravachanTrack) => {
    const fileUri = getDownloadedFileUri(track.id);
    
    if (!fileUri) {
      Alert.alert(
        'Download Required',
        'Please download the pravachan to listen.'
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

  const renderItem = ({ item }: { item: PravachanTrack }) => {
    const trackDownloadState = downloadState[item.id];
    const isDownloaded = trackDownloadState?.isCompleted ?? false;
    const isDownloading = trackDownloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    const downloadItem = {
        ...item,
        speaker: speakerData?.name || 'Unknown',
        url: getDriveDownloadUrl(item.driveId),
        year: item.year || 0
    };

    return (
      <View style={styles.cardWrapper}>
         <LinearGradient
            colors={isActive ? ['#FFFFFF', '#FFF8E1'] : ['#FFFFFF', '#FFFDF9']}
            style={[styles.card, isActive && styles.cardActive]}
        >
            <View style={styles.trackRow}>
                <View style={[styles.iconContainer, isActive && styles.iconActive]}>
                    {isActive && isPlaying ? (
                        <Pause size={24} color={isActive ? '#FFF' : THEME.primary} fill={isActive ? '#FFF' : 'transparent'} />
                    ) : (
                        <Music size={24} color={isActive ? '#FFF' : THEME.primary} />
                    )}
                </View>

                <View style={styles.infoContainer}>
                    <MarqueeText 
                        text={item.title} 
                        style={[styles.trackTitle, isActive && styles.textActive]}
                        duration={8000}
                        delay={1500}
                    />
                    <Text style={styles.trackSubtitle}>
                        {isDownloaded ? 'Available Offline' : 'Download to Play'}
                    </Text>
                </View>

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
                        onPress={() => (isDownloaded ? handlePlayPause(item) : startDownload(downloadItem))}
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

            {isActive && (
                <View style={styles.sliderView}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={playbackStatus.duration || 1}
                        value={playbackStatus.position}
                        onSlidingComplete={seekSound}
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
      
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle} numberOfLines={1}>{title || 'Recordings'}</Text>
            <Text style={styles.headerSubtitle}>{filteredTracks.length} tracks</Text>
        </View>
      </View>

      <FlatList
        data={filteredTracks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  headerSubtitle: { fontSize: 13, color: THEME.textLight, marginTop: 2 },
  listContent: { paddingHorizontal: 16, paddingBottom: 40 },

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
  
  trackRow: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5E6D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconActive: { backgroundColor: THEME.text },
  infoContainer: { flex: 1, marginRight: 8, overflow: 'hidden' },
  trackTitle: { fontSize: 16, fontWeight: '600', color: THEME.text, marginBottom: 2 },
  textActive: { fontWeight: 'bold' },
  trackSubtitle: { fontSize: 12, color: THEME.textLight },
  actions: { flexDirection: 'row', alignItems: 'center' },
  actionButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 4 },
  mainAction: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sliderView: { marginTop: 16, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.03)' },
  slider: { width: '100%', height: 40 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 2, marginTop: -8 },
  timeText: { fontSize: 11, color: THEME.textLight, fontVariant: ['tabular-nums'] },
});