// app/(tabs)/quotes.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share2 } from 'lucide-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const QuoteSection = ({ title, quote }) => {
  const handleShare = async () => {
    if (!quote) return;
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

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={handleShare} style={styles.shareIcon}>
          <Share2 size={22} color={THEME.lightText} />
        </TouchableOpacity>
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
  const [dailyQuotes, setDailyQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const categories = ["Daily Inspiration", "Namasadhan", "Morality", "Mysticism"];

  const selectDailyQuotes = useCallback((quotesList) => {
    const quotesByCategory = {};
    categories.forEach(cat => quotesByCategory[cat] = []);
    quotesList.forEach(quote => {
      if (quotesByCategory[quote.category]) {
        quotesByCategory[quote.category].push(quote);
      }
    });

    const dayOfYear = getDayOfYear();
    const newDailyQuotes = {};

    for (const category of categories) {
        const categoryQuotes = quotesByCategory[category];
        if (categoryQuotes && categoryQuotes.length > 0) {
            const dailyIndex = dayOfYear % categoryQuotes.length;
            newDailyQuotes[category] = categoryQuotes[dailyIndex];
        } else {
            newDailyQuotes[category] = null;
        }
    }
    setDailyQuotes(newDailyQuotes);
  }, []);

  useEffect(() => {
    const loadQuotes = async () => {
      setLoading(true);
      try {
        const cachedQuotesJSON = await AsyncStorage.getItem('allQuotes');
        let quotesData = cachedQuotesJSON ? JSON.parse(cachedQuotesJSON) : null;

        if (!quotesData || quotesData.length === 0) {
          console.log("No cached quotes found. Fetching from Firestore...");
          // *** THIS IS THE CHANGED PART ***
          const quotesCollection = db.collection('quotes');
          const quotesSnapshot = await quotesCollection.get();
          quotesData = quotesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          await AsyncStorage.setItem('allQuotes', JSON.stringify(quotesData));
        } else {
          console.log("Loaded quotes from local cache.");
        }
        
        selectDailyQuotes(quotesData);

      } catch (error) {
        console.error("Error loading quotes: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, [selectDailyQuotes]);


  if (loading) {
    return (
      <SafeAreaView style={[styles.screenContainer, styles.centered]}>
        <ActivityIndicator size="large" color={THEME.primary} />
        <Text style={{color: THEME.text, marginTop: 10}}>Loading Divine Thoughts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.listContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Today's Divine Thoughts</Text>
        </View>

        {categories.map((category) => (
          <QuoteSection key={category} title={category} quote={dailyQuotes[category]} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { paddingTop: 60, marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { backgroundColor: THEME.card, borderRadius: 15, padding: 25, marginBottom: 20, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 22, fontWeight: '700', color: THEME.text, flex: 1 },
  shareIcon: { padding: 5 },
  separator: { height: 1, backgroundColor: THEME.primary, opacity: 0.3, marginBottom: 20 },
  quoteText: { fontSize: 20, fontStyle: 'italic', color: THEME.text, lineHeight: 30, marginBottom: 15 },
  referenceText: { fontSize: 16, fontWeight: '600', color: THEME.primary, textAlign: 'right' },
});