// app/parmarthSopan/index.tsx
import { useRouter } from 'expo-router';
import { BookOpen, ChevronLeft, ChevronRight, FileText, Library, ListFilter, User } from 'lucide-react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PARMARTH_SOPAN_STATIC_SECTIONS } from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  iconBg: '#F5E6D3',
};

export default function ParmarthSopanScreen() {
  const router = useRouter();

  // Front Matter (Preface, Intros, etc.)
  const FRONT_MATTER = PARMARTH_SOPAN_STATIC_SECTIONS.filter(s => s.type === 'frontmatter');
  
  // Back Matter (Notes, Appendices)
  const BACK_MATTER = PARMARTH_SOPAN_STATIC_SECTIONS.filter(s => s.type === 'backmatter');

  const MENU_ITEMS = [
    {
      id: 'part1',
      title: 'Part I: Padas',
      subtitle: 'Songs of Devotion',
      icon: BookOpen,
      route: '/parmarthSopan/chapters',
      params: { part: 1, title: 'Part I: Padas' }
    },
    {
      id: 'part2',
      title: 'Part II: Dohas',
      subtitle: 'Couplets of Wisdom',
      icon: Library,
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
      icon: ListFilter,
      route: '/parmarthSopan/items',
      params: { mode: 'alphabetical', title: 'Alphabetical Index' }
    },
  ];

  const renderStaticItem = (item: typeof FRONT_MATTER[0]) => (
    <TouchableOpacity
      key={item.id}
      style={styles.staticCard}
      onPress={() => router.push({ 
        pathname: '/parmarthSopan/detail', 
        params: { itemId: item.id, title: item.title, isStatic: 'true' } 
      })}
    >
      <FileText size={20} color="#8D6E63" style={{marginRight: 10}} />
      <Text style={styles.staticCardTitle} numberOfLines={1}>{item.title}</Text>
      <ChevronRight size={18} color="#A1887F" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Parmarth Sopan</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* FRONT MATTER */}
        <Text style={styles.sectionLabel}>INTRODUCTION</Text>
        {FRONT_MATTER.map(renderStaticItem)}

        {/* MAIN CONTENT */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>MAIN CONTENT</Text>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push({ pathname: item.route, params: item.params })}
          >
            <View style={styles.iconBox}>
              <item.icon size={24} color={THEME.text} />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
            <ChevronRight size={20} color="#A1887F" />
          </TouchableOpacity>
        ))}

        {/* INDICES */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>INDICES</Text>
        <View style={styles.grid}>
          {INDICES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              onPress={() => router.push({ pathname: item.route, params: item.params })}
            >
              <item.icon size={28} color={THEME.text} style={{ marginBottom: 10 }} />
              <Text style={styles.gridTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BACK MATTER */}
        <Text style={[styles.sectionLabel, { marginTop: 25 }]}>APPENDICES & NOTES</Text>
        {BACK_MATTER.map(renderStaticItem)}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50 },
  backBtn: { marginRight: 15 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: THEME.text },
  content: { padding: 20, paddingBottom: 50 },
  sectionLabel: { fontSize: 13, fontWeight: '700', color: '#A1887F', marginBottom: 10, letterSpacing: 1 },
  
  // Main Cards
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    padding: 20, borderRadius: 16, marginBottom: 15,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5
  },
  iconBox: { width: 50, height: 50, borderRadius: 25, backgroundColor: THEME.iconBg, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: THEME.text, marginBottom: 4 },
  cardSubtitle: { fontSize: 14, color: '#8D6E63' },
  
  // Grid Indices
  grid: { flexDirection: 'row', justifyContent: 'space-between' },
  gridCard: {
    width: '48%', backgroundColor: THEME.card, padding: 20, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5
  },
  gridTitle: { fontSize: 15, fontWeight: '600', color: THEME.text, textAlign: 'center' },

  // Static Sections (Small rows)
  staticCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    paddingVertical: 12, paddingHorizontal: 15, borderRadius: 12, marginBottom: 8,
    elevation: 1, shadowColor: '#000', shadowOpacity: 0.03
  },
  staticCardTitle: { flex: 1, fontSize: 15, color: THEME.text, fontWeight: '500' },
});