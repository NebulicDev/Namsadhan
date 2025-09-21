// app/pravachans/index.tsx
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store'; // Use SecureStore
import { ChevronLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { db } from '../../firebaseConfig';
import logger from '../../utils/logger'; // Import the logger

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  primary: '#D2B48C',
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

export default function PravachansScreen() {
  const router = useRouter();
  const [pravachansData, setPravachansData] = useState<YearType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPravachans = async () => {
      // 1. Try to load from secure cache first
      try {
        const cachedData = await SecureStore.getItemAsync(CACHE_KEY);
        if (cachedData) {
          setPravachansData(JSON.parse(cachedData));
          setIsLoading(false);
        }
      } catch (e) {
        logger.error('Failed to load cached pravachans:', e); // Use logger
      }

      // 2. Fetch from Firestore
      try {
        const collectionRef = db.collection('pravachans_by_year');
        const snapshot = await collectionRef.get();

        const fetchedData: YearType[] = snapshot.docs.map((doc) => {
          const year = doc.id;
          const yearNumber = parseInt(year);
          const tracksData = doc.data().tracks || [];

          return {
            year,
            tracks: tracksData.map((track: Omit<TrackType, 'url' | 'year'>) => ({
              ...track,
              year: yearNumber,
              url: `https://drive.google.com/uc?export=download&id=${track.driveId}`,
            })),
          };
        });

        fetchedData.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        
        // 3. Update state and cache if data has changed
        const currentDataString = await SecureStore.getItemAsync(CACHE_KEY);
        if (JSON.stringify(fetchedData) !== currentDataString) {
          setPravachansData(fetchedData);
          await SecureStore.setItemAsync(CACHE_KEY, JSON.stringify(fetchedData));
        }

      } catch (error) {
        logger.error("Error fetching pravachans:", error); // Use logger
        if (pravachansData.length === 0) {
          Alert.alert("Error", "Could not fetch pravachans. Please check your internet connection.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadPravachans();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.screenContainer,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{ color: THEME.text, marginTop: 10 }}>
          Loading Pravachans...
        </Text>
      </SafeAreaView>
    );
  }

  const renderGridItem = ({ item }: { item: YearType }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => router.push(`/pravachans/${item.year}`)}
    >
      <Text style={styles.yearTitle}>{item.year}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Pravachans</Text>
      </View>
      <FlatList
        data={pravachansData}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.year}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text, flex: 1 },
  listContent: {
    paddingHorizontal: 15,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: THEME.card,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  yearTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.text,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});