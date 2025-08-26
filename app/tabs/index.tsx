import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF', // Added for clarity
};

// --- Updated Data Structure ---
const spiritualGuides = [
  { 
    id: '1', 
    name: 'Shri Nimbargi Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/nimbargi-maharaj.jpg'), 
    bio: 'Update'
  },
  { 
    id: '2', 
    name: 'Shri Amburao Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/amburao-maharaj.jpg'),
    bio: 'Update'
  },
  { 
    id: '3', 
    name: 'Shri Bhausaheb Maharaj',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/bhausaheb-maharaj.jpg'),
    bio: 'Update'
  },
  { 
    id: '4', 
    name: 'Shri Gurudev Ranade',
    // TODO: Replace with your actual image file
    photo: require('../../assets/images/gurudeo-ranade.jpg'),
    bio: 'Update'
  },
];

// Define the type for a single guide
type Guide = typeof spiritualGuides[0];

export default function HomeScreen() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Nimbargi Sampradaya</Text>
          <Text style={styles.subtitle}>Shri Gurudev Ranade Samadhi Trust</Text>
        </View>

        {/* Top Card */}
        <TouchableOpacity style={styles.topCard} onPress={() => setSelectedGuide(spiritualGuides[0])}>
          <Image source={spiritualGuides[0].photo} style={styles.topCardImage} />
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>{spiritualGuides[0].name}</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Row of Cards */}
        <View style={styles.bottomRow}>
          {spiritualGuides.slice(1).map((guide) => (
            <TouchableOpacity key={guide.id} style={styles.bottomCard} onPress={() => setSelectedGuide(guide)}>
              <Image source={guide.photo} style={styles.bottomCardImage} />
              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitleSmall}>{guide.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fullscreen Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={selectedGuide !== null}
        onRequestClose={() => setSelectedGuide(null)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedGuide(null)}>
              <X size={32} color={THEME.text} />
            </TouchableOpacity>
            {selectedGuide && (
              <>
                <Image source={selectedGuide.photo} style={styles.modalImage} />
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{selectedGuide.name}</Text>
                  <Text style={styles.modalBio}>{selectedGuide.bio}</Text>
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center', // Center align items horizontally
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center', // Center text
  },
  subtitle: {
    fontSize: 18,
    color: THEME.lightText,
    marginTop: 4,
    textAlign: 'center', // Center text
  },
  topCard: {
    height: 250, // Increased height
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: THEME.card,
  },
  topCardImage: {
    width: '100%',
    height: '100%',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  bottomCard: {
    width: '31%',
    height: 180, // Increased height
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: THEME.card,
  },
  bottomCardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.white,
    // Added text shadow for visibility
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  cardTitleSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.white,
    // Added text shadow for visibility
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  modalImage: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
  },
  modalBio: {
    fontSize: 18,
    color: THEME.text,
    lineHeight: 28,
  },
});
