// app/(tabs)/settings.tsx
import { useRouter } from 'expo-router';
import { ChevronRight, HandHeart, Info, LogOut, Mail, Phone } from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Linking,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { authInstance } from '../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
  error: '#D32F2F',
};

const SettingsItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    {icon}
    <Text style={styles.itemText}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authInstance.signOut();
      // The useProtectedRoute hook in AuthContext will automatically handle the redirect.
    } catch (error) {
      console.error('Error signing out: ', error);
      Alert.alert('Failed to sign out.');
    }
  };

  const handleAbout = () => {
    Alert.alert(
      "About Namsadhan",
      "This app is dedicated to the teachings and lineage of the Nimbargi Sampradaya, with special reverence for Shri Gurudev Ranade. Our mission is to provide a digital platform for devotees to access spiritual resources and connect with the teachings.",
      [{ text: "OK" }]
    );
  };
  
  const handleContact = () => setContactModalVisible(true);
  const handleDonation = () => setDonationModalVisible(true);
  const handleEmail = () => Linking.openURL('mailto:info@nimbargisampradaya.org');
  const handlePhone = () => Linking.openURL('tel:+919422032595');


  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.card}>
          <SettingsItem
            icon={<HandHeart size={24} color={THEME.text} />}
            text="Donate"
            onPress={handleDonation}
          />
          <View style={styles.separator} />
           <SettingsItem
            icon={<Mail size={24} color={THEME.text} />}
            text="Contact Us"
            onPress={handleContact}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<Info size={24} color={THEME.text} />}
            text="About Namsadhan"
            onPress={handleAbout}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<LogOut size={24} color={THEME.error} />}
            text="Sign Out"
            onPress={handleSignOut}
          />
        </View>

        {/* Contact Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={contactModalVisible}
          onRequestClose={() => setContactModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Contact Us</Text>
              <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
                <Mail size={24} color={THEME.primary} />
                <Text style={styles.contactText}>info@nimbargisampradaya.org</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton} onPress={handlePhone}>
                <Phone size={24} color={THEME.primary} />
                <Text style={styles.contactText}>+91 94220 32595</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => setContactModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Donation Modal */}
        <Modal
            animationType="slide"
            visible={donationModalVisible}
            onRequestClose={() => setDonationModalVisible(false)}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
                <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setDonationModalVisible(false)}
                >
                    <Text style={{ fontSize: 18, color: THEME.text }}>Done</Text>
                </TouchableOpacity>
                <WebView source={{ uri: 'https://www.nimbargisampradaya.org/donation' }} />
            </SafeAreaView>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: { paddingTop: 60, paddingHorizontal: 20, marginBottom: 20 },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text },
  card: { backgroundColor: THEME.card, borderRadius: 15, marginHorizontal: 20, paddingVertical: 10, elevation: 3, shadowColor: 'rgba(93, 64, 55, 0.4)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  settingsItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 },
  itemText: { flex: 1, fontSize: 18, marginLeft: 20, color: THEME.text },
  separator: { height: 1, backgroundColor: THEME.background, marginHorizontal: 20 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '85%', backgroundColor: THEME.white, borderRadius: 20, padding: 25, alignItems: 'center' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 20 },
  contactButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  contactText: { fontSize: 16, color: THEME.text, marginLeft: 15 },
  closeButton: { marginTop: 20, backgroundColor: THEME.primary, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 40 },
  closeButtonText: { color: THEME.white, fontSize: 16, fontWeight: '600' },
  modalCloseButton: { padding: 15, alignItems: 'flex-end' },
});