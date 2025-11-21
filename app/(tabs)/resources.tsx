// app/(tabs)/resources.tsx
import * as Haptics from 'expo-haptics'; // Added Haptics import
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  BellRing,
  Book,
  BookA,
  BookOpen,
  BookOpenText,
  BookText,
  ChevronRight,
  Mic2,
  Radio,
  Scroll,
  TvMinimalPlay,
} from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// --- THEME ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
  iconBg: '#FFF5E1',
  liveRed: '#E53935',
};

// --- DATA ---
const LIVE_ITEM = { id: 'live', title: 'Samadhi Darshan', icon: TvMinimalPlay, route: '/liveDarshan', desc: 'Watch Now' };

const GRID_ITEMS = [
  { id: 'bhajans', title: 'Bhajans', icon: BellRing, route: '/bhajans' },
  { id: 'pravachans', title: 'Pravachans', icon: Mic2, route: '/pravachans' },
  { id: 'dasbodh', title: 'Dasbodh', icon: BookText, route: '/dasbodh' },
  { id: 'nitya', title: 'Nityanemavali', icon: BookOpen, route: '/nityaNemavali' },
  { id: 'vivaran', title: 'Nemavali Vivaran', icon: BookOpenText, route: '/nemavaliVivaran' },
  { id: 'parmarth', title: 'Parmarth Mandir', icon: Book, route: '/parmarthMandir' },
  { id: 'shlok', title: 'Manache Shlok', icon: Scroll, route: '/manacheShlok' },
  { id: 'glossary', title: 'Glossary', icon: BookA, route: '/glossary' },
];

export default function ResourcesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // --- RENDER: HERO CARD (LIVE) ---
  const renderHero = () => {
    const Icon = LIVE_ITEM.icon;
    return (
      <TouchableOpacity
        style={styles.heroContainer}
        activeOpacity={0.9}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // Added Haptic
          router.push(LIVE_ITEM.route as any);
        }}
      >
        <LinearGradient
          colors={['#FFFFFF', '#FFFDF9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        >
          <View style={styles.watermarkHero}>
             <Icon size={120} color={THEME.primary} opacity={0.08} />
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroIconRow}>
                <View style={[styles.iconWrapper, { backgroundColor: '#FFEBEE' }]}>
                    <Icon size={28} color={THEME.liveRed} />
                </View>
                <View style={styles.liveBadge}>
                    <Radio size={10} color={THEME.cardBg} />
                    <Text style={styles.liveText}>LIVE</Text>
                </View>
            </View>
            
            <View>
                <Text style={styles.heroTitle}>{LIVE_ITEM.title}</Text>
                <Text style={styles.heroSubtitle}>Nimbal Ashram</Text>
            </View>
          </View>

          <View style={styles.arrowCircle}>
             <ChevronRight size={20} color={THEME.text} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  // --- RENDER: GRID CARD ---
  const renderGridItem = (item: typeof GRID_ITEMS[0]) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.gridItemContainer}
        activeOpacity={0.9}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // Added Haptic
          router.push(item.route as any);
        }}
      >
        <LinearGradient
          colors={['#FFFFFF', '#FFFCF5']}
          style={styles.gridGradient}
        >
            <View style={styles.gridContent}>
                <View style={styles.iconWrapper}>
                    <Icon size={24} color={THEME.text} />
                </View>
                <Text style={styles.gridTitle} numberOfLines={2}>{item.title}</Text>
            </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />

      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent, 
          { paddingTop: insets.top + 20 } 
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. HERO SECTION */}
        {renderHero()}

        {/* 2. GRID SECTION */}
        <View style={styles.gridContainer}>
          {GRID_ITEMS.map(renderGridItem)}
        </View>

        <View style={{ height: 40 }} /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },

  // --- HERO STYLES ---
  heroContainer: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    borderRadius: 24,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    backgroundColor: THEME.cardBg,
  },
  heroGradient: {
    flex: 1,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  watermarkHero: {
    position: 'absolute',
    right: -20,
    top: -30,
    transform: [{ rotate: '-10deg' }],
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroIconRow: {
    marginRight: 16,
    alignItems: 'center',
  },
  liveBadge: {
    position: 'absolute',
    bottom: -6,
    backgroundColor: THEME.liveRed,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  liveText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '800',
    marginLeft: 2,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.text,
  },
  heroSubtitle: {
    fontSize: 12,
    color: THEME.textLight,
    marginTop: 2,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5E6D3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // --- GRID STYLES ---
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItemContainer: {
    width: '48%',
    height: 110, // Rectangular but compact
    marginBottom: 12,
    borderRadius: 20,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: THEME.cardBg,
  },
  gridGradient: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  gridContent: {
    alignItems: 'flex-start',
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.text,
    marginTop: 12,
  },
  
  // SHARED
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: THEME.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
});