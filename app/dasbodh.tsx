// app/dasbodh.tsx
import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  FlatList,
  ScrollView, // Added ScrollView back
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dasbodhData, Dashak, Samas } from '../assets/text/dasbodhContent';

// --- THEME CONFIGURATION ---
const THEME = {
  background: '#FFF8F0',
  card: '#FFFFFF',
  text: '#5D4037',
  subText: '#8D6E63',
  primary: '#D2B48C',
  highlight: '#FFB74D',
  border: 'rgba(93, 64, 55, 0.1)',
};

// Helper: Convert to Marathi Numerals
const toMarathiNum = (n: string | number) => {
  const numbers = {
    '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
    '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
  };
  return n.toString().replace(/[0-9]/g, (match) => numbers[match as keyof typeof numbers]);
};

export default function DasbodhScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [selectedDashak, setSelectedDashak] = useState<Dashak | null>(null);
  const [selectedSamas, setSelectedSamas] = useState<Samas | null>(null);

  // --- Back Button Handling ---
  useEffect(() => {
    const backAction = () => {
      if (selectedSamas) {
        setSelectedSamas(null);
        return true;
      }
      if (selectedDashak) {
        setSelectedDashak(null);
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [selectedDashak, selectedSamas]);

  // --- RENDERERS ---

  const renderDashakItem = ({ item }: { item: Dashak }) => {
    const displayTitle = item.title.includes(':') ? item.title.split(':')[1].trim() : item.title;
    return (
      <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.8}
        onPress={() => setSelectedDashak(item)}
      >
        <View style={styles.numberBadge}>
          <Text style={styles.numberText}>{toMarathiNum(item.id)}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{displayTitle}</Text>
          <Text style={styles.cardSubtitle}>दशक {toMarathiNum(item.id)}</Text>
        </View>
        <View style={styles.arrowContainer}>
           <ChevronRight size={20} color={THEME.subText} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderSamasItem = ({ item }: { item: Samas }) => {
    const samasNum = item.id.includes('.') ? item.id.split('.')[1] : item.id;
    const displayTitle = item.title.includes(':') ? item.title.split(':')[1].trim() : item.title;

    return (
      <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.8}
        onPress={() => setSelectedSamas(item)}
      >
        <View style={[styles.numberBadge, styles.samasBadge]}>
          <Text style={styles.samasNumberText}>{toMarathiNum(samasNum)}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{displayTitle}</Text>
          <Text style={styles.cardSubtitle}>समास {toMarathiNum(samasNum)}</Text>
        </View>
        <View style={styles.arrowContainer}>
           <ChevronRight size={20} color={THEME.subText} />
        </View>
      </TouchableOpacity>
    );
  };

  // --- MAIN VIEWS ---

  // VIEW 3: Reading Mode (Optimized with ScrollView)
  if (selectedSamas && selectedDashak) {
    const samasNum = selectedSamas.id.split('.')[1] || '0';
    const displayTitle = selectedSamas.title.includes(':') ? selectedSamas.title.split(':')[1].trim() : selectedSamas.title;

    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedSamas(null)} style={styles.iconButton}>
            <ChevronLeft size={28} color={THEME.text} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerSuperTitle}>दशक {toMarathiNum(selectedDashak.id)} • समास {toMarathiNum(samasNum)}</Text>
            <Text style={styles.headerTitle} numberOfLines={1}>{displayTitle}</Text>
          </View>
          <View style={styles.placeholderIcon} />
        </View>

        {/* Content - Switched to ScrollView for better performance with large text */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentWrapper}>
            <Text style={styles.contentText}>{selectedSamas.content}</Text>
            <Text style={styles.jaiJai}>॥ जय जय रघुवीर समर्थ ॥</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  // VIEW 2: Samas List
  if (selectedDashak) {
    const displayTitle = selectedDashak.title.includes(':') ? selectedDashak.title.split(':')[1].trim() : selectedDashak.title;
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedDashak(null)} style={styles.iconButton}>
            <ChevronLeft size={28} color={THEME.text} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerSuperTitle}>दशक {toMarathiNum(selectedDashak.id)}</Text>
            <Text style={styles.headerTitle}>{displayTitle}</Text>
          </View>
          <View style={styles.placeholderIcon} />
        </View>

        <FlatList
          data={selectedDashak.samas}
          renderItem={renderSamasItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  // VIEW 1: Main Dashak List
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />

      <View style={styles.mainHeader}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.mainHeaderTitle}>Dasbodh</Text>
        <View style={styles.placeholderIcon} />
      </View>

      <View style={styles.introCard}>
        <Text style={styles.introSubtitle}>॥ श्रीसमर्थ रामदासस्वामीकृत ॥</Text>
        <Text style={styles.introTitle}>ग्रंथराज दासबोध</Text>
      </View>

      <FlatList
        data={dasbodhData}
        renderItem={renderDashakItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  // --- Headers ---
  mainHeader: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  mainHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.text,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    height: 60,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
  },
  headerSuperTitle: {
    fontSize: 12,
    color: THEME.subText,
    marginBottom: 2,
    fontWeight: '600',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  placeholderIcon: {
    width: 40,
  },
  // --- Intro Card ---
  introCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 24,
    backgroundColor: THEME.card,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#5D4037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  introTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: THEME.text,
  },
  introSubtitle: {
    fontSize: 14,
    color: THEME.subText,
    marginBottom: 4,
    fontWeight: '600',
  },
  // --- Cards ---
  listPadding: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.card,
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 1,
    borderColor: THEME.border,
  },
  numberBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: THEME.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: THEME.primary,
  },
  samasBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFF3E0',
    borderColor: 'transparent',
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
  },
  samasNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.subText,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: THEME.subText,
    fontWeight: '500',
  },
  arrowContainer: {
    paddingLeft: 8,
  },
  // --- Reading View ---
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 60,
  },
  contentWrapper: {
    marginBottom: 20,
  },
  contentText: {
    fontSize: 21,
    lineHeight: 38,
    color: THEME.text,
    textAlign: 'center',
    fontWeight: '400',
  },
  jaiJai: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    opacity: 0.8,
  },
});