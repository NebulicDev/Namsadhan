// app/pravachans/[year]/index.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { AudioLines, ChevronLeft, User } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import logger from '../../../utils/logger';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
};

const SPEAKER_IMAGES: Record<string, any> = {
  'Shri Gurudev Ranade': require('../../../assets/images/shri-gurudev-ranade.jpeg'),
  'Shri Bhausaheb Maharaj': require('../../../assets/images/shri-bhausaheb-maharaj.jpeg'),
  'Shri Amburao Maharaj': require('../../../assets/images/shri-amburao-maharaj.jpeg'),
  'Shri Nimbargi Maharaj': require('../../../assets/images/shri-nimbargi-maharaj.jpeg'),
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
  const insets = useSafeAreaInsets();
  const [speakers, setSpeakers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- LOGIC (UNTOUCHED) ---
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
      <View style={[styles.screenContainer, styles.center]}>
        <ActivityIndicator size="large" color={THEME.text} />
      </View>
    );
  }

  const renderSpeaker = ({ item }: { item: string }) => {
    const imageSource = SPEAKER_IMAGES[item];

    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cardTouchable}
          onPress={() =>
            router.push({
                pathname: `/pravachans/[year]/[speaker]`,
                params: { year: year, speaker: item }
            })
          }
        >
          <LinearGradient
            colors={['#FFFFFF', '#FFFDF9']}
            style={styles.cardGradient}
          >
            {/* Watermark */}
            <View style={styles.watermark}>
                <User size={100} color={THEME.primary} opacity={0.05} />
            </View>

            {/* Image */}
            <View style={styles.imageWrapper}>
              <View style={styles.imageContainer}>
                {imageSource ? (
                  <Image source={imageSource} style={styles.speakerImage} resizeMode="cover" />
                ) : (
                  <View style={styles.placeholderImage}>
                    <User size={40} color={THEME.primary} opacity={0.6} />
                  </View>
                )}
              </View>
            </View>
            
            {/* Text */}
            <View style={styles.textContainer}>
                <Text style={styles.speakerLabel}>SPEAKER</Text>
                <Text style={styles.speakerName} numberOfLines={2}>{item}</Text>
            </View>

            {/* Action */}
            <View style={styles.actionRow}>
                 <Text style={styles.actionText}>Listen</Text>
                 <View style={styles.iconCircle}>
                    <AudioLines size={14} color="#FFF" />
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
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <View>
            <Text style={styles.headerTitle}>Pravachans</Text>
            <Text style={styles.headerSubtitle}>Year {year}</Text>
        </View>
      </View>

      <FlatList
        data={speakers}
        renderItem={renderSpeaker}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
            <View style={styles.center}>
                <Text style={styles.emptyText}>No speakers found for this year.</Text>
            </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  backButton: { marginRight: 15 },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.text,
  },
  headerSubtitle: {
    fontSize: 14,
    color: THEME.textLight,
    marginTop: 2,
  },

  listContent: { paddingHorizontal: 16, paddingBottom: 40, paddingTop: 10 },
  columnWrapper: { justifyContent: 'space-between' },

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
    padding: 12,
    minHeight: 220,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'space-between'
  },
  watermark: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    zIndex: 0,
  },
  imageWrapper: {
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: 'hidden',
    backgroundColor: '#FFF8E1',
    borderWidth: 3,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 4,
    zIndex: 1,
  },
  speakerLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: THEME.textLight,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.text,
    textAlign: 'center',
    lineHeight: 22,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: '#F5E6D3',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '600',
    color: THEME.text,
    marginRight: 6,
  },
  iconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: THEME.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: THEME.textLight,
    fontSize: 16,
  },
});