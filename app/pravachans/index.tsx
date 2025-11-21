// app/pravachans/index.tsx
import { collection, getDocs } from '@react-native-firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Calendar, ChevronLeft, Disc, MicVocal } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { db } from '../../firebaseConfig';
import logger from '../../utils/logger';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
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
  const insets = useSafeAreaInsets();
  const [pravachansData, setPravachansData] = useState<YearType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- DATA LOGIC (UNTOUCHED) ---
  useEffect(() => {
    const loadPravachans = async () => {
      try {
        const cachedData = await SecureStore.getItemAsync(CACHE_KEY);
        if (cachedData) {
          setPravachansData(JSON.parse(cachedData));
          setIsLoading(false);
        }
      } catch (e) {
        logger.error('Failed to load cached pravachans:', e);
      }

      try {
        const collectionRef = collection(db, 'pravachans_by_year');
        const snapshot = await getDocs(collectionRef);

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
        
        const currentDataString = await SecureStore.getItemAsync(CACHE_KEY);
        if (JSON.stringify(fetchedData) !== currentDataString) {
          setPravachansData(fetchedData);
          await SecureStore.setItemAsync(CACHE_KEY, JSON.stringify(fetchedData));
        }

      } catch (error) {
        logger.error("Error fetching pravachans:", error);
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
      <View style={[styles.screenContainer, styles.center]}>
        <ActivityIndicator size="large" color={THEME.text} />
        <Text style={styles.loadingText}>Loading Library...</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: YearType }) => {
    const count = item.tracks?.length || 0;

    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push(`/pravachans/${item.year}`)}
          style={styles.cardTouchable}
        >
          <LinearGradient
            colors={['#FFFFFF', '#FFFDF9']}
            style={styles.cardGradient}
          >
            {/* Watermark */}
            <View style={styles.watermarkContainer}>
              <Disc size={80} color={THEME.primary} opacity={0.1} />
            </View>

            {/* Header */}
            <View style={styles.cardHeader}>
              <View style={styles.yearBadge}>
                <Calendar size={12} color={THEME.textLight} style={{ marginRight: 4 }} />
                <Text style={styles.yearLabel}>YEAR</Text>
              </View>
              <Text style={styles.yearText}>{item.year}</Text>
            </View>

            {/* Footer */}
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.countText}>{count} Discourses</Text>
                <Text style={styles.subText}>Tap to Explore</Text>
              </View>
              <View style={styles.playButton}>
                 <MicVocal size={14} color="#FFF" />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Pravachans</Text>
      </View>

      <FlatList
        data={pravachansData}
        renderItem={renderItem}
        keyExtractor={(item) => item.year}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: THEME.textLight,
    fontSize: 16,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background, 
    zIndex: 10,
  },
  backButton: { 
    marginRight: 15,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: THEME.text, 
    flex: 1 
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  cardTouchable: {
    borderRadius: 24,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: THEME.cardBg,
  },
  cardGradient: {
    borderRadius: 24,
    padding: 16,
    minHeight: 180,
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  watermarkContainer: {
    position: 'absolute',
    right: -20,
    top: -20,
    transform: [{ rotate: '-15deg' }],
    zIndex: 0,
  },
  cardHeader: {
    zIndex: 1,
  },
  yearBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FDF5E6',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  yearLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: THEME.textLight,
    letterSpacing: 1,
  },
  yearText: {
    fontSize: 32,
    fontWeight: '800',
    color: THEME.text,
    letterSpacing: -1,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  countText: {
    fontSize: 15,
    fontWeight: '700',
    color: THEME.text,
  },
  subText: {
    fontSize: 12,
    color: THEME.textLight,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: THEME.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
});