// app/(tabs)/quotes.tsx
import * as Haptics from 'expo-haptics';
import { RefreshCw, Share2 } from 'lucide-react-native';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { dailyInspiration } from '../../assets/text/dailyInspiration';
import { devotee } from '../../assets/text/devotee';
import { god } from '../../assets/text/god';
import { morality } from '../../assets/text/morality';
import { mysticism } from '../../assets/text/mysticism';
import { namasadan } from '../../assets/text/namasadhan';
import { sadhguru } from '../../assets/text/sadhguru';
import { saint } from '../../assets/text/saint';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
  gradientEnd: '#FFB88D',
  white: '#FFFFFF'
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const QuoteSection = ({ title, quote, onShuffle }) => {
  const handleShare = async () => {
    if (!quote) return;
    Haptics.selectionAsync();
    try {
      const message = `"${quote.text}"\n\n- ${quote.reference}\n\nShared from Namsadhan App`;
      await Share.share({
        message: message,
        title: `A quote on ${title}`,
      });
    } catch (error) {
      console.error('Error sharing quote:', error.message);
    }
  };

  const handleShuffle = () => {
    Haptics.selectionAsync();
    onShuffle();
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity onPress={handleShuffle} style={styles.shuffleIcon}>
            <RefreshCw size={22} color={THEME.gradientEnd} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare} style={styles.shareIcon}>
            <Share2 size={22} color={THEME.lightText} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      {quote ? (
        <>
          <Text style={styles.quoteText}>"{quote.text}"</Text>
          <Text style={styles.referenceText}>- {quote.reference}</Text>
        </>
      ) : (
        <Text style={styles.quoteText}>No quote available for this category.</Text>
      )}
    </View>
  );
};

export default function QuotesScreen() {
  const [displayedQuotes, setDisplayedQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const categories = [
  'Daily Inspiration',
  'Namasadhan',
  'Morality',
  'Mysticism',
  'Sadhguru',
  'God',
  'Saint',
  'Devotee',
];

  const allQuotesByCategory = {
    'Daily Inspiration': dailyInspiration,
    'Namasadhan': namasadan,
    'Morality': morality,
    'Mysticism': mysticism,
    'Sadhguru': sadhguru,
    'God': god,
    'Saint': saint,
    'Devotee': devotee,
  };

  const selectDailyQuotes = useCallback(() => {
    const dayOfYear = getDayOfYear();
    const newDailyQuotes = {};

    for (const category of categories) {
      const categoryQuotes = allQuotesByCategory[category];
      if (categoryQuotes && categoryQuotes.length > 0) {
        const dailyIndex = dayOfYear % categoryQuotes.length;
        newDailyQuotes[category] = categoryQuotes[dailyIndex];
      } else {
        newDailyQuotes[category] = null;
      }
    }
    setDisplayedQuotes(newDailyQuotes);
    setLoading(false);
  }, []);

  useEffect(() => {
    selectDailyQuotes();
  }, [selectDailyQuotes]);

  const handleShuffleCategory = useCallback((category) => {
    const categoryQuotes = allQuotesByCategory[category];
    if (categoryQuotes && categoryQuotes.length > 0) {
      const randomIndex = getRandomInt(categoryQuotes.length);
      setDisplayedQuotes(prevQuotes => ({
        ...prevQuotes,
        [category]: categoryQuotes[randomIndex]
      }));
    }
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={[styles.screenContainer, styles.centered]}>
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{ color: THEME.text, marginTop: 10 }}>Loading Divine Thoughts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.listContent}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true}>Today's Divine Thoughts</Text>
        </View>

        {categories.map((category) => (
          <QuoteSection
            key={category}
            title={category}
            quote={displayedQuotes[category]}
            onShuffle={() => handleShuffleCategory(category)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: {
    paddingTop: 60,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: THEME.text,
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 22, fontWeight: '700', color: THEME.text, flex: 1 },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: { padding: 5, marginLeft: 10 },
  shuffleIcon: {
    padding: 5,
  },
  separator: { height: 1, backgroundColor: THEME.primary, opacity: 0.3, marginBottom: 20 },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: THEME.text,
    lineHeight: 30,
    marginBottom: 15,
  },
  referenceText: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.primary,
    textAlign: 'left',
  },
});