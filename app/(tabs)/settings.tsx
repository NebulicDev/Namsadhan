import { signOut } from 'firebase/auth';
import { ChevronRight, LogOut, Moon, Palette, Shield } from 'lucide-react-native';
import React from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

const SettingsItem = ({ icon, text, onPress, isDestructive = false }: { icon: React.ReactNode, text: string, onPress?: () => void, isDestructive?: boolean }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={[styles.itemText, isDestructive && { color: '#FF3B30' }]}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function SettingsScreen() {

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The redirect will be handled automatically by the RootLayout.
    } catch (error) {
      console.error("Error signing out: ", error);
      Alert.alert("Error", "Could not sign out. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.card}>
          <SettingsItem icon={<Palette size={24} color={THEME.text} />} text="Appearance" />
          <View style={styles.separator} />
          <SettingsItem icon={<Moon size={24} color={THEME.text} />} text="Theme" />
        </View>

        <View style={styles.card}>
          <SettingsItem icon={<Shield size={24} color={THEME.text} />} text="Privacy Policy" />
        </View>

        <View style={styles.card}>
          <SettingsItem
            icon={<LogOut size={24} color={'#FF3B30'} />}
            text="Sign Out"
            onPress={handleSignOut}
            isDestructive
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  content: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 40 },
  header: { marginBottom: 30 },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text },
  card: { backgroundColor: THEME.card, borderRadius: 15, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 },
  iconContainer: { width: 40, alignItems: 'center' },
  itemText: { fontSize: 17, color: THEME.text, flex: 1, marginLeft: 10 },
  separator: { height: 1, backgroundColor: THEME.background, marginHorizontal: 20, marginLeft: 70 },
});