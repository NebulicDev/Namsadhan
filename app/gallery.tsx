import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

// --- Dummy Data for Albums ---
const ALBUMS_DATA = [
  { id: '1', title: 'Shri Gurudev', images: [require('@/assets/images/gurudeo-ranade.png'), require('@/assets/images/nimbargi-maharaj.png')] },
  { id: '2', title: 'Nimbal Ashram', images: [require('@/assets/images/bhausaheb-maharaj.png')] },
  { id: '3', title: 'Gurudev\'s Nivas', images: [require('@/assets/images/amburao-maharaj.png')] },
  { id: '4', title: 'Events', images: [require('@/assets/images/nimbargi-maharaj.png')] },
];

// --- Component for a single album list item ---
const AlbumCard = ({ item, onPress }: { item: any, onPress: (item: any) => void }) => (
  <TouchableOpacity style={styles.albumButton} onPress={() => onPress(item)}>
    <Text style={styles.albumButtonText}>{item.title}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function GalleryScreen() {
  const router = useRouter();
  const [selectedAlbum, setSelectedAlbum] = React.useState<any>(null);

  // --- View for displaying photos within an album ---
  if (selectedAlbum) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedAlbum(null)} style={styles.backButton}>
            <ChevronLeft size={28} color={THEME.text} />
          </TouchableOpacity>
          <Text style={styles.title}>{selectedAlbum.title}</Text>
        </View>
        <FlatList
          key="photo-grid" // Added key to force re-render
          data={selectedAlbum.images}
          renderItem={({ item }) => <Image source={item} style={styles.photo} />}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.photoGrid}
        />
      </SafeAreaView>
    );
  }

  // --- Main view for displaying the list of albums ---
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Gallery</Text>
      </View>
      <FlatList
        key="album-list" // Added key to force re-render
        data={ALBUMS_DATA}
        renderItem={({ item }) => <AlbumCard item={item} onPress={setSelectedAlbum} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: THEME.text },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  albumButton: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  albumButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.text,
  },
  photoGrid: {
    paddingHorizontal: 10,
  },
  photo: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 10,
    margin: '1%',
  },
});
