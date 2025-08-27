import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import manacheShlokText from '../assets/text/manache_shlok_content';


const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
};

export default function ManacheShlokScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Manache Shlok</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.shlokText}>{manacheShlokText}</Text>
        </View>
      </ScrollView>
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
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  shlokText: {
    fontSize: 24,
    lineHeight: 28,
    color: THEME.text,
    textAlign: 'center',
  },
});
