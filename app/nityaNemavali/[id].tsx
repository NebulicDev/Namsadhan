import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { ChevronLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { db } from '../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  lightText: '#A1887F',
};

export default function NityanemavaliDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id: sectionId, sectionTitle } = params;
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        // Step 1: Check local cache first
        const cachedContent = await AsyncStorage.getItem(sectionId);
        if (cachedContent) {
          setContent(cachedContent);
          setIsLoading(false);
        }

        // Step 2: Fetch the latest content from Firestore
        const docRef = doc(db, 'nityanemavali_sections', sectionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedContent = data.content;

          // Step 3: Update local cache with fetched content
          if (fetchedContent !== cachedContent) {
            await AsyncStorage.setItem(sectionId, fetchedContent);
            setContent(fetchedContent);
          }
        } else {
          Alert.alert('Error', 'Content not found.');
        }
      } catch (error) {
        console.error('Error loading content:', error);
        Alert.alert(
          'Error',
          'Could not load content. Please check your internet connection.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (sectionId) {
      loadContent();
    }
  }, [sectionId]);

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.screenContainer, styles.centered]}>
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{ color: THEME.text, marginTop: 10 }}>Loading {sectionTitle}...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{sectionTitle}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  centered: { justifyContent: 'center', alignItems: 'center' },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  headerTitle: { flex: 1, fontSize: 24, fontWeight: 'bold', color: THEME.text },
  contentContainer: { padding: 20, },
  content: { fontSize: 20, lineHeight: 30, color: THEME.text },
});