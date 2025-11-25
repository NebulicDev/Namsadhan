// app/(tabs)/index.tsx
import * as Haptics from 'expo-haptics'; // Import Haptics
import { X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
import { bios } from '../../assets/text/bios';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
  accent: 'rgba(210, 180, 140, 0.25)',
  shadow: '#5D4037',
};

const spiritualGuides = [
  {
    id: '1',
    name: 'Shri Nimbargi Maharaj',
    photo: require('../../assets/images/shri-nimbargi-maharaj.jpeg'),
    bio: bios['Shri Nimbargi Maharaj'],
  },
  {
    id: '2',
    name: 'Shri Amburao Maharaj',
    photo: require('../../assets/images/shri-amburao-maharaj.jpeg'),
    bio: bios['Shri Amburao Maharaj'],
  },
  {
    id: '3',
    name: 'Shri Bhausaheb Maharaj',
    photo: require('../../assets/images/shri-bhausaheb-maharaj.jpeg'),
    bio: bios['Shri Bhausaheb Maharaj'],
  },
  {
    id: '4',
    name: 'Shri Gurudev R. D. Ranade',
    photo: require('../../assets/images/shri-gurudev-ranade.jpeg'),
    bio: bios['Shri Gurudev R. D. Ranade'],
  },
];

type Guide = typeof spiritualGuides[0];

export default function HomeScreen() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const handleGuidePress = (guide: Guide) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedGuide(guide);
  };

  const handleCloseModal = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedGuide(null);
  };

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
        }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [lineIndex]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Animated Header: Gentle Fade Down */}
        <Animated.View 
          style={styles.header}
          entering={FadeInDown.duration(1000)}
        >
          <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true}>Nimbargi Sampradaya</Text>
          <Text style={styles.subtitle} numberOfLines={1} adjustsFontSizeToFit={true}>Shri Gurudev Ranade Samadhi Trust</Text>
        </Animated.View>

        {/* Top Card: Gentle Float Up */}
        <Animated.View 
          entering={FadeInUp.delay(200).duration(800)}
        >
          <TouchableOpacity 
            style={styles.topCardContainer} 
            activeOpacity={0.9}
            onPress={() => handleGuidePress(spiritualGuides[0])}
          >
            <View style={styles.cardContent}>
              <Image source={spiritualGuides[0].photo} style={styles.cardImage} resizeMode="cover" />
              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitle}>{spiritualGuides[0].name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* Bottom Row: Staggered Float Up */}
        <View style={styles.bottomRow}>
          {spiritualGuides.slice(1).map((guide, index) => (
            <Animated.View 
              key={guide.id}
              style={{ width: '31%' }}
              entering={FadeInUp.delay(400 + (index * 200)).duration(800)}
            >
              <TouchableOpacity 
                style={styles.bottomCardContainer} 
                activeOpacity={0.9}
                onPress={() => handleGuidePress(guide)}
              >
                <View style={styles.cardContent}>
                  <Image source={guide.photo} style={styles.cardImage} resizeMode="cover" />
                  <View style={styles.cardOverlay}>
                    <Text style={styles.cardTitleSmall}>{guide.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Prayer Section: Slow Fade In */}
        <Animated.View 
          style={styles.prayerContainer}
          entering={FadeIn.delay(1200).duration(1500)}
        >
          <View style={styles.prayerContent}>
            <View style={[styles.prayerDecoration, { marginBottom: 8 }]}>
              <View style={styles.decorationDot} />
              <View style={styles.decorationLine} />
              <View style={styles.decorationDot} />
            </View>

            <Text style={styles.prayerText} numberOfLines={1} adjustsFontSizeToFit={true}>
              {typedText}
            </Text>

            <View style={[styles.prayerDecoration, { marginTop: 6 }]}>
              <View style={styles.decorationDot} />
              <View style={styles.decorationLine} />
              <View style={styles.decorationDot} />
            </View>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Full Screen Modal */}
      <Modal
        visible={selectedGuide !== null}
        transparent={true}
        statusBarTranslucent={true}
        animationType="none"
        onRequestClose={handleCloseModal}
      >
        {selectedGuide && (
          // Backdrop: Very Slow Fade for "Atmosphere"
          <Animated.View 
            style={styles.modalOverlay}
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(400)}
          >
            {/* Modal Card: Gentle Glide Up (Calm, not Poppy) */}
            <Animated.View 
              style={styles.modalCard}
              entering={FadeInDown.duration(600).damping(20)}
              exiting={FadeOut.duration(300)}
            >
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <X size={24} color={THEME.lightText} />
              </TouchableOpacity>
              <ScrollView contentContainerStyle={styles.modalContent}>
                <Image source={selectedGuide.photo} style={styles.modalImage} resizeMode="cover" />
                <Text style={styles.modalTitle} numberOfLines={1} adjustsFontSizeToFit={true}>{selectedGuide.name}</Text>
                <Text style={styles.modalBio}>{selectedGuide.bio}</Text>
              </ScrollView>
            </Animated.View>
          </Animated.View>
        )}
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
    paddingBottom: 120,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
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
  topCardContainer: {
    height: 250,
    marginHorizontal: 20,
    backgroundColor: THEME.card,
    borderRadius: 20,
    elevation: 10,
    shadowColor: THEME.shadow, 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },
  bottomCardContainer: {
    width: '100%', 
    height: 180,
    backgroundColor: THEME.card,
    borderRadius: 20,
    elevation: 10,
    shadowColor: THEME.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  cardContent: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.06)',
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: THEME.white,
  textShadowColor: 'rgba(0, 0, 0, 0.35)',  
  textShadowOffset: { width: 0, height: 2 }, 
  textShadowRadius: 6,                      
  textAlign: 'center',
},
cardTitleSmall: {
  fontSize: 14,
  fontWeight: 'bold',
  color: THEME.white,
  textShadowColor: 'rgba(0, 0, 0, 0.35)',  
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 5,
  textAlign: 'center',
},
  prayerContainer: {
    marginHorizontal: 20,
    marginTop: 35,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prayerContent: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  prayerText: {
    fontSize: 24,
    color: THEME.text,
    textAlign: 'center',
    fontFamily: 'serif',
    lineHeight: 38,
    fontWeight: '500',
    letterSpacing: 0.6,
  },
  prayerDecoration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  decorationLine: {
    width: 200,
    height: 1,
    backgroundColor: THEME.primary,
    marginHorizontal: 8,
  },
  decorationDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.primary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: THEME.background,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
    padding: 5,
  },
  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalBio: {
    fontSize: 17,
    color: THEME.text,
    lineHeight: 26,
    textAlign: 'center',
  },
});