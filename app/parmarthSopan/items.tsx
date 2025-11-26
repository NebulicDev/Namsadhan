// app/parmarthSopan/items.tsx
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight, User } from 'lucide-react-native';
import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  getAlphabeticalItemsByPart,
  getAuthorsByPart,
  getItemsByAuthorAndPart,
  getItemsByChapter
} from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  secondaryText: '#8D6E63',
  headerBg: '#F5E6D3',
  headerText: '#5D4037',
};

export default function ItemsListScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const mode = params.mode; // 'chapter' | 'authors' | 'alphabetical' | 'byAuthor'
  const title = params.title as string;

  // --- DATA LOGIC ---
  const { listData, isSectionList } = useMemo(() => {
    // 1. CHAPTER VIEW (Simple List)
    if (mode === 'chapter') {
      const data = getItemsByChapter(Number(params.part) as 1 | 2, Number(params.chapter));
      return { listData: data, isSectionList: false };
    } 
    
    // 2. ALPHABETICAL INDEX (Sectioned: Padas / Dohas)
    else if (mode === 'alphabetical') {
      const padas = getAlphabeticalItemsByPart(1);
      const dohas = getAlphabeticalItemsByPart(2);
      const sections = [
        { title: 'Padas (100)', data: padas },
        { title: 'Dohas (100)', data: dohas }
      ];
      return { listData: sections, isSectionList: true };
    } 
    
    // 3. AUTHOR INDEX (Sectioned: Padas / Dohas)
    else if (mode === 'authors') {
      const padasAuthors = getAuthorsByPart(1).map(name => ({ name, part: 1 }));
      const dohasAuthors = getAuthorsByPart(2).map(name => ({ name, part: 2 }));
      const sections = [
        { title: 'Padas Authors', data: padasAuthors },
        { title: 'Dohas Authors', data: dohasAuthors }
      ];
      return { listData: sections, isSectionList: true };
    } 
    
    // 4. ITEMS BY AUTHOR (Simple List)
    else if (mode === 'byAuthor') {
      const data = getItemsByAuthorAndPart(params.authorName as string, Number(params.part) as 1 | 2);
      return { listData: data, isSectionList: false };
    }
    
    return { listData: [], isSectionList: false };
  }, [mode, params]);

  // --- PRESS HANDLER ---
  const handlePress = (item: any) => {
    Haptics.selectionAsync();

    if (item.name) { 
      // It's an Author Object { name: 'Kabir', part: 1 }
      router.push({
        pathname: '/parmarthSopan/items',
        params: { mode: 'byAuthor', authorName: item.name, part: item.part, title: `${item.name} (${item.part === 1 ? 'Padas' : 'Dohas'})` }
      });
    } else {
      // It's a SopanItem -> Go to Detail Screen
      router.push({
        pathname: '/parmarthSopan/detail',
        params: { itemId: item.id, title: item.title }
      });
    }
  };

  // --- RENDER ITEM ---
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    // Check if it's an Author Row
    if (item.name) {
        return (
            <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                </View>
                <User size={18} color={THEME.secondaryText} />
            </TouchableOpacity>
        );
    }

    // It's a SopanItem
    // Determine numbering based on context
    let displayIndex = 0;
    if (mode === 'chapter') displayIndex = item.chapterSequence;
    // For Alphabetical, we usually want 1-100 index? The user said "should have numbering as well".
    // The globalSequence field has the 1-100 index.
    else if (mode === 'alphabetical') displayIndex = item.globalSequence || (index + 1);
    else if (mode === 'byAuthor') displayIndex = index + 1;

    return (
      <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
        <View style={styles.textContainer}>
          <View style={{flexDirection:'row'}}>
             <Text style={styles.indexNumber}>{displayIndex}. </Text>
             <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
          <Text style={styles.itemSubtitle}>{item.author} • Ch {item.chapter}</Text>
        </View>
        <ChevronRight size={20} color={THEME.secondaryText} />
      </TouchableOpacity>
    );
  };

  // --- RENDER SECTION HEADER ---
  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
      </View>

      {isSectionList ? (
        <SectionList
          sections={listData as any}
          keyExtractor={(item, index) => item.id || item.name + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.listContent}
          stickySectionHeadersEnabled={true}
        />
      ) : (
        <FlatList
          data={listData as any}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>No items found.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50, paddingBottom: 10 },
  backBtn: { marginRight: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: THEME.text, flex: 1 },
  
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  
  sectionHeader: {
    backgroundColor: THEME.headerBg,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    color: THEME.headerText,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  card: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: THEME.card, padding: 18, borderRadius: 12, marginBottom: 12,
    elevation: 1, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 3
  },
  textContainer: { flex: 1, marginRight: 10 },
  indexNumber: { fontSize: 16, fontWeight: 'bold', color: '#A1887F' },
  itemTitle: { fontSize: 16, fontWeight: '600', color: THEME.text, flex: 1 },
  itemSubtitle: { fontSize: 13, color: THEME.secondaryText, marginTop: 4, marginLeft: 25 }, 
  emptyText: { textAlign: 'center', marginTop: 50, color: THEME.secondaryText, fontSize: 16 },
});