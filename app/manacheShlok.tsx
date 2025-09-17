// app/manacheShlok.tsx
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import {
  BackHandler, // Import BackHandler
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { manacheShlok } from '../assets/text/manache_shlok_content';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  accent: '#FFB88D',
  card: '#FFFFFF',
};

export default function ManacheShlokScreen() {
  const router = useRouter();
  const [selectedRange, setSelectedRange] = React.useState(null);

  // --- START: Back Button Handling Logic ---
  React.useEffect(() => {
    const backAction = () => {
      // If we are on the detail view (a range is selected)
      if (selectedRange) {
        // Go back to the grid view
        setSelectedRange(null);
        // Return true to prevent the default back action (exiting the screen)
        return true;
      }
      // If we are on the grid view, allow the default back action
      return false;
    };

    // Add the event listener when the component mounts
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Remove the event listener when the component unmounts
    return () => backHandler.remove();
  }, [selectedRange]); // Rerun the effect if selectedRange changes
  // --- END: Back Button Handling Logic ---

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem} onPress={() => setSelectedRange(item)}>
      <Text style={styles.gridItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  // This is the detail screen for reading a selected shlok range
  if (selectedRange) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedRange(null)} style={styles.backButton}>
            <ChevronLeft size={28} color={THEME.text} />
          </TouchableOpacity>
          <Text style={styles.title}>{selectedRange.title}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.shlokText}>{selectedRange.shloks}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // This is the main index screen with the grid
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Manache Shlok</Text>
      </View>

      {/* Page Header Text */}
      <View style={styles.indexHeader}>
        <Text style={styles.subTitle}>श्रीसमर्थ रामदासकृत मनाचे श्लोक</Text>
      </View>

      <FlatList
        data={manacheShlok}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        style={{ flex: 1 }} // Ensure FlatList takes available space
      />

      {/* Page Footer Text */}
      <Text style={[styles.jaiJai, styles.footerText]}>॥ जय जय रघुवीर समर्थ ॥</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 58,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  indexHeader: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  gridContainer: {
    paddingHorizontal: 10,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    backgroundColor: THEME.card,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  gridItemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.text,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  jaiJai: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    marginVertical: 10,
  },
  shlokText: {
    fontSize: 22,
    lineHeight: 36,
    color: THEME.text,
    textAlign: 'center',
  },
  footerText: {
    paddingBottom: 20,
  },
});