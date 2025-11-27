// app/parmarthSopan/chapters.tsx
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CHAPTER_TITLES } from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#3E2723',
  card: '#FFFFFF',
  iconBg: '#F5E6D3',
  subText: '#8D6E63',
  cardBorder: '#EFEBE9',
  circleBg: '#FFF3E0',
  accent: '#FFB88D',
};

export default function ChaptersScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets(); // FIX: Safe Area Insets

  const part = Number(params.part); // 1 or 2
  const pageTitle = params.title as string;

  const chapters = [1, 2, 3, 4, 5];

  const handlePress = (chapterNum: number) => {
    Haptics.selectionAsync();
    router.push({
      pathname: '/parmarthSopan/items',
      params: {
        mode: 'chapter',
        part: part,
        chapter: chapterNum,
        title: CHAPTER_TITLES[chapterNum as keyof typeof CHAPTER_TITLES]
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header with Dynamic Padding */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} hitSlop={20}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{pageTitle}</Text>
        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={chapters}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item: chapterNum }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(chapterNum)}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>{chapterNum}</Text>
            </View>
            <View style={styles.textContainer}>
               <Text style={styles.cardTitle}>
                  {CHAPTER_TITLES[chapterNum as keyof typeof CHAPTER_TITLES].split('. ')[1]}
               </Text>
               <Text style={styles.cardSubtitle}>Chapter {chapterNum}</Text>
            </View>
            <ChevronRight size={20} color="#D7CCC8" />
          </TouchableOpacity>
        )}
      />
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  listContent: { padding: 20 },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    padding: 20, borderRadius: 16, marginBottom: 15,
    elevation: 2, shadowColor: '#5D4037', shadowOpacity: 0.05, shadowRadius: 5,
    borderWidth: 1, borderColor: THEME.cardBorder,
  },
  circle: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: THEME.circleBg,
    alignItems: 'center', justifyContent: 'center', marginRight: 16
  },
  circleText: { fontSize: 20, fontWeight: 'bold', color: THEME.accent },
  textContainer: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: THEME.text, marginBottom: 2 },
  cardSubtitle: { fontSize: 12, color: THEME.subText, textTransform: 'uppercase', letterSpacing: 0.5 },
  cardText: { flex: 1, fontSize: 16, fontWeight: '600', color: THEME.text }, // Fallback style
});