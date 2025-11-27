// app/parmarthSopan/items.tsx
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { BookOpen, ChevronLeft, ChevronRight, Library, Music, User } from 'lucide-react-native';
import React, { useMemo } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  getAlphabeticalItemsByPart,
  getAuthorsByPart,
  getItemsByAuthorAndPart,
  getItemsByChapter,
  SopanItem
} from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#3E2723',
  subText: '#8D6E63',
  accent: '#FFB88D',
  card: '#FFFFFF',
  cardBorder: '#EFEBE9',
  iconBg: '#FFF3E0',
};

// --- GRID CONSTANTS (Matching Section 8) ---
const numColumns = 4;
const screenWidth = Dimensions.get('window').width;
const paddingHorizontal = 15;
const margin = 6;
const itemWidth = (screenWidth - (paddingHorizontal * 2) - (margin * 2 * numColumns)) / numColumns;

export default function ItemsListScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  
  // Modes: 
  // - Selection: 'alphabetical' | 'authors'
  // - Grids/Lists: 'alphabetical_grid' | 'alphabetical_list' | 'authors_list' | 'chapter' | 'byAuthor'
  const mode = params.mode; 
  const title = params.title as string;
  const part = Number(params.part); 
  const selectedLetter = params.letter as string; // NEW: For filtering by letter

  // --- 1. DETERMINE VIEW TYPE ---
  const isSelectionMode = mode === 'alphabetical' || mode === 'authors';
  const isGridMode = mode === 'alphabetical_grid';

  // --- 2. DATA LOGIC ---
  const { listData, gridData } = useMemo(() => {
    if (isSelectionMode) return { listData: [], gridData: [] };

    // A. Chapter View (Simple List)
    if (mode === 'chapter') {
      return { listData: getItemsByChapter(part as 1 | 2, Number(params.chapter)), gridData: [] };
    } 
    
    // B. Alphabetical Grid (The Letters)
    else if (mode === 'alphabetical_grid') {
      const allItems = getAlphabeticalItemsByPart(part as 1 | 2);
      // Extract unique first letters
      const letters = Array.from(new Set(allItems.map(item => item.title.trim().charAt(0))));
      // Sort items: Vowels/Consonants usually sort okay with localeCompare, but we can standard sort
      letters.sort((a, b) => a.localeCompare(b, 'hi'));
      
      const letterObjects = letters.map(l => ({ id: l, title: l }));
      return { listData: [], gridData: letterObjects };
    }

    // C. Alphabetical List (Filtered by Letter)
    else if (mode === 'alphabetical_list') {
      let data = getAlphabeticalItemsByPart(part as 1 | 2);
      if (selectedLetter) {
        data = data.filter(item => item.title.trim().startsWith(selectedLetter));
      }
      return { listData: data, gridData: [] };
    }
    
    // D. Authors List (Filtered by Part)
    else if (mode === 'authors_list') {
      const data = getAuthorsByPart(part as 1 | 2).map(name => ({ name, part }));
      return { listData: data, gridData: [] };
    }
    
    // E. Items By Author
    else if (mode === 'byAuthor') {
      const data = getItemsByAuthorAndPart(params.authorName as string, part as 1 | 2);
      return { listData: data, gridData: [] };
    }
    
    return { listData: [], gridData: [] };
  }, [mode, part, params, selectedLetter]);

  // --- HANDLERS ---

  // 1. Selection Screen (Part I vs Part II)
  const handleSelectionPress = (selectedPart: 1 | 2) => {
    Haptics.selectionAsync();
    
    if (mode === 'alphabetical') {
      // Go to GRID View
      router.push({
        pathname: '/parmarthSopan/items',
        params: { 
          mode: 'alphabetical_grid', 
          part: selectedPart, 
          title: selectedPart === 1 ? 'Padas Index' : 'Dohas Index' 
        }
      });
    } else {
      // Go to AUTHORS List (Usually short enough to list directly)
      router.push({
        pathname: '/parmarthSopan/items',
        params: { 
          mode: 'authors_list', 
          part: selectedPart, 
          title: selectedPart === 1 ? 'Authors: Padas' : 'Authors: Dohas' 
        }
      });
    }
  };

  // 2. Grid Item Press (Letter Click)
  const handleGridPress = (letter: string) => {
    Haptics.selectionAsync();
    router.push({
      pathname: '/parmarthSopan/items',
      params: { 
        mode: 'alphabetical_list', 
        part: part, 
        letter: letter,
        title: `${title} - ${letter}` 
      }
    });
  };

  // 3. List Item Press (Final Destination)
  const handleItemPress = (item: any) => {
    Haptics.selectionAsync();

    if (item.name) { 
      // It's an Author
      router.push({
        pathname: '/parmarthSopan/items',
        params: { 
          mode: 'byAuthor', 
          authorName: item.name, 
          part: item.part, 
          title: `${item.name} (${item.part === 1 ? 'Padas' : 'Dohas'})` 
        }
      });
    } else {
      // It's a SopanItem
      router.push({
        pathname: '/parmarthSopan/detail',
        params: { itemId: item.id, title: item.title }
      });
    }
  };

  // --- RENDERERS ---

  const renderSelectionScreen = () => (
    <View style={styles.selectionContainer}>
      <TouchableOpacity style={styles.selectionCard} onPress={() => handleSelectionPress(1)}>
        <View style={styles.selectionIconBox}>
          <BookOpen size={32} color={THEME.accent} />
        </View>
        <View style={styles.selectionText}>
          <Text style={styles.selectionTitle}>Part I: Padas</Text>
          <Text style={styles.selectionSubtitle}>Songs of Devotion (100)</Text>
        </View>
        <ChevronRight size={24} color="#D7CCC8" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.selectionCard} onPress={() => handleSelectionPress(2)}>
        <View style={styles.selectionIconBox}>
          <Library size={32} color={THEME.accent} />
        </View>
        <View style={styles.selectionText}>
          <Text style={styles.selectionTitle}>Part II: Dohas</Text>
          <Text style={styles.selectionSubtitle}>Couplets of Wisdom (100)</Text>
        </View>
        <ChevronRight size={24} color="#D7CCC8" />
      </TouchableOpacity>
    </View>
  );

  const renderGridItem = ({ item }: { item: { id: string, title: string } }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => handleGridPress(item.id)}
      activeOpacity={0.7}
    >
      <Text style={styles.gridText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderListItem = ({ item, index }: { item: any, index: number }) => {
    // Author Row
    if (item.name) {
        return (
            <TouchableOpacity style={styles.authorCard} onPress={() => handleItemPress(item)}>
                <View style={styles.row}>
                    <View style={styles.authorIconBox}>
                        <User size={20} color={THEME.accent} />
                    </View>
                    <Text style={styles.authorTitle}>{item.name}</Text>
                </View>
                <ChevronRight size={18} color={THEME.subText} />
            </TouchableOpacity>
        );
    }

    // Sopan Item
    const sopanItem = item as SopanItem;
    let displayIndex = 0;
    if (mode === 'chapter') displayIndex = sopanItem.chapterSequence;
    else displayIndex = index + 1;

    const hasAudio = !!sopanItem.audioDriveId;

    return (
      <TouchableOpacity style={styles.itemCard} onPress={() => handleItemPress(sopanItem)}>
        <View style={styles.indexBox}>
          <Text style={styles.indexNumber}>{displayIndex}</Text>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle} numberOfLines={1}>{sopanItem.title}</Text>
          <View style={styles.metaRow}>
             <Text style={styles.itemSubtitle}>{sopanItem.author}</Text>
             {hasAudio && (
               <View style={styles.audioBadge}>
                 <Music size={10} color={THEME.accent} style={{ marginRight: 3 }} />
                 <Text style={styles.audioBadgeText}>Audio</Text>
               </View>
             )}
          </View>
        </View>
        <ChevronRight size={20} color="#D7CCC8" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} hitSlop={20}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
        <View style={{width: 28}} /> 
      </View>

      {isSelectionMode ? (
        renderSelectionScreen()
      ) : isGridMode ? (
        <FlatList
          data={gridData}
          keyExtractor={(item) => item.id}
          renderItem={renderGridItem}
          numColumns={numColumns}
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={listData}
          keyExtractor={(item: any) => item.id || item.name}
          renderItem={renderListItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={styles.emptyText}>No items found.</Text>}
          initialNumToRender={15}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  
  header: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingBottom: 15,
    borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.03)',
    backgroundColor: THEME.background
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: THEME.text, flex: 1, textAlign: 'center' },
  
  // Selection Screen
  selectionContainer: { padding: 20 },
  selectionCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: THEME.card, padding: 20, borderRadius: 16, marginBottom: 20,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 3, shadowColor: '#5D4037', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: {width:0, height:3}
  },
  selectionIconBox: {
    width: 56, height: 56, borderRadius: 28, backgroundColor: THEME.iconBg,
    alignItems: 'center', justifyContent: 'center', marginRight: 16
  },
  selectionText: { flex: 1 },
  selectionTitle: { fontSize: 18, fontWeight: 'bold', color: THEME.text, marginBottom: 4 },
  selectionSubtitle: { fontSize: 14, color: THEME.subText },

  // Grid Screen
  gridContainer: { paddingHorizontal: paddingHorizontal, paddingTop: 20, paddingBottom: 50 },
  gridItem: {
    width: itemWidth,
    aspectRatio: 1,
    margin: margin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.card,
    borderRadius: 15,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  gridText: { fontSize: 24, fontWeight: 'bold', color: THEME.text },

  // List Screen
  listContent: { padding: 20, paddingBottom: 50 },
  authorCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: THEME.card, padding: 16, borderRadius: 12, marginBottom: 12,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 1, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  authorIconBox: { 
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF3E0', 
    alignItems: 'center', justifyContent: 'center', marginRight: 12 
  },
  authorTitle: { fontSize: 16, fontWeight: '600', color: THEME.text },

  itemCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: THEME.card, padding: 16, borderRadius: 16, marginBottom: 12,
    borderWidth: 1, borderColor: THEME.cardBorder,
    elevation: 2, shadowColor: '#5D4037', shadowOpacity: 0.05, shadowRadius: 4, shadowOffset: {width:0, height:2}
  },
  indexBox: {
    width: 32, height: 32, borderRadius: 10, backgroundColor: '#F5E6D3',
    alignItems: 'center', justifyContent: 'center', marginRight: 15
  },
  indexNumber: { fontSize: 14, fontWeight: 'bold', color: THEME.text },
  textContainer: { flex: 1, marginRight: 10 },
  itemTitle: { fontSize: 16, fontWeight: '600', color: THEME.text, marginBottom: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center' },
  itemSubtitle: { fontSize: 13, color: THEME.subText },
  audioBadge: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF3E0',
    paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, marginLeft: 10
  },
  audioBadgeText: { fontSize: 10, fontWeight: 'bold', color: THEME.accent },
  emptyText: { textAlign: 'center', marginTop: 50, color: THEME.subText, fontSize: 16 },
});