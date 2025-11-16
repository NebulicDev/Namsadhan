// app/(tabs)/resources.tsx
import { useRouter } from 'expo-router';
import {
  BellRing,
  Book,
  BookOpen,
  BookOpenText,
  BookText,
  Mic2,
  Scroll,
  TvMinimalPlay,
} from 'lucide-react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
};

const SectionCard = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {icon}
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function MusicScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* 3. HERE IS THE FIX:
        We replaced the <View> with <ScrollView>
        and used 'contentContainerStyle' instead of 'style'
      */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <SectionCard
          title="Live Darshan"
          icon={<TvMinimalPlay size={32} color={THEME.text} />}
          onPress={() => router.push('/liveDarshan')}
        />
        <SectionCard
          title="Bhajans"
          icon={<BellRing size={32} color={THEME.text} />}
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
          title="Nemavali Vivaran"
          icon={<BookOpenText size={32} color={THEME.text} />}
          onPress={() => router.push('/nemavaliVivaran')}
        />
        <SectionCard
          title="Parmarth Mandir"
          icon={<Book size={32} color={THEME.text} />}
          onPress={() => router.push('/parmarthMandir')}
        />
        <SectionCard
          title="Manache Shlok"
          icon={<Scroll size={32} color={THEME.text} />}
          onPress={() => router.push('/manacheShlok')}
        />
        <SectionCard
          title="Glossary"
          icon={<BookText size={32} color={THEME.text} />}
          onPress={() => router.push('/glossary')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
    paddingTop: 60,
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
    paddingBottom: 20, // 5. Added padding for a nice space at the bottom
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
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