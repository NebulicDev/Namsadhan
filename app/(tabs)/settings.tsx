// app/(tabs)/settings.tsx
import { useRouter } from 'expo-router';
import {
  Bell,
  ChevronRight,
  HandHeart,
  Info,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Shield,
  User
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

export default function ProfileScreen() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const user = authInstance.currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await authInstance.signOut();
    } catch (error) {
      console.error('Error signing out: ', error);
      Alert.alert('Failed to sign out.');
    }
  };

  const handleAbout = () => {
    Alert.alert(
      'About Namsadhan',
      'This app is dedicated to the teachings and lineage of the Nimbargi Sampradaya, with special reverence for Shri Gurudev Ranade. Our mission is to provide a digital platform for devotees to access spiritual resources and connect with the teachings.',
      [{ text: 'OK' }]
    );
  };

  const handleContact = () => setContactModalVisible(true);
  const handleDonation = () => setDonationModalVisible(true);
  const handleEmail = () => Linking.openURL('mailto:info@nimbargisampradaya.org');
  const handlePhone = () => Linking.openURL('tel:+919422032595');

  const handleMap = () => {
    const address = 'Shree Gurudev Ranade Samadhi Ashram Nimbal (rs)';
    const url = Platform.select({
      ios: `maps:?q=${address}`,
      android: `geo:0,0?q=${address}`,
    });

    if (url) {
      Linking.openURL(url).catch(err =>
        Alert.alert("Couldn't open maps", 'Please install a maps application.')
      );
    }
  };

  const handleNotifications = () => {
    Alert.alert('Notifications', 'Functionality to be implemented.');
  };
  const handlePrivacyPolicy = () => {
    Alert.alert('Privacy Policy', 'Functionality to be implemented.');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        {/* Profile Header with Safe Insets */}
        <View style={[styles.profileHeader, { paddingTop: insets.top + 24 }]}>
          <View style={styles.avatar}>
            <User size={40} color={THEME.primary} />
          </View>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        <View style={styles.card}>
          <SettingsItem
            icon={<Mail size={24} color={THEME.text} />}
            text="Contact Us"
            onPress={handleContact}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<HandHeart size={24} color={THEME.text} />}
            text="Donate"
            onPress={handleDonation}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<MapPin size={24} color={THEME.text} />}
            text="Map / Address"
            onPress={handleMap}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<Bell size={24} color={THEME.text} />}
            text="Notifications"
            onPress={handleNotifications}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<Shield size={24} color={THEME.text} />}
            text="Privacy Policy"
            onPress={handlePrivacyPolicy}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<Info size={24} color={THEME.text} />}
            text="About Namsadhan"
            onPress={handleAbout}
          />
        </View>

        <View style={[styles.card, { marginTop: 20 }]}>
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
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setContactModalVisible(false)}
              >
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    // paddingTop is added dynamically via inline style
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: THEME.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: THEME.text,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemText: { flex: 1, fontSize: 18, marginLeft: 20, color: THEME.text },
  separator: { height: 1, backgroundColor: THEME.background, marginHorizontal: 20 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: THEME.white,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 20 },
  contactButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  contactText: { fontSize: 16, color: THEME.text, marginLeft: 15 },
  closeButton: {
    marginTop: 20,
    backgroundColor: THEME.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  closeButtonText: { color: THEME.white, fontSize: 16, fontWeight: '600' },
  modalCloseButton: { padding: 15, alignItems: 'flex-end' },
});
