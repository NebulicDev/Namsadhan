import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useRouter } from 'expo-router';
import { ChevronLeft, Download, Music4, Pause, Play, Trash2 } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFA07A',
};

const MUSIC_DATA = [
  { id: '1', title: 'Prastavik', url: 'https://drive.google.com/uc?export=download&id=1ZE4IOKTcwbWDVsIfEg6t_y6ouv9N57W2' },
  { id: '2', title: 'Kakad Arti',  url: 'https://drive.google.com/uc?export=download&id=https://drive.google.com/file/d/1QE4obQNx2RebmgXtgyvIoLscu7EIBigZ/view?usp=sharing' },
  { id: '3', title: 'Sakalche Bhajan', url: 'https://drive.google.com/uc?export=download&id=1s9Me_3pQlmSchAmRzGvSFQZUOTJRfw-G' },
  { id: '4', title: 'Duparche Bhajan', url: 'https://drive.google.com/uc?export=download&id=1KRfT9noKVEtnAVu2Okl23WKFCPQEpb7O' },
  { id: '5', title: 'Ratriche Bhajan', url: 'https://drive.google.com/uc?export=download&id=1s8cyIaOGAcQHXAUB5PouJF7dde-HDFdg' },
];

export default function BhajansScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadedTracks, setDownloadedTracks] = useState<{ [key: string]: string }>({});
  const [downloadingTracks, setDownloadingTracks] = useState<{ [key: string]: boolean }>({});
  const [playbackStatus, setPlaybackStatus] = useState({ position: 0, duration: 0 });

  useEffect(() => {
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
      const tracks = await AsyncStorage.getItem('downloaded_bhajans');
      if (tracks) setDownloadedTracks(JSON.parse(tracks));
    } catch (error) {
      console.error('Failed to load downloaded tracks from storage', error);
    }
  };

  const saveDownloadedTrack = async (trackId: string, fileUri: string) => {
    try {
      const updatedTracks = { ...downloadedTracks, [trackId]: fileUri };
      setDownloadedTracks(updatedTracks);
      await AsyncStorage.setItem('downloaded_bhajans', JSON.stringify(updatedTracks));
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
      Alert.alert('Download Error', 'Could not download the bhajan. Please try again.');
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

  const playTrack = async (track: any) => {
    const isDownloaded = downloadedTracks[track.id];
    if (!isDownloaded) {
      Alert.alert('Not Downloaded', 'Please download the bhajan before playing.');
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
      "Are you sure you want to delete all downloaded bhajans? This cannot be undone.",
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
              await AsyncStorage.removeItem('downloaded_bhajans');
              setDownloadedTracks({});
              Alert.alert('Success', 'All downloaded bhajans have been cleared.');
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

  const TrackItem = ({ item }: { item: any }) => {
    const isDownloaded = !!downloadedTracks[item.id];
    const isDownloading = downloadingTracks[item.id];
    const isActive = item.id === currentTrackId;

    return (
      <View style={styles.card}>
        <View style={styles.trackRow}>
          <View style={styles.iconContainer}><Music4 size={28} color={THEME.primary} /></View>
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle}>{item.title}</Text>
          </View>
          {isDownloaded ? (
            <TouchableOpacity style={styles.playButton} onPress={() => playTrack(item)}>
              {isActive && isPlaying ? <Pause size={28} color={THEME.accent} /> : <Play size={28} color={THEME.accent} />}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.playButton} onPress={() => downloadTrack(item)} disabled={isDownloading}>
              {isDownloading ? <ActivityIndicator color={THEME.primary} /> : <Download size={28} color={THEME.primary} />}
            </TouchableOpacity>
          )}
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
        <TouchableOpacity onPress={clearDownloads} style={styles.clearButton}>
          <Trash2 size={24} color={THEME.text} />
        </TouchableOpacity>
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
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },
  clearButton: { padding: 5 },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { backgroundColor: THEME.card, borderRadius: 15, padding: 20, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  iconContainer: { width: 50, height: 50, borderRadius: 10, backgroundColor: THEME.background, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 18, fontWeight: '600', color: THEME.text },
  playButton: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
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