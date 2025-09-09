// app/parmarthMandir/section8.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { parmarthMandirIndex } from '../../constants/parmarthMandirIndex';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

export default function Section8GridScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { sectionTitle } = params;

  const section8 = parmarthMandirIndex.find(item => item.id === 'section_8');
  const subsections = section8?.subsections || [];

  const handlePressItem = (item) => {
    // **UPDATED LOGIC**: Always navigate to the subsection list for the character tapped
    router.push({ 
        pathname: `/parmarthMandir/subsections/${item.id}`, 
        params: { parentTitle: item.title } 
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePressItem(item)}
      style={styles.gridItem}
      activeOpacity={0.7}
    >
      <Text style={styles.gridText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{sectionTitle}</Text>
      </View>
      <FlatList
        data={subsections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={4}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: THEME.background },
    header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center' },
    backButton: { marginRight: 15 },
    headerTitle: { fontSize: 28, fontWeight: 'bold', color: THEME.text },
    gridContainer: {
        paddingHorizontal: 15,
    },
    gridItem: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.card,
        borderRadius: 15,
        elevation: 3,
        shadowColor: 'rgba(93, 64, 55, 0.4)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    gridText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: THEME.text,
    },
});