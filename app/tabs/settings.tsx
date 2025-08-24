import { Bell, ChevronRight, HandHeart, Info, Mail, Phone } from 'lucide-react-native';
import React, { useState } from 'react';
import { Linking, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
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
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);

  const handleNotifications = () => alert('Notification settings will be here.');
  // const handleAppearance = () => alert('Appearance settings will be here.');
  const handleAbout = () => alert('Information about the Namsadhan app.');
  const handleDonation = () => alert('Donation information will be here.');

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.card}>
          <SettingsItem
            icon={<Bell size={24} color={THEME.text} />}
            text="Notifications"
            onPress={handleNotifications}
          />
          <View style={styles.separator} />
          {/* <SettingsItem
            icon={<Palette size={24} color={THEME.text} />}
            text="Appearance"
            onPress={handleAppearance}
          /> */}
          <View style={styles.separator} />
          <SettingsItem
            icon={<Phone size={24} color={THEME.text} />}
            text="Contact Us"
            onPress={() => setContactModalVisible(true)}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<HandHeart size={24} color={THEME.text} />}
            text="Donation"
            onPress={handleDonation}
          />
          <View style={styles.separator} />
          <SettingsItem
            icon={<Info size={24} color={THEME.text} />}
            text="About Namsadhan"
            onPress={handleAbout}
          />
        </View>

        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>Location</Text>
          <WebView
            style={styles.map}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            originWhitelist={['*']}
            source={{
              html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>html, body, iframe { margin: 0; height: 100%; width: 100%; }</style>
                  </head>
                  <body>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925.1792645051576!2d75.86212988710083!3d17.119082218668822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65cfd7a03c0db%3A0x70deb32084182638!2sShree%20Gurudev%20Ranade%20Samadhi%20Ashram%20Nimbal%20(rs)!5e0!3m2!1sen!2sin!4v1756036969556!5m2!1sen!2sin" 
                      frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </body>
                </html>
              `
            }}
          />
        </View>
      </ScrollView>

      {/* Contact Us Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={contactModalVisible}
        onRequestClose={() => setContactModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Information</Text>
            <View style={styles.contactCard}>
              <Text style={styles.contactOrg}>Shri Gurudev Ranade Samadhi Trust, Nimbal (R.S.)</Text>
              <Text style={styles.contactAddress}>Tal. Indi, Dist. Biajapur, State. Karnatak, India. 586211</Text>
              <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL('tel:+919482206716')}>
                <Phone size={18} color={THEME.primary} />
                <Text style={styles.contactText}>+91-94822 06716 (BSNL)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL('tel:+916363383415')}>
                <Phone size={18} color={THEME.primary} />
                <Text style={styles.contactText}>+91-6363383415 (JIO)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL('mailto:gurudevranadenimbal@gmail.com')}>
                <Mail size={18} color={THEME.primary} />
                <Text style={styles.contactText}>gurudevranadenimbal@gmail.com</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setContactModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
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
    marginLeft: 55,
  },
  mapContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    height: 250,
  },
  mapTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
  },
  map: {
    flex: 1,
    borderRadius: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 20,
  },
  contactCard: {
    width: '100%',
    backgroundColor: THEME.background,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  contactOrg: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  contactAddress: {
    fontSize: 14,
    color: THEME.lightText,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: THEME.text,
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: THEME.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  closeButtonText: {
    color: THEME.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
