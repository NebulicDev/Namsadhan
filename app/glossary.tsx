// app/glossary.tsx
import { glossaryData, GlossaryEntry } from '@/assets/text/glossary';
import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native'; // Use ChevronLeft
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Use the THEME from manacheShlok.tsx, as it includes 'THEME.card'
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  accent: '#FFB88D',
  card: '#FFFFFF',
};

export default function GlossaryScreen() {
  const renderItem = ({ item }: { item: GlossaryEntry }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.term}>{item.term}</Text>
      <Text style={styles.definition}>{item.definition}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* 1. This header layout is now identical to liveDarshan.tsx */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          {/* 2. Icon size changed to 24 to match liveDarshan.tsx */}
          <ChevronLeft size={24} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Glossary</Text>
      </View>

      <FlatList
        data={glossaryData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.term}-${index}`}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

// 3. Styles updated to match liveDarshan.tsx
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 10, // Changed from marginBottom
    flexDirection: 'row',
    alignItems: 'center',
    // Removed 'justifyContent: center'
  },
  backButton: {
    marginRight: 15, // Changed from absolute position
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  itemContainer: {
    marginVertical: 8,
    backgroundColor: THEME.card,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  term: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: THEME.text,
  },
  definition: {
    fontSize: 18,
    lineHeight: 26,
    color: THEME.text,
  },
});