// app/parmarthSopan/index.tsx
import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight, FileText, Scroll, ScrollText, TableOfContents, User } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PARMARTH_SOPAN_STATIC_SECTIONS } from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#3E2723',
  subText: '#8D6E63',
  accent: '#FFB88D',
  card: '#FFFFFF',
  cardBorder: '#EFEBE9',
  iconBg: '#FFF3E0',
};

export default function ParmarthSopanScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets(); // FIX: Handle status bar

  // Front Matter (Preface, Intros, etc.)
  const FRONT_MATTER = PARMARTH_SOPAN_STATIC_SECTIONS.filter(s => s.type === 'frontmatter');
  
  // Back Matter (Notes, Appendices)
  const BACK_MATTER = PARMARTH_SOPAN_STATIC_SECTIONS.filter(s => s.type === 'backmatter');

  const MENU_ITEMS = [
    {
      id: 'part1',
      title: 'Part I: Padas',
      subtitle: '100',
      icon: ScrollText,
      route: '/parmarthSopan/chapters',
      params: { part: 1, title: 'Part I: Padas' }
    },
    {
      id: 'part2',
      title: 'Part II: Dohas',
      subtitle: '100',
      icon: Scroll,
      route: '/parmarthSopan/chapters',
      params: { part: 2, title: 'Part II: Dohas' }
    },
  ];

  const INDICES = [
    {
      id: 'author',
      title: 'Index by Author',
      icon: User,
      route: '/parmarthSopan/items',
      params: { mode: 'authors', title: 'Index by Author' }
    },
    {
      id: 'alpha',
      title: 'Alphabetical Index',
      icon: TableOfContents,
      route: '/parmarthSopan/items',
      params: { mode: 'alphabetical', title: 'Alphabetical Index' }
    },
  ];

  const renderStaticItem = (item: typeof FRONT_MATTER[0]) => (
    <TouchableOpacity
      key={item.id}
      style={styles.staticCard}
      onPress={() => router.push({ 
        pathname: '/parmarthSopan/detail' as any, // FIX: Cast to any to suppress TS warning
        params: { itemId: item.id, title: item.title, isStatic: 'true' } 
      })}
    >
      <View style={styles.staticIconBox}>
         <FileText size={18} color={THEME.subText} />
      </View>
      <Text style={styles.staticCardTitle} numberOfLines={1}>{item.title}</Text>
      <ChevronRight size={18} color="#D7CCC8" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with Insets */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} hitSlop={20}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Parmarth Sopan</Text>
        <View style={{width: 28}} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 1. CONTENTS (Front Matter) */}
        <Text style={styles.sectionLabel}>CONTENTS</Text>
        {FRONT_MATTER.map(renderStaticItem)}

        {/* 2. MAIN CONTENT (Parts) */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>MAIN CONTENT</Text>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push({ pathname: item.route as any, params: item.params })} // FIX: Cast to any
          >
            <View style={styles.iconBox}>
              <item.icon size={28} color={THEME.accent} />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
            <ChevronRight size={20} color="#D7CCC8" />
          </TouchableOpacity>
        ))}

        {/* 3. APPENDICES & NOTES (Back Matter) */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>APPENDICES & NOTES</Text>
        {BACK_MATTER.map(renderStaticItem)}

        {/* 4. INDICES (Last) */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>INDICES</Text>
        <View style={styles.grid}>
          {INDICES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              onPress={() => router.push({ pathname: item.route as any, params: item.params })} // FIX: Cast to any
            >
              <View style={[styles.iconBox, { width: 44, height: 44, marginBottom: 10 }]}>
                 <item.icon size={22} color={THEME.accent} />
              </View>
              <Text style={styles.gridTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={{height: 40}} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  header: { 
    flexDirection: 'row', alignItems: 'center',
    //  justifyContent: 'space-between',
    paddingHorizontal: 20, paddingBottom: 15,
    borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.03)',
    backgroundColor: THEME.background
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: THEME.text, letterSpacing: 0.5 },
  
  content: { padding: 20 },
  sectionLabel: { 
    fontSize: 12, fontWeight: '700', color: THEME.subText, 
    marginBottom: 10, letterSpacing: 1.5, marginLeft: 4 
  },
  
  // Main Cards
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    padding: 16, borderRadius: 16, marginBottom: 15,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 2, shadowColor: '#5D4037', shadowOpacity: 0.05, shadowRadius: 5, shadowOffset: {width:0, height:2}
  },
  iconBox: { 
    width: 50, height: 50, borderRadius: 16, backgroundColor: THEME.iconBg, 
    alignItems: 'center', justifyContent: 'center', marginRight: 15 
  },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: THEME.text, marginBottom: 4 },
  cardSubtitle: { fontSize: 14, color: THEME.subText },
  
  // Grid Indices
  grid: { flexDirection: 'row', justifyContent: 'space-between' },
  gridCard: {
    width: '48%', backgroundColor: THEME.card, padding: 16, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 2, shadowColor: '#5D4037', shadowOpacity: 0.05, shadowRadius: 5, shadowOffset: {width:0, height:2}
  },
  gridTitle: { fontSize: 14, fontWeight: '600', color: THEME.text, textAlign: 'center' },

  // Static Sections (Small rows)
  staticCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    paddingVertical: 14, paddingHorizontal: 16, borderRadius: 12, marginBottom: 10,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 1, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2
  },
  staticIconBox: { marginRight: 12, opacity: 0.7 },
  staticCardTitle: { flex: 1, fontSize: 15, color: THEME.text, fontWeight: '500' },
});