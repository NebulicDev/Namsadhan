import {
  Bell,
  ChevronRight,
  HandHeart,
  Info,
  Mail,
  MapPin,
  Phone,
  Shield,
  X,
} from 'lucide-react-native';
import { useState } from 'react';
import {
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
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.itemText}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

export default function SettingsPage() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  const handleContact = () => setContactModalVisible(true);
  const handleDonation = () => setDonationModalVisible(true);
  const handleAbout = () => setAboutModalVisible(true);
  const handlePrivacyPolicy = () => setPrivacyModalVisible(true);

  const handleEmail = (email) => Linking.openURL(`mailto:${email}`);
  const handlePhone = (number) => Linking.openURL(`tel:${number}`);

  const handleMap = () => {
    const address =
      'Shri Gurudev Ranade Samadhi Trust, Nimbal (R.S.), Tal. Indi, Dist. Biajapur, State. Karnatak, India. 586211';
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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <SettingsItem icon={<Mail size={24} color={THEME.text} />} text="Contact Us" onPress={handleContact} />
          <View style={styles.separator} />
          <SettingsItem icon={<HandHeart size={24} color={THEME.text} />} text="Donate" onPress={handleDonation} />
          <View style={styles.separator} />
          <SettingsItem icon={<MapPin size={24} color={THEME.text} />} text="Address" onPress={handleMap} />
        </View>

        <View style={styles.card}>
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
      </ScrollView>

      {/* Contact Modal */}
      <Modal animationType="slide" visible={contactModalVisible} onRequestClose={() => setContactModalVisible(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Contact Us</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setContactModalVisible(false)}>
              <X size={28} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.infoCard}>
              <Text style={styles.sectionTitle}>Our Address</Text>
              <Text style={styles.addressText}>
                Shri Gurudev Ranade Samadhi Trust, Nimbal (R.S.){'\n'}
                Tal. Indi, Dist. Biajapur,{'\n'}
                State. Karnatak, India. 586211
              </Text>
              <TouchableOpacity style={styles.actionButton} onPress={handleMap}>
                <MapPin size={24} color={THEME.primary} />
                <Text style={styles.actionText}>View on Map</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.sectionTitle}>Get in Touch</Text>
              <TouchableOpacity style={styles.actionButton} onPress={() => handleEmail('info@nimbargisampradaya.org')}>
                <Mail size={24} color={THEME.primary} />
                <Text style={styles.actionText}>info@nimbargisampradaya.org</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => handlePhone('+919482206716')}>
                <Phone size={24} color={THEME.primary} />
                <Text style={styles.actionText}>+91-94822 06716 (BSNL)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => handlePhone('+916363383415')}>
                <Phone size={24} color={THEME.primary} />
                <Text style={styles.actionText}>+91-63633 83415 (JIO)</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Donation Modal */}
      <Modal animationType="slide" visible={donationModalVisible} onRequestClose={() => setDonationModalVisible(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Donate</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setDonationModalVisible(false)}>
              <X size={28} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.infoCard}>
              <Text style={styles.sectionTitle}>Online Bank Transfer</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Name:</Text> Shri Gurudev Ranade Samadhi Trust</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Bank:</Text> IDBI</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Branch:</Text> Vijayapur, Pin - 586103</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Account No.:</Text> 0744104000210218</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>I.F.S.C.:</Text> IBKL0000744</Text>
              <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Address:</Text> 41E, Plot No 9 So, Near BLDE Main Entrance, Karnataka 586103</Text>
              <TouchableOpacity style={styles.actionButton} onPress={() => handleEmail('gurudevranadenimbal@gmail.com')}>
                <Mail size={24} color={THEME.primary} />
                <Text style={styles.actionText}>gurudevranadenimbal@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => handlePhone('+919482206716')}>
                <Phone size={24} color={THEME.primary} />
                <Text style={styles.actionText}>+91-94822 06716 (BSNL)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => handlePhone('+916363383415')}>
                <Phone size={24} color={THEME.primary} />
                <Text style={styles.actionText}>+91-63633 83415 (JIO)</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.sectionTitle}>Cheque Information</Text>
              <Text style={styles.infoText}>
                Cheques should be made payable to:{'\n'}
                <Text style={{ fontWeight: 'bold' }}>Shri Gurudev Ranade Samadhi Trust</Text>
              </Text>
            </View>
            {/* <View style={[styles.infoCard, { height: 400 }]}>
              <Text style={styles.sectionTitle}>Donate via Website</Text>
              <WebView source={{ uri: 'https://www.nimbargisampradaya.org/donation' }} />
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* About Modal */}
      <Modal animationType="slide" visible={aboutModalVisible} onRequestClose={() => setAboutModalVisible(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>About Namsadhan</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setAboutModalVisible(false)}>
              <X size={28} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.infoCard}>
              <Text style={styles.paragraph}>
                This application is a humble offering dedicated to the teachings and lineage of the Nimbargi Sampradaya, with special reverence for the revered saint, Shri Gurudev Ranade.
              </Text>
              <Text style={styles.paragraph}>
                Our mission is to provide a comprehensive digital platform for all the devotees and sadhaks to access spiritual resources, engage with the timeless wisdom of the Sampradaya, and foster a deeper connection with the path layed down by our revered Gurus.
              </Text>
              <Text style={styles.paragraph}>
                Through this app, users can access daily inspirations, listen to devotional bhajans, read sacred texts, and engage in the meditation on the Divine Name. We aim to support the spiritual journey of all sadhaks, making the profound teachings of our Sampradaya accessible in this digital age.
              </Text>
              <Text style={styles.paragraph}>
                We are continuously working to improve and expand the app's features and content. Your support and feedback are invaluable to us on this journey.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal animationType="slide" visible={privacyModalVisible} onRequestClose={() => setPrivacyModalVisible(false)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Privacy Policy</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setPrivacyModalVisible(false)}>
              <X size={28} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.infoCard}>
              <Text style={styles.lastUpdated}>Last updated: September 15, 2025</Text>
              <Text style={styles.paragraph}>
                Namsadhan ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by our application.
              </Text>
              <Text style={styles.sectionTitle}>Information We Collect</Text>
              <Text style={styles.paragraph}>
                We may collect information you provide directly to us, such as when you create an account, as well as information that is automatically collected, such as your usage data for features like the Namasmaran timer.
              </Text>
              <Text style={styles.sectionTitle}>How We Use Your Information</Text>
              <Text style={styles.paragraph}>
                We use the information we collect to operate, maintain, and provide you with the features and functionality of the app, to personalize your experience, and to analyze usage to improve our services.
              </Text>
              <Text style={styles.sectionTitle}>Data Security</Text>
              <Text style={styles.paragraph}>
                We use industry-standard security measures to protect the information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </Text>
              <Text style={styles.sectionTitle}>Third-Party Services</Text>
              <Text style={styles.paragraph}>
                Our app does not share personal information with third-party services for marketing purposes.
              </Text>
              <Text style={styles.sectionTitle}>Changes to This Policy</Text>
              <Text style={styles.paragraph}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </Text>
              <Text style={styles.disclaimer}>
                Disclaimer: This is a temporary placeholder text. Please consult with a legal professional to create a comprehensive privacy policy tailored to your specific data practices.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: THEME.card,
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    fontSize: 17,
    marginLeft: 20,
    color: THEME.text,
  },
  separator: {
    height: 1,
    backgroundColor: '#F0EAE4',
    marginHorizontal: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EAE4',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
  },
  modalCloseButton: {
    padding: 5,
  },
  pageContainer: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
  },
  addressText: {
    fontSize: 16,
    color: THEME.text,
    lineHeight: 24,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: THEME.text,
    lineHeight: 24,
    marginBottom: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionText: {
    fontSize: 16,
    color: THEME.text,
    marginLeft: 15,
  },
  paragraph: {
    fontSize: 16,
    color: THEME.text,
    lineHeight: 24,
    marginBottom: 15,
  },
  lastUpdated: {
    fontSize: 12,
    color: '#A1887F',
    textAlign: 'center',
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#A1887F',
    marginTop: 20,
    textAlign: 'center',
  },
});