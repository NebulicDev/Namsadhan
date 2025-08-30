import { X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
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

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
};

const spiritualGuides = [
  { id: '1', name: 'Shri Nimbargi Maharaj', photo: require('../../assets/images/nimbargi-maharaj.png'), bio: 'Update' },
  { id: '2', name: 'Shri Amburao Maharaj', photo: require('../../assets/images/amburao-maharaj.png'), bio: 'Update' },
  { id: '3', name: 'Shri Bhausaheb Maharaj', photo: require('../../assets/images/bhausaheb-maharaj.png'), bio: 'Update' },
  { id: '4', name: 'Shri Gurudev Ranade', photo: require('../../assets/images/gurudeo-ranade.png'), bio: 'Update' },
];

type Guide = typeof spiritualGuides[0];

export default function HomeScreen() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const prayerLines = [
    'ॐ',
    'ब्रह्मानन्दं परमसुखदं केवलं ज्ञानमूर्तिं',
    'द्वन्द्वातीतं गगनसदृशं तत्त्वमस्यादिलक्ष्यम् ।',
    'एकं नित्यं विमलमचलं सर्वधीसाक्षिभूतं',
    'भावातीतं त्रिगुणरहितं सद्गुरुं तं नमामि ॥',
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentLine = prayerLines[lineIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentLine.length) {
        setTypedText(currentLine.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % prayerLines.length);
        }, 1000); // Wait 1 second before starting next line
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [lineIndex]);


  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Nimbargi Sampradaya</Text>
          <Text style={styles.subtitle}>Shri Gurudev Ranade Samadhi Trust</Text>
        </View>

        {/* Top Card */}
        <TouchableOpacity style={styles.topCard} onPress={() => setSelectedGuide(spiritualGuides[0])}>
          <Image source={spiritualGuides[0].photo} style={styles.topCardImage} resizeMode="cover" />
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>{spiritualGuides[0].name}</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Row of Cards */}
        <View style={styles.bottomRow}>
          {spiritualGuides.slice(1).map((guide) => (
            <TouchableOpacity key={guide.id} style={styles.bottomCard} onPress={() => setSelectedGuide(guide)}>
              <Image source={guide.photo} style={styles.bottomCardImage} resizeMode="cover" />
              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitleSmall}>{guide.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Animated Typing Prayer Text */}
        <View style={styles.prayerContainer}>
            <Text style={styles.scrollLine}>{"─".repeat(50)}</Text>
            <Text style={styles.prayerText}>{typedText}</Text>
            <Text style={styles.scrollLine}>{"─".repeat(50)}</Text>
        </View>

        {/* Fullscreen Modal */}
        <Modal visible={selectedGuide !== null} animationType="slide" onRequestClose={() => setSelectedGuide(null)}>
          <SafeAreaView style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedGuide(null)}>
              <X size={30} color={THEME.text} />
            </TouchableOpacity>

            {selectedGuide && (
              <>
                <Image source={selectedGuide.photo} style={styles.modalImage} resizeMode="cover" />
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{selectedGuide.name}</Text>
                  <Text style={styles.modalBio}>{selectedGuide.bio}</Text>
                </View>
              </>
            )}
          </SafeAreaView>
        </Modal>
      </ScrollView>
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
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: THEME.text,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: THEME.lightText,
        marginTop: 4,
        textAlign: 'center',
    },
    topCard: {
        height: 250,
        marginHorizontal: 20,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: THEME.card,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 8.3,
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
        height: 180,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: THEME.card,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 8.3,
    },
    bottomCardImage: {
        width: '100%',
        height: '100%',
    },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        justifyContent: 'flex-end',
        padding: 15,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: THEME.white,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    cardTitleSmall: {
        fontSize: 14,
        fontWeight: 'bold',
        color: THEME.white,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    prayerContainer: {
        marginHorizontal: 20,
        marginTop: 30,
        height: 100, // Increased height to accommodate lines
        justifyContent: 'center',
    },
    prayerText: {
        fontSize: 24, // increased size
        color: THEME.text,
        textAlign: 'center',
        fontFamily: 'serif',
        lineHeight: 32,
        textShadowColor: THEME.primary,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    scrollLine: {
        fontSize: 10,
        color: THEME.primary,
        textAlign: 'center',
    },
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