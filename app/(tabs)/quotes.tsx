// app/(tabs)/quotes.tsx
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { Quote, RefreshCw, Share2, Sparkles } from 'lucide-react-native';
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
  iconBg: '#FDF5E6',
  divider: '#fcd9c3ff',
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

// --- COMPONENT: QUOTE CARD ---
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

  const handleShuffle = () => {
    Haptics.selectionAsync();
    onShuffle();
  };

  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['#FFFFFF', '#FFFDF9']}
        style={styles.cardGradient}
      >
        {/* Decorative Watermark */}
        <View style={styles.watermarkContainer}>
            <Quote size={80} color={THEME.primary} opacity={0.06} />
        </View>

        {/* Header: Title & Actions */}
        <View style={styles.cardHeader}>
            <View style={styles.titleBadge}>
                <Sparkles size={14} color={THEME.text} style={{ marginRight: 6 }} />
                <Text style={styles.sectionTitle}>{title}</Text>
            </View>
            
            <View style={styles.actionsRow}>
                <TouchableOpacity 
                    onPress={handleShuffle} 
                    style={styles.actionButton}
                    hitSlop={10}
                >
                     <RefreshCw size={18} color={THEME.textLight} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={handleShare} 
                    style={[styles.actionButton, { marginLeft: 8 }]}
                    hitSlop={10}
                >
                     <Share2 size={18} color={THEME.primary} />
                </TouchableOpacity>
            </View>
        </View>

        {/* Divider */}
        <View style={styles.separator} />

        {/* Quote Content */}
        <View style={styles.contentContainer}>
          {quote ? (
            <>
              <Text style={styles.quoteText}>{quote.text}</Text>
              <View style={styles.referenceWrapper}>
                 <View style={styles.dash} />
                 <Text style={styles.referenceText}>{quote.reference}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.emptyText}>No quote available for this category.</Text>
          )}
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
        <Text style={{ color: THEME.text, marginTop: 10 }}>Loading Divine Thoughts...</Text>
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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true}>Divine Thoughts</Text>
          <Text style={styles.subtitle} numberOfLines={1} adjustsFontSizeToFit={true}>Teachings for Today’s Contemplation</Text>
        </View>

        {/* Quote Cards */}
        {categories.map((category) => (
          <QuoteSection
            key={category}
            title={category}
            quote={displayedQuotes[category]}
            onShuffle={() => handleShuffleCategory(category)}
          />
        ))}

        {/* Bottom Spacing */}
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
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  // HEADER
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.textLight,
    marginTop: 4,
  },

  // CARD
  cardContainer: {
    marginBottom: 20,
    borderRadius: 24,
    // Shadow
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: THEME.cardBg,
  },
  cardGradient: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    overflow: 'hidden',
  },
  watermarkContainer: {
    position: 'absolute',
    right: -10,
    top: -10,
    transform: [{ rotate: '-10deg' }],
    zIndex: 0,
  },
  
  // CARD HEADER
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    zIndex: 1,
  },
  titleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF5E6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: THEME.text,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  
  // ACTIONS
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // DIVIDER
  separator: { 
    height: 1, 
    backgroundColor: THEME.divider, 
    marginBottom: 16,
    width: '100%',
  },

  // CONTENT
  contentContainer: {
    zIndex: 1,
  },
  quoteText: {
    fontSize: 19, // Good reading size
    color: THEME.text,
    lineHeight: 28,
    fontFamily: 'System', // Default system font works well, or custom if available
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  
  // REFERENCE
  referenceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  dash: {
    width: 20,
    height: 1,
    backgroundColor: THEME.primary,
    marginRight: 8,
  },
  referenceText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.textLight,
    fontStyle: 'italic',
  },
  emptyText: {
    fontStyle: 'italic',
    color: THEME.textLight,
    textAlign: 'center',
    marginTop: 10,
  },
});