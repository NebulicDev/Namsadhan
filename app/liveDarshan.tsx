import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
};

const LIVE_STREAMS = [
    { id: '1', title: 'Live Darshan 1', url: 'https://rtsp.me/embed/6F8nRBez/' },
    { id: '2', title: 'Live Darshan 2', url: 'https://rtsp.me/embed/9ZZNTtZT/' },
];

export default function LiveDarshanScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Live Darshan</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
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
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  content: {
    padding: 20,
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
});
