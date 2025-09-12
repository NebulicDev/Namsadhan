import {
    Bell,
    ChevronRight,
    HandHeart,
    Info,
    Mail,
    MapPin,
    Phone,
    Shield,
} from 'lucide-react-native';
import { useState } from 'react';
import {
    Alert,
    Linking,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
};

const SettingsItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    {icon}
    <Text style={styles.itemText}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function SettingsPage() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);

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
      Linking.openURL(url).catch(() =>
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
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
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

import { Modal } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: THEME.card,
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
