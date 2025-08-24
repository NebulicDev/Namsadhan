import { Audio } from 'expo-av';
import { Pause, Play } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFA07A',
};

// --- Music Data ---
const MUSIC_DATA = [
  { id: '1', title: 'Duparche Bhajan', file: require('../../assets/audio/Duparche Bhajan.mp3') },
  { id: '2', title: 'Kakad Arti', file: require('../../assets/audio/Kakad Arti.mp3') },
  { id: '3', title: 'Prastavik', file: require('../../assets/audio/Prastavik.mp3') },
  { id: '4', title: 'Ratriche Bhajan', file: require('../../assets/audio/Ratriche Bhajan.mp3') },
  { id: '5', title: 'Sakalche Bhajan', file: require('../../assets/audio/Sakalche Bhajan.mp3') },
];

const LIVE_STREAMS = [
    { id: '1', title: 'Live Darshan 1', url: 'https://rtsp.me/embed/6F8nRBez/' },
    { id: '2', title: 'Live Darshan 2', url: 'https://rtsp.me/embed/9ZZNTtZT/' },
]

export default function MusicScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = async (track: typeof MUSIC_DATA[0]) => {
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

    if (sound) {
      await sound.unloadAsync();
    }

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
            <Text style={styles.title}>Live & Sacred Sounds</Text>
            <Text style={styles.subtitle}>Watch live streams and listen to bhajans</Text>
        </View>
        
        {/* Upper Section: Videos */}
        <ScrollView style={styles.upperSection}>
            {LIVE_STREAMS.map(stream => (
                 <View key={stream.id} style={styles.videoContainer}>
                    <Text style={styles.videoTitle}>{stream.title}</Text>
                    <WebView
                        style={styles.webview}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: stream.url }}
                    />
                </View>
            ))}
        </ScrollView>

        {/* Lower Section: Audio */}
        <View style={styles.lowerSection}>
            <Text style={styles.audioSectionTitle}>Bhajans & Kirtans</Text>
            <FlatList
                data={MUSIC_DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.audioListContent}
                renderItem={({ item }) => {
                    const isActive = item.id === currentTrackId && isPlaying;
                    return (
                        <TouchableOpacity style={styles.audioItem} onPress={() => playTrack(item)}>
                            <View style={[styles.audioIconCircle, isActive && {backgroundColor: THEME.accent}]}>
                                {isActive ? <Pause size={24} color={THEME.white} /> : <Play size={24} color={THEME.primary} style={{marginLeft: 2}}/>}
                            </View>
                            <Text style={styles.audioTitle} numberOfLines={2}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
  },
  subtitle: {
    fontSize: 18,
    color: THEME.lightText,
    marginTop: 4,
  },
  upperSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  videoContainer: {
    marginBottom: 20,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 10,
  },
  webview: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 15,
    backgroundColor: '#000',
  },
  lowerSection: {
    height: 200,
    borderTopWidth: 1,
    borderTopColor: THEME.primary,
    paddingTop: 20,
  },
  audioSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  audioListContent: {
    paddingHorizontal: 20,
  },
  audioItem: {
    alignItems: 'center',
    width: 100,
    marginRight: 10,
  },
  audioIconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: THEME.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  audioTitle: {
    fontSize: 14,
    color: THEME.text,
    textAlign: 'center',
  },
});
