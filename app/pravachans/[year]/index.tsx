import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { ChevronLeft, User } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logger from '../../../utils/logger';

// Map specific speaker names to your local assets
// MAKE SURE these keys match exactly what is in your Firestore "speaker" field
const SPEAKER_IMAGES: Record<string, any> = {
  'Shri Gurudev Ranade': require('../../../assets/images/shri-gurudev-ranade.jpeg'),
  'Shri Bhausaheb Maharaj': require('../../../assets/images/shri-bhausaheb-maharaj.jpeg'),
  'Shri Amburao Maharaj': require('../../../assets/images/shri-amburao-maharaj.jpeg'),
  'Shri Nimbargi Maharaj': require('../../../assets/images/shri-nimbargi-maharaj.jpeg'),
  // Add others here if needed
};

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
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

const CACHE_KEY = 'pravachans_data_v2';

export default function SpeakerSelectionScreen() {
  const router = useRouter();
  const { year } = useLocalSearchParams<{ year: string }>();
  const [speakers, setSpeakers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSpeakersForYear = async () => {
      if (!year) return;
      setIsLoading(true);
      try {
        const cachedData = await SecureStore.getItemAsync(CACHE_KEY);
        if (cachedData) {
          const allPravachans: YearType[] = JSON.parse(cachedData);
          const yearData = allPravachans.find((item) => item.year === year);
          
          if (yearData && yearData.tracks) {
            // Extract unique speakers
            const uniqueSpeakers = Array.from(
              new Set(yearData.tracks.map((t) => t.speaker || 'Unknown Speaker'))
            );
            setSpeakers(uniqueSpeakers.sort());
          }
        }
      } catch (e) {
        logger.error('Failed to load cached pravachans for speaker list:', e);
        Alert.alert('Error', 'Could not load data.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSpeakersForYear();
  }, [year]);

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.screenContainer, styles.center]}>
        <ActivityIndicator size="large" color={THEME.primary} />
      </SafeAreaView>
    );
  }

  const renderSpeaker = ({ item }: { item: string }) => {
    const imageSource = SPEAKER_IMAGES[item];

    return (
      <TouchableOpacity
        style={styles.speakerCard}
        onPress={() =>
            // Navigate to the [speaker].tsx file we will create next
            router.push({
                pathname: `/pravachans/[year]/[speaker]`,
                params: { year: year, speaker: item }
            })
        }
      >
        <View style={styles.imageContainer}>
          {imageSource ? (
            <Image source={imageSource} style={styles.speakerImage} resizeMode="cover" />
          ) : (
            <View style={styles.placeholderImage}>
              <User size={40} color={THEME.primary} />
            </View>
          )}
        </View>
        <Text style={styles.speakerName}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>{year}</Text>
      </View>

      <FlatList
        data={speakers}
        renderItem={renderSpeaker}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={
            <Text style={styles.emptyText}>No speakers found for this year.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  center: { justifyContent: 'center', alignItems: 'center' },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },
  listContent: { paddingHorizontal: 15, paddingBottom: 40 },
  columnWrapper: { justifyContent: 'space-between' },
  speakerCard: {
    width: '48%',
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#5D4037',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: THEME.primary,
  },
  speakerImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: THEME.text,
    fontSize: 16,
  },
});