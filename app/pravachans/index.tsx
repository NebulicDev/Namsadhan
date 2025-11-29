// app/pravachans/index.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronLeft, Disc, MicVocal } from 'lucide-react-native';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PRAVACHANS_DATA, SpeakerProfile } from '../../assets/text/pravachansData';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
};

export default function PravachansScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: SpeakerProfile }) => {
    const count = item.tracks?.length || 0;

    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push(`/pravachans/${item.id}`)}
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

            {/* Image Section */}
            <View style={styles.imageWrapper}>
              <View style={styles.imageContainer}>
                 <Image source={item.image} style={styles.speakerImage} resizeMode="cover" />
              </View>
            </View>

            {/* Info Section */}
            <View style={styles.cardContent}>
              <Text style={styles.speakerName} numberOfLines={2}>
                {item.name}
              </Text>
              
              <View style={styles.footerRow}>
                <View>
                   <Text style={styles.countText}>{count} Discourses</Text>
                   <Text style={styles.subText}>Tap to Listen</Text>
                </View>
                <View style={styles.playButton}>
                   <MicVocal size={14} color="#FFF" />
                </View>
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
      
      {/* Header */}
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
        data={PRAVACHANS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    padding: 12,
    minHeight: 200,
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
  imageWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    zIndex: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
    overflow: 'hidden',
    backgroundColor: '#FDF5E6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  speakerImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    zIndex: 1,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 12,
    textAlign: 'center',
    height: 40, // Fixed height for 2 lines
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 12,
    padding: 8,
  },
  countText: {
    fontSize: 13,
    fontWeight: '700',
    color: THEME.text,
  },
  subText: {
    fontSize: 10,
    color: THEME.textLight,
  },
  playButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: THEME.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
});