import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

// --- New Quotes Data Structure ---
const QUOTES_DATA = {
  "Namasadhan": [
    { id: 'dt1', text: 'In the stillness of meditation, the divine whispers its secrets.', author: 'Ancient Proverb' },
    { id: 'dt2', text: 'Look for the divine in the ordinary, and you will find it everywhere.', author: 'Anonymous' },
  ],
  "Morality": [
    { id: 'm1', text: 'The true measure of a man is how he treats someone who can do him absolutely no good.', author: 'Samuel Johnson' },
    { id: 'm2', text: 'Right is right even if no one is doing it; wrong is wrong even if everyone is doing it.', author: 'Augustine of Hippo' },
  ],
  "Mysticism": [
    { id: 'di1', text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
    { id: 'di2', text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
  ],
  "For Daily Inspiration": [
    { id: 'my1', text: 'The quieter you become, the more you are able to hear.', author: 'Rumi' },
    { id: 'my2', text: 'What you seek is seeking you.', author: 'Rumi' },
  ],
};

// --- Helper function to get a random quote ---
const getRandomQuote = (quotes: { id: string; text: string; author: string }[]) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// --- Quote Section Component ---
const QuoteSection = ({ title, quote }: { title: string; quote: { text: string; author: string } }) => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.separator} />
    <Text style={styles.quoteText}>"{quote.text}"</Text>
    <Text style={styles.authorText}>- {quote.author}</Text>
  </View>
);

export default function QuotesScreen() {
  const [dailyQuotes, setDailyQuotes] = useState<{ [key: string]: { text: string; author: string } }>({});

  useEffect(() => {
    // This effect runs once when the component mounts to select the daily quotes
    const newDailyQuotes: { [key: string]: { text: string; author: string } } = {};
    for (const category in QUOTES_DATA) {
      newDailyQuotes[category] = getRandomQuote(QUOTES_DATA[category as keyof typeof QUOTES_DATA]);
    }
    setDailyQuotes(newDailyQuotes);
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.listContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Today's Divine Thoughts</Text>
        </View>
        {Object.keys(dailyQuotes).map((category) => (
          <QuoteSection key={category} title={category} quote={dailyQuotes[category]} />
        ))}
      </ScrollView>
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
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: THEME.primary,
    opacity: 0.3,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: THEME.text,
    lineHeight: 30,
    marginBottom: 15,
  },
  authorText: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.primary,
    textAlign: 'right',
  },
});
