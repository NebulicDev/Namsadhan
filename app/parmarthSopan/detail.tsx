// app/parmarthSopan/detail.tsx
import { Audio } from 'expo-av';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, PauseCircle, PlayCircle } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { getItemById, getStaticSectionById, SopanItem, StaticSection } from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  card: '#FFFFFF',
  meaningBg: '#F5E6D3',
  playColor: '#E65100',
};

export default function SopanDetailScreen() {
  const router = useRouter();
  const { itemId, isStatic } = useLocalSearchParams();
  
  // Determine if we are loading a static section or a Sopan Item
  const item = isStatic === 'true' 
    ? getStaticSectionById(itemId as string) 
    : getItemById(itemId as string);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync();
    };
  }, [sound]);

  const handleAudioPress = async () => {
    // Audio logic only applies to SopanItem
    if (!item || isStatic === 'true' || !(item as SopanItem).audioDriveId) return;
    const sopanItem = item as SopanItem;

    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
        return;
      }

      setIsBuffering(true);
      const uri = `https://docs.google.com/uc?export=download&id=${sopanItem.audioDriveId}`;
      const { sound: newSound } = await Audio.Sound.createAsync({ uri }, { shouldPlay: true });

      setSound(newSound);
      setIsPlaying(true);
      setIsBuffering(false);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          if (status.didJustFinish) {
            setIsPlaying(false);
            newSound.setPositionAsync(0);
          }
          if (status.isBuffering) setIsBuffering(true);
          else setIsBuffering(false);
        }
      });

    } catch (error) {
      console.error("Error playing audio", error);
      setIsBuffering(false);
      alert("Could not play audio.");
    }
  };

  if (!item) return <View style={styles.container}><Text style={{padding:20}}>Item not found</Text></View>;

  // Render logic
  const isSopanItem = isStatic !== 'true';
  const sopanItem = isSopanItem ? (item as SopanItem) : null;
  const staticItem = !isSopanItem ? (item as StaticSection) : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        
        {/* Audio Button */}
        {sopanItem?.audioDriveId ? (
          <TouchableOpacity onPress={handleAudioPress} disabled={isBuffering}>
            {isBuffering ? <ActivityIndicator color={THEME.playColor} /> : 
             isPlaying ? <PauseCircle size={32} color={THEME.playColor} /> : 
             <PlayCircle size={32} color={THEME.playColor} />}
          </TouchableOpacity>
        ) : null}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {sopanItem?.singer && (
          <Text style={styles.singerText}>🎤 Sung by: {sopanItem.singer}</Text>
        )}

        <Text style={styles.title}>{item.title}</Text>
        
        {sopanItem && <Text style={styles.author}>— {sopanItem.author}</Text>}

        <View style={styles.card}>
          <Text style={styles.hindiText}>
            {sopanItem ? sopanItem.hindiText : staticItem?.content}
          </Text>
        </View>

        {sopanItem?.meaning && (
          <View style={styles.meaningBox}>
            <Text style={styles.meaningLabel}>MEANING</Text>
            <Text style={styles.meaningText}>{sopanItem.meaning}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  header: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    padding: 20, paddingTop: 50 
  },
  backBtn: { padding: 5 },
  content: { padding: 20, paddingBottom: 60 },
  
  singerText: { 
    fontSize: 12, color: THEME.playColor, marginBottom: 10, fontWeight: 'bold', 
    textTransform: 'uppercase', letterSpacing: 1 
  },
  title: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 5 },
  author: { fontSize: 16, color: '#8D6E63', marginBottom: 25, fontStyle: 'italic' },
  
  card: {
    backgroundColor: THEME.card, padding: 25, borderRadius: 16, marginBottom: 25,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10
  },
  hindiText: { 
    fontSize: 18, lineHeight: 32, color: THEME.text, textAlign: 'left', fontWeight: '500' 
  },
  
  meaningBox: {
    backgroundColor: THEME.meaningBg, padding: 20, borderRadius: 12,
    borderLeftWidth: 4, borderLeftColor: THEME.primary
  },
  meaningLabel: { 
    fontSize: 12, fontWeight: 'bold', color: '#8D6E63', marginBottom: 8, letterSpacing: 1 
  },
  meaningText: { fontSize: 16, lineHeight: 26, color: THEME.text },
});