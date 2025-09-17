// app/parmarthMandir/subsections/[parentId].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { parmarthMandirIndex } from '../../../constants/parmarthMandirIndex';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
};

// A recursive function to find an item by its ID in the nested structure
const findItemById = (items, id) => {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.subsections) {
      const found = findItemById(item.subsections, id);
      if (found) return found;
    }
  }
  return null;
};

export default function SubsectionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { parentId, parentTitle } = params;

  const parentItem = findItemById(parmarthMandirIndex, parentId);
  const subsections = parentItem?.subsections || [];

  const handlePressItem = (item) => {
    // If the item itself has subsections, navigate to this same screen again
    if (item.subsections) {
      router.push({ 
        pathname: `/parmarthMandir/subsections/${item.id}`, 
        params: { parentTitle: item.title } 
      });
    } else {
      // Otherwise, navigate to the final content screen
      router.push({ 
        pathname: `/parmarthMandir/${item.id}`, 
        params: { sectionTitle: item.title } 
      });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePressItem(item)}
      style={styles.card}
      activeOpacity={0.7}
    >
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.author && <Text style={styles.itemAuthor}>{item.author}</Text>}
      </View>
      <ChevronRight size={20} color={THEME.lightText} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{parentTitle}</Text>
      </View>
      <FlatList
        data={subsections}
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
      shadowColor: 'rgba(93, 64, 55, 0.4)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 5,
      justifyContent: 'space-between',
    },
    itemTextContainer: {
      flex: 1,
    },
    itemTitle: { 
      fontSize: 18, 
      fontWeight: '600', 
      color: THEME.text 
    },
    itemAuthor: {
      fontSize: 14,
      color: THEME.lightText,
      marginTop: 2,
    },
  });