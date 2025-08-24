import { Bell, ChevronRight, Info, Palette } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

// --- Settings Item Component ---
const SettingsItem = ({ icon, text, onPress }: { icon: React.ReactNode, text: string, onPress?: () => void }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.itemText}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function SettingsScreen() {
  // --- Placeholder Functions ---
  const handleNotifications = () => {
    // Later, this will navigate to a dedicated notification settings screen
    alert('Notification settings will be here.');
  };

  const handleAppearance = () => {
    // Later, this will allow theme changes (e.g., dark mode)
    alert('Appearance settings will be here.');
  };

  const handleAbout = () => {
    // This could open a modal or navigate to an "About Us" screen
    alert('Information about the Namsadhan app.');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your app experience</Text>
      </View>

      <View style={styles.card}>
        <SettingsItem
          icon={<Bell size={24} color={THEME.text} />}
          text="Notifications"
          onPress={handleNotifications}
        />
        <View style={styles.separator} />
        <SettingsItem
          icon={<Palette size={24} color={THEME.text} />}
          text="Appearance"
          onPress={handleAppearance}
        />
        <View style={styles.separator} />
        <SettingsItem
          icon={<Info size={24} color={THEME.text} />}
          text="About Namsadhan"
          onPress={handleAbout}
        />
      </View>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
  },
  subtitle: {
    fontSize: 18,
    color: THEME.lightText,
    marginTop: 4,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: THEME.text,
  },
  separator: {
    height: 1,
    backgroundColor: THEME.background,
    marginLeft: 55, // Align with the text
  },
});
