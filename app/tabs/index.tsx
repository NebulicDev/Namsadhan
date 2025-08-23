import React, { useRef, useState } from 'react';
import {
  Animated, Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
};

// --- Mock Data ---
const spiritualFigures = [
  { id: '1', name: 'Ramakrishna', photoUrl: 'https://placehold.co/600x800/FFF8F0/5D4037?text=Ramakrishna', bio: 'Sri Ramakrishna Paramahamsa was a 19th-century Indian mystic and spiritual leader...' },
  { id: '2', name: 'Vivekananda', photoUrl: 'https://placehold.co/600x800/FFF8F0/5D4037?text=Vivekananda', bio: 'Swami Vivekananda was a Hindu monk and a chief disciple of Ramakrishna...' },
  { id: '3', name: 'Yogananda', photoUrl: 'https://placehold.co/600x800/FFF8F0/5D4037?text=Yogananda', bio: 'Paramahansa Yogananda was an Indian monk, yogi, and guru who introduced millions to meditation...' },
  { id: '4', name: 'Anandamayi Ma', photoUrl: 'https://placehold.co/600x800/FFF8F0/5D4037?text=Anandamayi+Ma', bio: 'Sri Anandamayi Ma was a spiritual teacher from Bengal, India, revered as a self-realized master...' }
];

// --- Card Component ---
const Card = ({ item }: { item: typeof spiritualFigures[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animateValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animateValue.interpolate({ inputRange: [0, 180], outputRange: ['0deg', '180deg'] });
  const backInterpolate = animateValue.interpolate({ inputRange: [0, 180], outputRange: ['180deg', '360deg'] });

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.spring(animateValue, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };

  return (
    <TouchableOpacity onPress={flipCard} activeOpacity={0.9} style={styles.cardContainer}>
      <Animated.View style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
        <Image source={{ uri: item.photoUrl }} style={styles.cardImage} />
        <View style={styles.cardTextContainer}><Text style={styles.cardTitle}>{item.name}</Text></View>
      </Animated.View>
      <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
        <Text style={styles.cardBackTitle}>{item.name}</Text>
        <Text style={styles.cardBackBio}>{item.bio}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

// --- Main Screen Component ---
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.homeHeader}>
        <Text style={styles.title}>Spiritual Guides</Text>
        <Text style={styles.subtitle}>Tap a card to learn more</Text>
      </View>
      <FlatList
        data={spiritualFigures}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

// --- Stylesheet ---
const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  homeHeader: { paddingTop: 40, paddingBottom: 20, alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: THEME.text, marginBottom: 8 },
  subtitle: { fontSize: 16, color: THEME.lightText, textAlign: 'center' },
  flatListContent: { paddingHorizontal: (width - CARD_WIDTH) / 2 },
  cardContainer: { width: CARD_WIDTH, height: CARD_HEIGHT, marginHorizontal: 10 },
  card: { position: 'absolute', width: '100%', height: '100%', borderRadius: 20, backfaceVisibility: 'hidden', justifyContent: 'center', alignItems: 'center' },
  cardFront: { backgroundColor: THEME.primary },
  cardBack: { backgroundColor: THEME.primary, padding: 20 },
  cardImage: { width: '100%', height: '100%', borderRadius: 20 },
  cardTextContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: 'rgba(0,0,0,0.4)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  cardTitle: { fontSize: 24, fontWeight: 'bold', color: THEME.white },
  cardBackTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 10 },
  cardBackBio: { fontSize: 16, color: THEME.text, lineHeight: 24 },
});
