import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { ChevronDown, ChevronLeft, ChevronRight, Download, Pause, Play, Trash2 } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFA07A',
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

const groupAndSortPravachans = (pravachansList: TrackType[]): YearType[] => {
    const groupedByYear = pravachansList.reduce((acc, track) => {
      const year = track.year.toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(track);
      return acc;
    }, {} as { [key: string]: TrackType[] });

    return Object.keys(groupedByYear).map(year => ({
      year,
      tracks: groupedByYear[year]
    })).sort((a, b) => parseInt(b.year) - parseInt(a.year));
};


export default function PravachansScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadedTracks, setDownloadedTracks] = useState<{ [key: string]: string }>({});
  const [downloadingTracks, setDownloadingTracks] = useState<{ [key: string]: boolean }>({});
  const [playbackStatus, setPlaybackStatus] = useState<PlayStatusType>({ position: 0, duration: 0 });
  const [pravachansData, setPravachansData] = useState<YearType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPravachans = async () => {
      // 1. Try to load from cache first
      try {
        const cachedPravachans = await AsyncStorage.getItem('pravachans_data');
        if (cachedPravachans) {
          const parsedPravachans: TrackType[] = JSON.parse(cachedPravachans);
          setPravachansData(groupAndSortPravachans(parsedPravachans));
          setIsLoading(false); // Stop loading, show cached data
        }
      } catch (e) {
        console.error("Failed to load cached pravachans:", e);
      }

      // 2. Fetch from Firestore to get the latest data
      try {
        const pravachansCollection = collection(db, 'pravachans');
        const pravachansSnapshot = await getDocs(pravachansCollection);
        const pravachansList: TrackType[] = pravachansSnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<TrackType, 'id' | 'url'>),
          url: `https://drive.google.com/uc?export=download&id=${doc.data().driveId}`
        }));
        
        // 3. Update state and cache if new data is different
        const currentDataString = await AsyncStorage.getItem('pravachans_data');
        if (JSON.stringify(pravachansList) !== currentDataString) {
          setPravachansData(groupAndSortPravachans(pravachansList));
          await AsyncStorage.setItem('pravachans_data', JSON.stringify(pravachansList));
        }

      } catch (error) {
        console.error("Error fetching pravachans:", error);
        if (!pravachansData.length) { // Only alert if there's no cached data to show
            Alert.alert("Error", "Could not fetch pravachans. Please check your internet connection.");
        }
      } finally {
        setIsLoading(false); // Stop loading in all cases
      }
    };

    loadPravachans();

    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
    loadDownloadedTracks();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const loadDownloadedTracks = async () => {
    try {
      const tracks = await AsyncStorage.getItem('downloaded_pravachans');
      if (tracks) {
        setDownloadedTracks(JSON.parse(tracks));
      }
    } catch (error) {
      console.error('Failed to load downloaded tracks from storage', error);
    }
  };

  const saveDownloadedTrack = async (trackId: string, fileUri: string) => {
    try {
      const updatedTracks = { ...downloadedTracks, [trackId]: fileUri };
      setDownloadedTracks(updatedTracks);
      await AsyncStorage.setItem('downloaded_pravachans', JSON.stringify(updatedTracks));
    } catch (error) {
      console.error('Failed to save downloaded track to storage', error);
    }
  };

  const downloadTrack = async (track: TrackType) => {
    setDownloadingTracks(prev => ({ ...prev, [track.id]: true }));
    const fileUri = FileSystem.documentDirectory + `${track.id}.mp3`;
    try {
      const { uri } = await FileSystem.downloadAsync(track.url, fileUri);
      saveDownloadedTrack(track.id, uri);
    } catch (error) {
      console.error('Error downloading track:', error);
      Alert.alert('Download Error', 'Could not download the pravachan. Please try again.');
    } finally {
      setDownloadingTracks(prev => ({ ...prev, [track.id]: false }));
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setPlaybackStatus({
        position: status.positionMillis,
        duration: status.durationMillis,
      });
      if (status.didJustFinish) {
        setIsPlaying(false);
      }
    }
  };

  const playTrack = async (track: TrackType) => {
    const isDownloaded = downloadedTracks[track.id];
    if (!isDownloaded) {
      Alert.alert('Not Downloaded', 'Please download the pravachan before playing.');
      return;
    }

    if (sound && currentTrackId === track.id) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
      return;
    }

    if (sound) await sound.unloadAsync();

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: isDownloaded },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
    setCurrentTrackId(track.id);
    setIsPlaying(true);
  };

  const clearDownloads = async () => {
    Alert.alert(
      "Clear All Downloads",
      "Are you sure you want to delete all downloaded pravachans? This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          onPress: async () => {
            try {
              if (sound) {
                await sound.unloadAsync();
                setSound(null);
                setIsPlaying(false);
                setCurrentTrackId(null);
              }
              for (const trackId in downloadedTracks) {
                await FileSystem.deleteAsync(downloadedTracks[trackId], { idempotent: true });
              }
              await AsyncStorage.removeItem('downloaded_pravachans');
              setDownloadedTracks({});
              Alert.alert('Success', 'All downloaded pravachans have been cleared.');
            } catch (error) {
              console.error('Failed to clear downloads', error);
              Alert.alert('Error', 'Could not clear all downloads.');
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const formatTime = (millis: number) => {
    if (!millis) return '0:00';
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(parseInt(seconds) < 10 ? '0' : '')}${seconds}`;
  };

  const onSlidingComplete = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.screenContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{ color: THEME.text, marginTop: 10 }}>Loading Pravachans...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Pravachans</Text>
        <TouchableOpacity onPress={clearDownloads} style={styles.clearButton}>
          <Trash2 size={24} color={THEME.text} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={pravachansData}
        renderItem={({ item }) => <YearSection item={item} downloadedTracks={downloadedTracks} downloadingTracks={downloadingTracks} playTrack={playTrack} downloadTrack={downloadTrack} currentTrackId={currentTrackId} isPlaying={isPlaying} playbackStatus={playbackStatus} onSlidingComplete={onSlidingComplete} formatTime={formatTime} />}
        keyExtractor={(item) => item.year}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

type YearSectionProps = {
  item: YearType;
  downloadedTracks: { [key: string]: string };
  downloadingTracks: { [key: string]: boolean };
  playTrack: (track: TrackType) => Promise<void>;
  downloadTrack: (track: TrackType) => Promise<void>;
  currentTrackId: string | null;
  isPlaying: boolean;
  playbackStatus: PlayStatusType;
  onSlidingComplete: (value: number) => Promise<void>;
  formatTime: (millis: number) => string;
};

const YearSection = ({
  item,
  downloadedTracks,
  downloadingTracks,
  playTrack,
  downloadTrack,
  currentTrackId,
  isPlaying,
  playbackStatus,
  onSlidingComplete,
  formatTime,
}: YearSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.yearHeader} onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.yearTitle}>{item.year}</Text>
        {isExpanded ? <ChevronDown size={24} color={THEME.text} /> : <ChevronRight size={24} color={THEME.text} />}
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.tracksList}>
          {item.tracks.map((track) => (
            <TrackItem
              key={track.id}
              item={track}
              downloadedTracks={downloadedTracks}
              downloadingTracks={downloadingTracks}
              playTrack={playTrack}
              downloadTrack={downloadTrack}
              currentTrackId={currentTrackId}
              isPlaying={isPlaying}
              playbackStatus={playbackStatus}
              onSlidingComplete={onSlidingComplete}
              formatTime={formatTime}
            />
          ))}
        </View>
      )}
    </View>
  );
};

type TrackItemProps = {
  item: TrackType;
  downloadedTracks: { [key: string]: string };
  downloadingTracks: { [key: string]: boolean };
  playTrack: (track: TrackType) => Promise<void>;
  downloadTrack: (track: TrackType) => Promise<void>;
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
  playTrack,
  downloadTrack,
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
    <View style={styles.trackContainer}>
      <View style={styles.trackRow}>
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>{item.title}</Text>
          <Text style={styles.trackArtist}>{item.speaker}</Text>
        </View>
        {isDownloaded ? (
          <TouchableOpacity style={styles.playButton} onPress={() => playTrack(item)}>
            {isPlaying && isActive ? <Pause size={24} color={THEME.accent} /> : <Play size={24} color={THEME.accent} />}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.playButton} onPress={() => downloadTrack(item)} disabled={isDownloading}>
            {isDownloading ? <ActivityIndicator color={THEME.primary} /> : <Download size={24} color={THEME.primary} />}
          </TouchableOpacity>
        )}
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
            <Text style={styles.timeText}>{formatTime(playbackStatus.position)}</Text>
            <Text style={styles.timeText}>{formatTime(playbackStatus.duration)}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },
  clearButton: { padding: 5 },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { backgroundColor: THEME.card, borderRadius: 15, padding: 20, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  yearHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  yearTitle: { fontSize: 20, fontWeight: '700', color: THEME.text },
  tracksList: { marginTop: 15, borderTopWidth: 1, borderTopColor: THEME.background },
  trackContainer: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: THEME.background },
  trackRow: { flexDirection: 'row', alignItems: 'center' },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 16, fontWeight: '600', color: THEME.text },
  trackArtist: { fontSize: 14, color: THEME.lightText, marginTop: 2 },
  playButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
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