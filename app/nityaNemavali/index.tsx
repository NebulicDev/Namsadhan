import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { nityaNemavaliIndex } from '../../constants/nityaNemavaliIndex';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
};

export default function NityanemavaliIndexScreen() {
  const router = useRouter();

  // Flatten data with indentation for subsections
  const flattenedIndex = [];
  nityaNemavaliIndex.forEach(item => {
    flattenedIndex.push({ ...item, isSubsection: false, indent: 0 });
    if (item.subsections) {
      item.subsections.forEach(subItem =>
        flattenedIndex.push({ ...subItem, isSubsection: true, indent: 20 })
      );
    }
  });

  const handlePressItem = (item) => {
    router.push({ pathname: `/nityaNemavali/${item.id}`, params: { sectionTitle: item.title } });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePressItem(item)}
      style={[styles.card, item.isSubsection && { paddingLeft: item.indent + 15 }]}
      activeOpacity={0.7}
    >
      <Text style={styles.itemText}>{item.title}</Text>
      <ChevronRight size={20} color={THEME.lightText} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nitya Nemavali</Text>
      </View>
      <FlatList
        data={flattenedIndex}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: THEME.text },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.card,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    justifyContent: 'space-between',
  },
  itemText: { flex: 1, fontSize: 18, fontWeight: '600', color: THEME.text },
});
