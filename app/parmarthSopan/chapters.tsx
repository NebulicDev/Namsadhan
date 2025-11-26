// app/parmarthSopan/chapters.tsx
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CHAPTER_TITLES } from '../../assets/text/parmarthSopanData';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  iconBg: '#F5E6D3',
};

export default function ChaptersScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{pageTitle}</Text>
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
            <Text style={styles.cardText}>
              {CHAPTER_TITLES[chapterNum as keyof typeof CHAPTER_TITLES]}
            </Text>
            <ChevronRight size={20} color="#A1887F" />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50, paddingBottom: 10 },
  backBtn: { marginRight: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  listContent: { padding: 20 },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.card,
    padding: 20, borderRadius: 16, marginBottom: 15,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5
  },
  circle: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: THEME.iconBg,
    alignItems: 'center', justifyContent: 'center', marginRight: 15
  },
  circleText: { fontSize: 18, fontWeight: 'bold', color: THEME.text },
  cardText: { flex: 1, fontSize: 16, fontWeight: '600', color: THEME.text },
});