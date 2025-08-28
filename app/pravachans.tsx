import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useRouter } from 'expo-router';
import { ChevronDown, ChevronLeft, ChevronRight, Download, Pause, Play, Trash2 } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFA07A',
};

const PRAVACHANS_DATA = [
  {
    year: '2008',
    tracks: [
      { id: 'p1', title: 'Pravachan on Guru Bhakti', speaker: 'Speaker Name', url: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_6' },
      { id: 'p2', title: 'The Path of Namasmaran', speaker: 'Speaker Name', url: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_7' },
    ]
  },
  {
    year: '2009',
    tracks: [
      { id: 'p3', title: 'The Essence of Gita', speaker: 'Speaker Name', url: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_8' },
    ]
  },
];

// --- Component moved outside of the main component ---
const TrackItem = ({ item, isPlaying, onPlayPause, isDownloaded, isDownloading, onDownload }: { item: any, isPlaying: boolean, onPlayPause: (track: any) => void, isDownloaded: boolean, isDownloading: boolean, onDownload: (track: any) => void }) => {
  return (
    <View style={styles.trackContainer}>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.speaker}</Text>
      </View>
      {isDownloaded ? (
        <TouchableOpacity style={styles.playButton} onPress={() => onPlayPause(item)}>
          {isPlaying ? <Pause size={24} color={THEME.accent} /> : <Play size={24} color={THEME.accent} />}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playButton} onPress={() => onDownload(item)} disabled={isDownloading}>
          {isDownloading ? <ActivityIndicator color={THEME.primary} /> : <Download size={24} color={THEME.primary} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

// --- Component moved outside of the main component ---
const YearSection = ({ year, tracks, currentTrackId, isPlaying, onPlayPause, downloadedTracks, downloadingTracks, onDownload }: { year: string, tracks: any[], currentTrackId: string | null, isPlaying: boolean, onPlayPause: (track: any) => void, downloadedTracks: { [key: string]: string }, downloadingTracks: { [key: string]: boolean }, onDownload: (track: any) => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.yearHeader} onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.yearTitle}>{year}</Text>
        {isExpanded ? <ChevronDown size={24} color={THEME.text} /> : <ChevronRight size={24} color={THEME.text} />}
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.tracksList}>
          {tracks.map(track => (
            <TrackItem
              key={track.id}
              item={track}
              isPlaying={currentTrackId === track.id && isPlaying}
              onPlayPause={onPlayPause}
              isDownloaded={!!downloadedTracks[track.id]}
              isDownloading={downloadingTracks[track.id]}
              onDownload={onDownload}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default function PravachansScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadedTracks, setDownloadedTracks] = useState<{ [key: string]: string }>({});
  const [downloadingTracks, setDownloadingTracks] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  useEffect(() => {
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
    loadDownloadedTracks();
  }, []);

  const saveDownloadedTrack = async (trackId: string, fileUri: string) => {
    try {
      const updatedTracks = { ...downloadedTracks, [trackId]: fileUri };
      setDownloadedTracks(updatedTracks);
      await AsyncStorage.setItem('downloaded_pravachans', JSON.stringify(updatedTracks));
    } catch (error) {
      console.error('Failed to save downloaded track to storage', error);
    }
  };

  const downloadTrack = async (track: any) => {
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

  const playTrack = async (track: any) => {
    const isDownloaded = downloadedTracks[track.id];
    if (!isDownloaded) {
      Alert.alert('Not Downloaded', 'Please download the pravachan before playing.');
      return;
    }

    if (sound && isPlaying && currentTrackId === track.id) {
      await sound.pauseAsync();
      setIsPlaying(false);
      return;
    }
    if (sound && !isPlaying && currentTrackId === track.id) {
      await sound.playAsync();
      setIsPlaying(true);
      return;
    }
    if (sound) await sound.unloadAsync();

    const { sound: newSound } = await Audio.Sound.createAsync({ uri: isDownloaded });
    setSound(newSound);
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    await newSound.playAsync();
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

  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);
  
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
        data={PRAVACHANS_DATA}
        renderItem={({ item }) => (
          <YearSection
            year={item.year}
            tracks={item.tracks}
            currentTrackId={currentTrackId}
            isPlaying={isPlaying}
            onPlayPause={playTrack}
            downloadedTracks={downloadedTracks}
            downloadingTracks={downloadingTracks}
            onDownload={downloadTrack}
          />
        )}
        keyExtractor={(item) => item.year}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1, textAlign: 'center' },
  clearButton: { padding: 5 },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { backgroundColor: THEME.card, borderRadius: 15, padding: 20, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  yearHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  yearTitle: { fontSize: 20, fontWeight: '700', color: THEME.text },
  tracksList: { marginTop: 15, borderTopWidth: 1, borderTopColor: THEME.background },
  trackContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: THEME.background },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 16, fontWeight: '600', color: THEME.text },
  trackArtist: { fontSize: 14, color: THEME.lightText, marginTop: 2 },
  playButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
});