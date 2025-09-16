// app/(tabs)/index.tsx
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
// Import animation hooks from reanimated
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { bios } from '../../assets/text/bios';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
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
    name: 'Shri Gurudev Ranade',
    photo: require('../../assets/images/shri-gurudev-ranade.jpeg'),
    bio: bios['Shri Gurudev Ranade'],
  },
];

type Guide = typeof spiritualGuides[0];

export default function HomeScreen() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const animation = useSharedValue(0);

  // CHANGE 1: The animation now includes a 'scale' effect for a nice pop-up feel.
  const animatedModalStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animation.value, [0, 1], [0, 1]);
    const scale = interpolate(animation.value, [0, 1], [0.9, 1]);
    return {
      opacity,
      transform: [{ scale }],
    };
  });

  useEffect(() => {
    if (selectedGuide) {
      animation.value = withTiming(1, { duration: 300 });
    } else {
      animation.value = withTiming(0, { duration: 200 });
    }
  }, [selectedGuide, animation]);

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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true} >Nimbargi Sampradaya</Text>
          <Text style={styles.subtitle}>Shri Gurudev Ranade Samadhi Trust</Text>
        </View>

        <TouchableOpacity style={styles.topCard} onPress={() => setSelectedGuide(spiritualGuides[0])}>
          <Image source={spiritualGuides[0].photo} style={styles.topCardImage} resizeMode="cover" />
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>{spiritualGuides[0].name}</Text>
          </View>
        </TouchableOpacity>

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

        <View style={styles.prayerContainer}>
          <Text style={styles.scrollLine}>{"─".repeat(40)}</Text>
          <Text style={styles.prayerText}>{typedText}</Text>
          <Text style={styles.scrollLine}>{"─".repeat(40)}</Text>
        </View>
      </ScrollView>

      {/* CHANGE 2: The Modal is now transparent with a fade animation */}
      <Modal
        visible={selectedGuide !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedGuide(null)}
      >
        <View style={styles.modalOverlay}>
          {selectedGuide && (
            <Animated.View style={[styles.modalCard, animatedModalStyle]}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedGuide(null)}>
                <X size={24} color={THEME.lightText} />
              </TouchableOpacity>
              <ScrollView contentContainerStyle={styles.modalContent}>
                <Image source={selectedGuide.photo} style={styles.modalImage} resizeMode="cover" />
                <Text style={styles.modalTitle}>{selectedGuide.name}</Text>
                <Text style={styles.modalBio}>{selectedGuide.bio}</Text>
              </ScrollView>
            </Animated.View>
          )}
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
  topCard: {
    height: 250,
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: THEME.card,
    elevation: 6,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
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
    shadowColor: 'rgba(93, 64, 55, 0.4)',
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
    textAlign: 'center',
  },
  cardTitleSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  prayerContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    height: 100,
    justifyContent: 'center',
  },
  prayerText: {
    fontSize: 24,
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
  // CHANGE 3: New and updated styles for the pop-up modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: THEME.background,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
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
    height: 250, // Adjusted height for card view
    borderRadius: 15, // <-- Add this line to round the image corners
    marginBottom: 20, // Keep existing margin for spacing
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