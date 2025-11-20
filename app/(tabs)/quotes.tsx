// app/(tabs)/quotes.tsx
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { Quote, Share2, Shuffle } from 'lucide-react-native';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dailyInspiration } from '../../assets/text/dailyInspiration';
import { devotee } from '../../assets/text/devotee';
import { god } from '../../assets/text/god';
import { morality } from '../../assets/text/morality';
import { mysticism } from '../../assets/text/mysticism';
import { namasadan } from '../../assets/text/namasadhan';
import { sadhguru } from '../../assets/text/sadhguru';
import { saint } from '../../assets/text/saint';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB88D',
  divider: '#F5E6D3',
  quoteMark: '#EFE5D5',
  goldAccent: '#D4AF37', // Premium gold for borders
};

// --- LOGIC HELPERS ---
const getRandomInt = (max: number) => {
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

// --- COMPONENT: PREMIUM QUOTE CARD ---
const QuoteSection = ({ title, quote, onShuffle }: { title: string, quote: any, onShuffle: () => void }) => {
  
  const handleShare = async () => {
    if (!quote) return;
    Haptics.selectionAsync();
    try {
      const message = `"${quote.text}"\n\n- ${quote.reference}\n\nShared from Namsadhan App`;
      await Share.share({
        message: message,
        title: `A quote on ${title}`,
      });
    } catch (error: any) {
      console.error('Error sharing quote:', error.message);
    }
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onShuffle();
  };

  return (
    <View style={styles.cardWrapper}>
      {/* Top Gold Accent */}
      <View style={styles.goldBar} />

      <LinearGradient
        colors={['#FFFFFF', '#FFF8E1']} // Warm premium gradient
        style={styles.cardGradient}
      >
        {/* Header: Title */}
        <View style={styles.cardHeader}>
             <Text style={styles.categoryTitle}>{title.toUpperCase()}</Text>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
            {/* Decorative Quote Mark */}
            <View style={styles.watermark}>
                <Quote size={48} color={THEME.primary} opacity={0.15} />
            </View>

            {quote ? (
                <>
                  <Text style={styles.quoteText}>"{quote.text}"</Text>
                  <View style={styles.divider} />
                  <Text style={styles.authorText}>— {quote.reference}</Text>
                </>
            ) : (
                <Text style={styles.emptyText}>Wisdom loading...</Text>
            )}
        </View>

        {/* Bottom Action Bar */}
        <View style={styles.actionBar}>
            <TouchableOpacity 
                onPress={handleShare} 
                style={styles.actionButton}
                activeOpacity={0.6}
            >
                <Share2 size={20} color={THEME.textLight} />
                <Text style={styles.actionLabel}>Share</Text>
            </TouchableOpacity>
            
            <View style={styles.verticalDivider} />

            <TouchableOpacity 
                onPress={handleNext} 
                style={styles.actionButton}
                activeOpacity={0.6}
            >
                {/* <Text style={[styles.actionLabel, styles.nextLabel]}>Shuffle</Text> */}
                <Shuffle size={20} color={THEME.text} />
            </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default function QuotesScreen() {
  const insets = useSafeAreaInsets();
  const [displayedQuotes, setDisplayedQuotes] = useState<any>({});
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

  const allQuotesByCategory: any = {
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
    const newDailyQuotes: any = {};

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

  const handleShuffleCategory = useCallback((category: string) => {
    const categoryQuotes = allQuotesByCategory[category];
    if (categoryQuotes && categoryQuotes.length > 0) {
      const randomIndex = getRandomInt(categoryQuotes.length);
      setDisplayedQuotes((prevQuotes: any) => ({
        ...prevQuotes,
        [category]: categoryQuotes[randomIndex]
      }));
    }
  }, []);

  if (loading) {
    return (
      <View style={[styles.screenContainer, styles.centered]}>
        <ActivityIndicator size="large" color={THEME.primary} />
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      <ScrollView 
        contentContainerStyle={[
            styles.scrollContent, 
            { paddingTop: insets.top + 20 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* FIXED HEADER */}
        <View style={styles.header}>
          <Text 
            style={styles.title} 
            numberOfLines={1} 
            adjustsFontSizeToFit={true} 
            minimumFontScale={0.8}
          >
            Today's Divine Thoughts
          </Text>
        </View>

        {/* CARDS */}
        {categories.map((category) => (
          <QuoteSection
            key={category}
            title={category}
            quote={displayedQuotes[category]}
            onShuffle={() => handleShuffleCategory(category)}
          />
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    backgroundColor: THEME.background 
  },
  centered: { 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  // SCROLL
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  // HEADER
  header: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    width: '100%',
  },

  // CARD WRAPPER
  cardWrapper: {
    marginBottom: 24,
    borderRadius: 20,
    // Premium Shadow
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
    backgroundColor: THEME.cardBg,
    overflow: 'hidden',
  },
  goldBar: {
    width: '100%',
    height: 5,
    backgroundColor: THEME.primary, // Gold/Tan accent
  },
  cardGradient: {
    paddingTop: 20,
    paddingBottom: 0,
  },

  // CARD HEADER
  cardHeader: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 18, // Increased size
    fontWeight: '800', // Boldest weight
    color: THEME.text,
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  // CONTENT
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: 'center',
    minHeight: 120,
  },
  watermark: {
    position: 'absolute',
    top: -10,
    left: 0,
  },
  quoteText: {
    fontSize: 20,
    color: THEME.text,
    textAlign: 'center',
    lineHeight: 32,
    fontFamily: 'System',
    fontWeight: '500',
    marginBottom: 16,
    marginTop: 8,
  },
  emptyText: {
    color: THEME.textLight,
    fontStyle: 'italic',
    marginTop: 10,
  },
  
  // AUTHOR
  divider: {
    width: 40,
    height: 2,
    backgroundColor: THEME.divider,
    marginBottom: 12,
  },
  authorText: {
    fontSize: 15,
    color: THEME.textLight,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  // ACTION BAR
  actionBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    height: 54,
    backgroundColor: 'rgba(255,255,255,0.6)', // Slightly distinct footer
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.textLight,
    marginLeft: 8,
  },
  nextLabel: {
    color: THEME.text, // Darker color for "Next" to encourage clicking
    marginRight: 4,
    marginLeft: 0,
  },
});