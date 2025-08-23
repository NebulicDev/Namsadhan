import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
};

export default function PlaceholderScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        {/* --- CHANGE THESE TWO LINES FOR EACH SCREEN --- */}
        <Text style={styles.title}>Namasmaran</Text>
        <Text style={styles.subtitle}>The timer and calendar will be implemented here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.background,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.lightText,
    textAlign: 'center',
  },
});
