// app/pravachans/index.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
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

const groupAndSortPravachans = (pravachansList: TrackType[]): YearType[] => {
  const groupedByYear = pravachansList.reduce(
    (acc, track) => {
      const year = track.year.toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(track);
      return acc;
    },
    {} as { [key: string]: TrackType[] }
  );

  return Object.keys(groupedByYear)
    .map((year) => ({
      year,
      tracks: groupedByYear[year],
    }))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

export default function PravachansScreen() {
  const router = useRouter();
  const [pravachansData, setPravachansData] = useState<YearType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPravachans = async () => {
      try {
        const cachedPravachans = await AsyncStorage.getItem('pravachans_data');
        if (cachedPravachans) {
          const parsedPravachans: TrackType[] = JSON.parse(cachedPravachans);
          setPravachansData(groupAndSortPravachans(parsedPravachans));
          setIsLoading(false);
        }
      } catch (e) {
        console.error('Failed to load cached pravachans:', e);
      }

      try {
        const pravachansCollection = db.collection('pravachans');
        const pravachansSnapshot = await pravachansCollection.get();
        const pravachansList: TrackType[] = pravachansSnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<TrackType, 'id' | 'url'>),
            url: `https://drive.google.com/uc?export=download&id=${
              doc.data().driveId
            }`,
          })
        );

        const currentDataString = await AsyncStorage.getItem('pravachans_data');
        if (JSON.stringify(pravachansList) !== currentDataString) {
          setPravachansData(groupAndSortPravachans(pravachansList));
          await AsyncStorage.setItem(
            'pravachans_data',
            JSON.stringify(pravachansList)
          );
        }
      } catch (error) {
        console.error('Error fetching pravachans:', error);
        if (pravachansData.length === 0) {
          Alert.alert(
            'Error',
            'Could not fetch pravachans. Please check your internet connection.'
          );
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