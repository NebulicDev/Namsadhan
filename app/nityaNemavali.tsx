import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { ChevronLeft } from 'lucide-react-native'; // For back button icon
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { db } from '../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  lightText: '#A1887F',
  white: '#FFFFFF',
};

export default function NityanemavaliScreen() {
  const router = useRouter();
  const [pages, setPages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList<string>>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [pageInput, setPageInput] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const cachedContent = await AsyncStorage.getItem('nityanemavali');
        if (cachedContent) {
          setPages(JSON.parse(cachedContent));
        }

        const docRef = doc(db, 'texts', 'Nitya Nemavali');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.pages && Array.isArray(data.pages)) {
            setPages(data.pages);
            await AsyncStorage.setItem('nityanemavali', JSON.stringify(data.pages));
          }
        } else {
          console.log("No such document in Firestore!");
        }
      } catch (error) {
        console.error("Error loading Nitya Nemavali:", error);
        Alert.alert("Error", "Could not load content. Please check your internet connection and try again.");
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  const handleJumpToPage = () => {
    const pageNum = parseInt(pageInput, 10) - 1;
    if (!isNaN(pageNum) && pageNum >= 0 && pageNum < pages.length) {
      setCurrentPage(pageNum);
      flatListRef.current?.scrollToIndex({ index: pageNum });
      setModalVisible(false);
      setPageInput('');
    } else {
      Alert.alert('Invalid page number');
    }
  };

  const renderPage = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.pageContainer}>
      <Text style={styles.pageNumber}>Page {index + 1} / {pages.length}</Text>
      <Text style={styles.pageText}>{item}</Text>
    </View>
  );

  if (isLoading && pages.length === 0) {
    return (
      <SafeAreaView style={[styles.screenContainer, styles.centered]}>
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{ color: THEME.text, marginTop: 10 }}>Loading Nitya Nemavali...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nitya Nemavali</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={pages}
        keyExtractor={(_, idx) => `page-${idx}`}
        renderItem={renderPage}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        getItemLayout={(_, idx) => ({
          length: 340,
          offset: 340 * idx,
          index: idx,
        })}
        onScrollToIndexFailed={(info) => {
          flatListRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: true });
        }}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems && viewableItems.length > 0) {
            setCurrentPage(viewableItems[0].index ?? 0);
          }
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
      />

      <TouchableOpacity style={styles.jumpButton} onPress={() => setModalVisible(true)}>
        <Text style={{ color: THEME.white }}>Jump to Page</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter page number"
              keyboardType="numeric"
              value={pageInput}
              onChangeText={setPageInput}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleJumpToPage}>
              <Text style={{ color: THEME.white }}>Go</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: THEME.lightText }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: THEME.white }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  pageContainer: {
    backgroundColor: THEME.white,
    marginVertical: 14,
    borderRadius: 14,
    padding: 26,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2, // reduced for subtle Android shadow
    minHeight: 280, // "page" feel
    justifyContent: 'center',
  },
  pageNumber: {
    color: THEME.lightText,
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'right',
  },
  pageText: {
    color: THEME.text,
    fontSize: 18,
    lineHeight: 28,
  },
  jumpButton: {
    backgroundColor: THEME.primary,
    borderRadius: 8,
    padding: 12,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    backgroundColor: THEME.white,
    marginHorizontal: 32,
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: THEME.primary,
    borderRadius: 4,
    padding: 10,
    width: 180,
    marginBottom: 16,
    fontSize: 18,
    color: THEME.text,
    backgroundColor: THEME.background,
  },
  modalButton: {
    backgroundColor: THEME.primary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    width: 110,
    alignItems: 'center',
  },
});