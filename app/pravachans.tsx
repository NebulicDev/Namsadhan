import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react-native';
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

// --- Updated Pravachans Data with Yearly Grouping ---
const PRAVACHANS_DATA = [
  {
    year: '2008',
    tracks: [
      { id: '1', title: 'Pravachan on Guru Bhakti', speaker: 'Speaker Name', file: require('../assets/audio/Prastavik.mp3') },
      { id: '2', title: 'The Path of Namasmaran', speaker: 'Speaker Name', file: require('../assets/audio/Prastavik.mp3') },
    ]
  },
  {
    year: '2009',
    tracks: [
      { id: '3', title: 'The Essence of Gita', speaker: 'Speaker Name', file: require('../assets/audio/Prastavik.mp3') },
    ]
  },
  // Add more years and tracks here
];

const TrackItem = ({ item, isPlaying, onPlayPause }: { item: any, isPlaying: boolean, onPlayPause: (track: any) => void }) => {
  return (
    <View style={styles.trackContainer}>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.speaker}</Text>
      </View>
      <TouchableOpacity style={styles.playButton} onPress={() => onPlayPause(item)}>
        {isPlaying ? <Pause size={24} color={THEME.accent} /> : <Play size={24} color={THEME.accent} />}
      </TouchableOpacity>
    </View>
  );
};

const YearSection = ({ year, tracks, currentTrackId, isPlaying, onPlayPause }: { year: string, tracks: any[], currentTrackId: string | null, isPlaying: boolean, onPlayPause: (track: any) => void }) => {
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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Pravachans</Text>
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
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text },
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