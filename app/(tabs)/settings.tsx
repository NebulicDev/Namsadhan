// app/(tabs)/settings.tsx

// 1. Update imports
import { useRouter } from 'expo-router';
import { Info, LogOut } from 'lucide-react-native'; // Add LogOut
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { authInstance } from '../../firebaseConfig';

// ... (Keep the THEME constant and SettingsItem component as they are)

export default function SettingsScreen() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);
  const router = useRouter(); // 2. Add router hook

  // ... (Keep other handle functions as they are)

  // 3. Add the handleSignOut function
  const handleSignOut = async () => {
    try {
      await authInstance.signOut();
      // The useProtectedRoute hook will automatically navigate to the login screen
    } catch (error) {
      console.error('Error signing out: ', error);
      alert('Failed to sign out.');
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        {/* ... (Keep the header and other settings items) */}
        
        {/* Inside the first <View style={styles.card}> */}
        <View style={styles.card}>
          {/* ... (Other SettingsItems) */}
          <View style={styles.separator} />
          <SettingsItem
            icon={<Info size={24} color={THEME.text} />}
            text="About Namsadhan"
            onPress={handleAbout}
          />
          {/* 4. Add the Sign Out button */}
          <View style={styles.separator} />
          <SettingsItem
            icon={<LogOut size={24} color={THEME.error || '#D32F2F'} />} // Use an error color for sign out
            text="Sign Out"
            onPress={handleSignOut}
          />
        </View>
        
        {/* ... (Rest of the screen content) */}
      </ScrollView>

      {/* ... (Modals) */}
    </SafeAreaView>
  );
}

// ... (Keep the styles as they are, but you can add a color for error if you like)
const THEME = {
  // ...
  error: '#D32F2F',
};