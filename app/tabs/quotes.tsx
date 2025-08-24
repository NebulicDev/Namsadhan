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
    "For Daily Inspiration": [
    { id: 'my1', text: 'Only when we keep the fact of death every moment before us we may be encouraged to devote continuous attention to the spiritual like', reference: 'P.G.H.L Page no. 26/60' },
  ],
  "Namasadhan": [
    { id: 'dt1', text: 'The Name of God is superior to God with form, as well as to God without form.', reference: 'P.G.H.L Page no.  342/379' },
  ],
  "Morality": [
    { id: 'm1', text: 'If a wrong word, or a bad word escapes your lips, be sorry for it, & cherish the sorrow for some time, in order that the same mistake might not be committed again.', reference: 'Reflections 26 May 1912' },
  ],
  "Mysticism": [
    { id: 'di1', text: 'God cannot be seen, God cannot be expressed by word of mouth and God cannot be heard. God is the greatest wonder of all existence', reference: 'B.G.P.G.R Page no. 245/217' },
  ],
};

// --- Helper function to get a random quote ---
const getRandomQuote = (quotes: { id: string; text: string; reference: string }[]) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// --- Quote Section Component ---
const QuoteSection = ({ title, quote }: { title: string; quote: { text: string; reference: string } }) => (
  <View style={styles.card}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.separator} />
    <Text style={styles.quoteText}>"{quote.text}"</Text>
    <Text style={styles.referenceText}>- {quote.reference}</Text>
  </View>
);

export default function QuotesScreen() {
  const [dailyQuotes, setDailyQuotes] = useState<{ [key: string]: { text: string; reference: string } }>({});

  useEffect(() => {
    // This effect runs once when the component mounts to select the daily quotes
    const newDailyQuotes: { [key: string]: { text: string; reference: string } } = {};
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
  referenceText: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.primary,
    textAlign: 'right',
  },
});
