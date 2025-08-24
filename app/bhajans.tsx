import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { ChevronLeft, Music4, Pause, Play } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFA07A',
};

const MUSIC_DATA = [
  { id: '1', title: 'Duparche Bhajan', artist: 'Traditional', file: require('../assets/audio/Duparche Bhajan.mp3') },
  { id: '2', title: 'Kakad Arti', artist: 'Devotional', file: require('../assets/audio/Kakad Arti.mp3') },
  { id: '3', title: 'Prastavik', artist: 'Instrumental', file: require('../assets/audio/Prastavik.mp3') },
  { id: '4', title: 'Ratriche Bhajan', artist: 'Traditional', file: require('../assets/audio/Ratriche Bhajan.mp3') },
  { id: '5', title: 'Sakalche Bhajan', artist: 'Traditional', file: require('../assets/audio/Sakalche Bhajan.mp3') },
];

export default function BhajansScreen() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = async (track: any) => {
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
    const { sound: newSound } = await Audio.Sound.createAsync(track.file);
    setSound(newSound);
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    await newSound.playAsync();
  };

  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  const TrackItem = ({ item }: { item: any }) => {
    const isActive = item.id === currentTrackId && isPlaying;
    return (
      <View style={styles.card}>
        <View style={styles.iconContainer}><Music4 size={28} color={THEME.primary} /></View>
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>{item.title}</Text>
          <Text style={styles.trackArtist}>{item.artist}</Text>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={() => playTrack(item)}>
          {isActive ? <Pause size={28} color={THEME.accent} /> : <Play size={28} color={THEME.accent} />}
        </TouchableOpacity>
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
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { backgroundColor: THEME.card, borderRadius: 15, padding: 20, marginBottom: 15, flexDirection: 'row', alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  iconContainer: { width: 50, height: 50, borderRadius: 10, backgroundColor: THEME.background, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 18, fontWeight: '600', color: THEME.text },
  trackArtist: { fontSize: 14, color: THEME.lightText, marginTop: 2 },
  playButton: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
});
