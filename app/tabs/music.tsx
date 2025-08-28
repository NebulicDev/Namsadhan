import { useRouter } from 'expo-router';
import { BookOpen, Image, Mic2, Music, Video } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
};

const SectionCard = ({ title, icon, onPress }: { title: string, icon: React.ReactNode, onPress: () => void }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        {icon}
        <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
);

export default function MusicScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screenContainer}>
        <View style={styles.header}>
            {/* <Text style={styles.title}>Media</Text> */}
        </View>
        <View style={styles.cardContainer}>
            <SectionCard 
                title="Live Darshan" 
                icon={<Video size={32} color={THEME.text} />} 
                onPress={() => router.push('/liveDarshan')}
            />
            <SectionCard 
                title="Bhajans" 
                icon={<Music size={32} color={THEME.text} />} 
                onPress={() => router.push('/bhajans')}
            />
            <SectionCard 
                title="Pravachans" 
                icon={<Mic2 size={32} color={THEME.text} />} 
                onPress={() => router.push('/pravachans')}
            />
            <SectionCard 
                title="Nityanemavali" 
                icon={<BookOpen size={32} color={THEME.text} />} 
                onPress={() => router.push('/nityaNemavali')}
            />
            <SectionCard 
                title="Manache Shlok" 
                icon={<BookOpen size={32} color={THEME.text} />} 
                onPress={() => router.push('/manacheShlok')}
            />
            <SectionCard 
                title="Gallery" 
                icon={<Image size={32} color={THEME.text} />} 
                onPress={() => router.push('/gallery')}
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
    marginBottom: 30,
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
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: THEME.text,
    marginLeft: 20,
  },
});
