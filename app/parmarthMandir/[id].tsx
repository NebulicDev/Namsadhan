// app/parmarthMandir/[id].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
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
// UPDATED IMPORT: We remove the curly braces {}
import parmarthMandirContent from '../../assets/text/parmarthMandirContent';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
};

export default function ParmarthMandirDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id: sectionId, sectionTitle } = params;
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (sectionId && typeof sectionId === 'string') {
      // UPDATED CHECK: This is a safer way to check if the key exists in the object.
      if (sectionId in parmarthMandirContent) {
        setContent(parmarthMandirContent[sectionId]);
      } else {
        Alert.alert('Error', 'Content for this section was not found.');
        setContent(''); // Ensure content is not undefined
      }
    } else {
      Alert.alert('Error', 'Invalid section ID.');
      setContent(''); // Ensure content is not undefined
    }
    setIsLoading(false);
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
  headerTitle: { flex: 1, fontSize: 24, fontWeight: 'bold', color: THEME.text},
  contentContainer: { padding: 20, },
  content: { fontSize: 20, lineHeight: 30, color: THEME.text, textAlign: 'center' },
});