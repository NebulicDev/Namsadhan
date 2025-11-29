// app/pravachans/[id].tsx
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
    SectionList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getDriveDownloadUrl, PRAVACHANS_DATA, PravachanTrack } from '../../assets/text/pravachansData';
import { useAudio } from '../../context/AudioContext';
import { useDownload } from '../../context/DownloadContext';

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
  sectionHeader: '#FDF5E6',
};

export default function SpeakerDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
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

  // State
  const [speakerData, setSpeakerData] = useState(PRAVACHANS_DATA.find(s => s.id === id));

  // Update data if ID changes
  useEffect(() => {
    const found = PRAVACHANS_DATA.find(s => s.id === id);
    setSpeakerData(found);
    loadDownloadedTracks();
  }, [id]);

  // Group Tracks by Year
  const sections = useMemo(() => {
    if (!speakerData || !speakerData.tracks.length) return [];

    const grouped: Record<string, PravachanTrack[]> = {};
    
    speakerData.tracks.forEach(track => {
      const yearKey = track.year ? track.year.toString() : 'All Tracks';
      if (!grouped[yearKey]) {
        grouped[yearKey] = [];
      }
      grouped[yearKey].push(track);
    });

    // Sort years descending (newest first), keeping 'All Tracks' at top if mixed
    const sortedKeys = Object.keys(grouped).sort((a, b) => {
        if (a === 'All Tracks') return -1;
        if (b === 'All Tracks') return 1;
        return parseInt(b) - parseInt(a);
    });

    return sortedKeys.map(key => ({
      title: key,
      data: grouped[key],
    }));
  }, [speakerData]);

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
    
    // If not downloaded, you might want to stream it or force download. 
    // Ideally, for Drive links, streaming is hard without a direct link. 
    // Assuming we force download for now as per previous logic, or if you have direct stream links.
    if (!fileUri) {
      Alert.alert(
        'Download Required',
        'Please download the pravachan to listen.'
      );
      // Optional: Auto-start download here if you prefer
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

  // Render Item
  const renderItem = ({ item }: { item: PravachanTrack }) => {
    const trackDownloadState = downloadState[item.id];
    const isDownloaded = trackDownloadState?.isCompleted ?? false;
    const isDownloading = trackDownloadState?.isDownloading ?? false;
    const isActive = item.id === currentTrackId;

    // Helper to map PravachanTrack to the format expected by startDownload (if types differ slightly)
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
                {/* Icon */}
                <View style={[styles.iconContainer, isActive && styles.iconActive]}>
                    {isActive && isPlaying ? (
                        <Pause size={24} color={isActive ? '#FFF' : THEME.primary} fill={isActive ? '#FFF' : 'transparent'} />
                    ) : (
                        <Music size={24} color={isActive ? '#FFF' : THEME.primary} />
                    )}
                </View>

                {/* Info */}
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

            {/* Slider */}
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

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  if (!speakerData) {
    return (
      <View style={[styles.screenContainer, styles.center]}>
        <Text style={{ color: THEME.textLight }}>Speaker not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
            <Text style={{ color: THEME.text, fontWeight: 'bold' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle} numberOfLines={1}>{speakerData.name}</Text>
            <Text style={styles.headerSubtitle}>{speakerData.tracks.length} Pravachans</Text>
        </View>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  headerSubtitle: { fontSize: 13, color: THEME.textLight, marginTop: 2 },

  listContent: { paddingHorizontal: 16, paddingBottom: 40 },
  
  sectionHeader: {
    paddingVertical: 10,
    marginBottom: 8,
    marginTop: 10,
    backgroundColor: THEME.background,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: THEME.textLight,
    letterSpacing: 0.5,
  },

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
  
  infoContainer: { flex: 1 },
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