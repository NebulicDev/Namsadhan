import * as Haptics from 'expo-haptics';
import { Stack, useRouter } from 'expo-router';
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Info,
  Mail,
  MapPin,
  Phone,
  Shield,
  X,
} from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { registerForPushNotificationsAsync } from '../../../services/NotificationService';

// --- THEME CONFIGURATION ---
const THEME = {
  background: '#FFF8F0',
  text: '#4A3B32',
  subtext: '#8D7B68',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#E09F7D',
  border: '#F0EAE4',
  iconBg: '#FFF5E1',
};

// --- COMPONENT: SETTINGS ITEM ---
const SettingsItem = ({ icon: Icon, label, onPress }: any) => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.itemContainer} 
        onPress={() => {
          Haptics.selectionAsync();
          onPress();
        }}
        activeOpacity={0.7}
      >
        <View style={styles.itemLeft}>
          <View style={styles.iconCircle}>
            <Icon size={20} color={THEME.text} />
          </View>
          <Text style={styles.itemLabel}>{label}</Text>
        </View>
        <ChevronRight size={20} color={THEME.subtext} />
      </TouchableOpacity>

      {/* Centered Divider Line */}
      <View style={styles.divider} />
    </View>
  );
};

export default function SettingsPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  // --- HANDLERS ---
  const handleContact = () => setContactModalVisible(true);
  const handleDonation = () => setDonationModalVisible(true);
  const handleAbout = () => setAboutModalVisible(true);
  const handlePrivacyPolicy = () => setPrivacyModalVisible(true);
  
  const handleNotifications = () => {
    router.push('/settings/notifications' as any);
  };

  const handleEmail = (email: string) => Linking.openURL(`mailto:${email}`);
  const handlePhone = (number: string) => Linking.openURL(`tel:${number}`);

  const handleMap = () => {
    const address = 'Shri Gurudev Ranade Samadhi Trust, Nimbal (R.S.), Tal. Indi, Dist. Biajapur, State. Karnatak, India. 586211';
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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      
      {/* --- HEADER --- */}
      <View style={[styles.header, { marginTop: Platform.OS === 'android' ? insets.top + 10 : 0 }]}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ChevronLeft size={30} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 30 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* SECTION 1: CONNECT */}
        <Text style={styles.sectionHeader}>CONNECT</Text>
        <View style={styles.cardContainer}>
          <SettingsItem icon={Mail} label="Contact Ashram" onPress={handleContact} />
          <SettingsItem icon={HandHeart} label="Donate" onPress={handleDonation} />
          <SettingsItem icon={MapPin} label="Nimbal Ashram" onPress={handleMap} />
        </View>

        {/* SECTION 2: PREFERENCES */}
        <Text style={styles.sectionHeader}>APP PREFERENCES</Text>
        <View style={styles.cardContainer}>
          <SettingsItem icon={Bell} label="Notifications" onPress={handleNotifications} />
          <SettingsItem icon={Shield} label="Privacy Policy" onPress={handlePrivacyPolicy} />
          <SettingsItem icon={Info} label="About Namsadhan" onPress={handleAbout} />
        </View>

        <Text style={styles.versionText}>Version 1.0.2</Text>
        <View style={{ height: 40 }} />

      </ScrollView>

      {/* --- MODALS (unchanged) --- */}

      {/* CONTACT MODAL */}
      <Modal animationType="slide" visible={contactModalVisible} onRequestClose={() => setContactModalVisible(false)} presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Contact Ashram</Text>
            <TouchableOpacity onPress={() => setContactModalVisible(false)} style={styles.closeButton}>
              <X size={24} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Address</Text>
              <Text style={[styles.infoText, { textAlign: 'left' }]}>
                Shri Gurudev Ranade Samadhi Trust, Nimbal (R.S.){'\n'}
                Tal. Indi, Dist. Vijayapura,{'\n'}
                State. Karnataka, India. 586211
              </Text>
              <TouchableOpacity style={styles.actionBtn} onPress={handleMap}>
                <MapPin size={18} color={THEME.primary} />
                <Text style={styles.actionBtnText}>View on Map</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Get in Touch</Text>
              <TouchableOpacity style={styles.contactRow} onPress={() => handleEmail('info@nimbargisampradaya.org')}>
                <View style={styles.miniIcon}><Mail size={16} color={THEME.primary} /></View>
                <Text style={styles.contactText}>info@nimbargisampradaya.org</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactRow} onPress={() => handlePhone('+919482206716')}>
                <View style={styles.miniIcon}><Phone size={16} color={THEME.primary} /></View>
                <Text style={styles.contactText}>+91-94822 06716 (BSNL)</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactRow} onPress={() => handlePhone('+916363383415')}>
                <View style={styles.miniIcon}><Phone size={16} color={THEME.primary} /></View>
                <Text style={styles.contactText}>+91-63633 83415 (JIO)</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* DONATION MODAL */}
      <Modal animationType="slide" visible={donationModalVisible} onRequestClose={() => setDonationModalVisible(false)} presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Donate</Text>
            <TouchableOpacity onPress={() => setDonationModalVisible(false)} style={styles.closeButton}>
              <X size={24} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Online Bank Transfer</Text>
              <Text style={styles.infoText}></Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Cheque Information</Text>
              <Text style={styles.infoText}>
                <Text style={{ fontWeight: '700' }}></Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* ABOUT MODAL */}
      <Modal animationType="slide" visible={aboutModalVisible} onRequestClose={() => setAboutModalVisible(false)} presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>About Namsadhan</Text>
            <TouchableOpacity onPress={() => setAboutModalVisible(false)} style={styles.closeButton}>
              <X size={24} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.infoBox}>
              <Text style={styles.paragraph}>
                This application is a humble offering dedicated to the teachings and lineage of the Nimbargi Sampradaya.
              </Text>
              <Text style={styles.paragraph}>
                Our mission is to provide a comprehensive digital platform for all the devotees and sadhaks to access spiritual resources, engage with the timeless teachings of the Sampradaya, and foster a deeper connection with the path layed down by our revered Gurus.
              </Text>
              <Text style={styles.paragraph}>
                Through this app, users can access excerpts from Shri Gurudev Ranade's teachings, writings, listen to bhajans and pravachans, track Sadhana and be mindful of their daily progress.
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* PRIVACY MODAL */}
      <Modal animationType="slide" visible={privacyModalVisible} onRequestClose={() => setPrivacyModalVisible(false)} presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Privacy Policy</Text>
            <TouchableOpacity onPress={() => setPrivacyModalVisible(false)} style={styles.closeButton}>
              <X size={24} color={THEME.text} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.infoBox}>
              <Text style={styles.lastUpdated}>Last updated: November 4, 2025</Text>
              
              <Text style={styles.subHeader}>Information We Collect</Text>
              <Text style={styles.paragraph}>
                We may collect information you provide directly to us, such as when you create an account, as well as automatically collected usage data (e.g., meditation timer stats).
              </Text>
              
              <Text style={styles.subHeader}>How We Use Information</Text>
              <Text style={styles.paragraph}>
                To operate and maintain the app, personalize your experience, and analyze usage trends to improve functionality.
              </Text>
              
              <Text style={styles.subHeader}>Data Security</Text>
              <Text style={styles.paragraph}>
                We use industry-standard security measures. However, no method of electronic storage is 100% secure.
              </Text>

              <Text style={styles.subHeader}>Third-Party Services</Text>
              <Text style={styles.paragraph}>
                Our app does not share personal information with third-party services for marketing purposes.
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  
  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 15,
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: THEME.text,
    marginLeft: 8,
  },
  backButton: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },

  /* SECTIONS */
  sectionHeader: {
    fontSize: 13,
    color: THEME.subtext,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 12,
    marginLeft: 10,
    marginTop: 15,
  },
  cardContainer: {
    backgroundColor: THEME.cardBg,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03, // lower shadow
    shadowRadius: 3,
    elevation: 1, // lower elevation
    marginBottom: 10,
  },

  /* ITEM */
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: THEME.cardBg,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: THEME.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
  },

  /* CENTERED DIVIDER */
  divider: {
    height: 1,
    backgroundColor: THEME.border,
    width: '100%',
  },

  versionText: {
    textAlign: 'center',
    color: THEME.subtext,
    fontSize: 12,
    marginTop: 30,
    opacity: 0.6,
  },

  /* MODALS */
  modalContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
    backgroundColor: THEME.cardBg,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME.text,
  },
  closeButton: {
    padding: 4,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
  },
  modalContent: {
    padding: 20,
  },
  infoBox: {
    backgroundColor: THEME.cardBg,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03, // lowered shadow
    shadowRadius: 3,
    elevation: 1, // lowered elevation
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.text,
    marginTop: 15,
    marginBottom: 6,
  },
  infoText: {
    fontSize: 15,
    color: THEME.text,
    lineHeight: 24,
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: 15,
    color: THEME.text,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  lastUpdated: {
    fontSize: 12,
    color: THEME.subtext,
    marginBottom: 20,
    textAlign: 'center',
  },

  /* ACTION BUTTONS */
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#FFF8F0',
    padding: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  actionBtnText: {
    fontSize: 14,
    color: THEME.primary,
    fontWeight: '600',
    marginLeft: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#FAF7F5',
  },
  miniIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: THEME.text,
    flex: 1,
  },
});