// app/(tabs)/settings/index.tsx
import { useAuth } from '@/context/AuthContext';
import { useSessions } from '@/context/SessionContext';
import { authInstance } from '@/firebaseConfig';
import { signOut } from '@react-native-firebase/auth';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  Calendar as CalendarIcon,
  Clock,
  LogOut,
  Settings as SettingsIcon,
  Zap
} from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import logger from '../../../utils/logger';

// --- THEME ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  accent: '#FFB74D',
  gold: '#C5A059',
  error: '#E53935',
  activePill: '#5D4037',
  iconBg: '#FFF5E1',
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
};

// --- HELPER: STREAK CALCULATION ---
const calculateCurrentStreak = (sessions: { date: string }[]) => {
  if (!sessions || sessions.length === 0) return 0;
  const sessionDates = new Set(sessions.map(s => s.date));
  const toIso = (d: Date) => d.toISOString().split('T')[0];
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const todayStr = toIso(today);
  const yesterdayStr = toIso(yesterday);

  let currentDate: Date;
  if (sessionDates.has(todayStr)) {
    currentDate = today;
  } else if (sessionDates.has(yesterdayStr)) {
    currentDate = yesterday;
  } else {
    return 0;
  }

  let streak = 0;
  while (sessionDates.has(toIso(currentDate))) {
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
  }
  return streak;
};

// --- COMPONENT: STAT ITEM (Compact) ---
const StatItem = ({ icon: Icon, value, label, color = THEME.primary }: { icon: any, value: string, label: string, color?: string }) => (
  <View style={styles.statItem}>
    <View style={styles.statIconWrapper}>
      <Icon size={18} color={color} />
    </View>
    <View>
      <View style={{ alignItems: 'center' }}>
          <Text style={styles.statValue}>{value}</Text>
          <Text style={styles.statLabel}>{label}</Text>
      </View>
      
    </View>
  </View>
);

export default function ProfileScreen() {
  const { user } = useAuth();
  const { dailyTotals, loading } = useSessions();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSignOut = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: async () => {
          try {
            await signOut(authInstance);
            router.replace('/(auth)/login');
          } catch (err) {
            logger.error("Logout error:", err);
            Alert.alert("Error", "Failed to logout. Please try again.");
          }
        }
      }
    ]);
  };

  const handleSettings = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/settings/settings-page');
  };

  const markedDates = useMemo(() => {
    const markings: { [key: string]: any } = {};
    dailyTotals.forEach(session => {
      markings[session.date] = { marked: true, dotColor: THEME.accent };
    });
    if (markings[selectedDate]) {
      markings[selectedDate] = { 
        ...markings[selectedDate], 
        selected: true, 
        selectedColor: THEME.text, 
        selectedTextColor: '#FFF' 
      };
    } else {
      markings[selectedDate] = { 
        selected: true, 
        selectedColor: THEME.text, 
        selectedTextColor: '#FFF' 
      };
    }
    return markings;
  }, [dailyTotals, selectedDate]);

  const onDayPress = (day: DateData) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedDate(day.dateString);
  };

  const selectedDayTotal = dailyTotals.find(d => d.date === selectedDate)?.totalDuration ?? 0;
  const totalSadhanaSeconds = useMemo(() => dailyTotals.reduce((acc, curr) => acc + curr.totalDuration, 0), [dailyTotals]);
  const currentStreak = useMemo(() => calculateCurrentStreak(dailyTotals), [dailyTotals]);
  const firstName = user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'User';

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      <ScrollView 
        contentContainerStyle={[
            styles.scrollContent, 
            { paddingTop: insets.top + 10 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Sadhak,</Text>
            <Text style={styles.userName}>{firstName}</Text>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity onPress={handleSettings} style={styles.iconButton}>
              <SettingsIcon size={22} color={THEME.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={[styles.iconButton, { marginLeft: 12 }]}>
              <LogOut size={22} color={THEME.error} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. COMPACT STATS ROW */}
        <LinearGradient
            colors={['#FFFFFF', '#FFF8E1']}
            style={styles.statsCard}
        >
            <StatItem 
                icon={Clock} 
                value={formatTime(totalSadhanaSeconds)} 
                label="Total Time" 
            />
            <View style={styles.verticalDivider} />
            <StatItem 
                icon={Zap} 
                // CHANGED: Logic to handle singular vs plural
                value={`${currentStreak} ${currentStreak === 1 ? 'Day' : 'Days'}`} 
                label="Streak"
                color={THEME.accent}
            />
            <View style={styles.verticalDivider} />
            <StatItem 
                icon={CalendarIcon} 
                value={`${dailyTotals.length}`} 
                label="Active Days" 
            />
        </LinearGradient>

        {/* 3. PROGRESS SECTION */}
        <Text style={styles.sectionTitle}>Your Progress</Text>
        
        <View style={styles.calendarContainer}>
            {loading ? (
                <ActivityIndicator size="large" color={THEME.primary} style={{ padding: 40 }} />
            ) : (
                <>
                    <Calendar
                        current={selectedDate}
                        onDayPress={onDayPress}
                        markedDates={markedDates}
                        style={styles.calendar}
                        theme={{
                            calendarBackground: 'transparent',
                            backgroundColor: 'transparent',
                            textSectionTitleColor: THEME.textLight,
                            todayTextColor: THEME.accent,
                            dayTextColor: THEME.text,
                            textDisabledColor: '#E0E0E0',
                            dotColor: THEME.accent,
                            selectedDotColor: '#FFFFFF',
                            arrowColor: THEME.text,
                            monthTextColor: THEME.text,
                            textDayFontWeight: '500',
                            textMonthFontWeight: '700',
                            textDayHeaderFontWeight: '600',
                            textDayFontSize: 14,
                        }}
                    />
                    
                    {/* DAILY DETAIL CARD */}
                    <LinearGradient
                        colors={['#FFFFFF', '#FFF8E1']} 
                        style={styles.dailyDetailCard}
                    >
                        <View style={styles.dailyRow}>
                            <View>
                                <Text style={styles.dailyLabel}>
                                    {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                                </Text>
                                <Text style={styles.dailySubLabel}>Meditation (नेम) Time</Text>
                            </View>
                            <Text style={styles.dailyValue}>{formatTime(selectedDayTotal)}</Text>
                        </View>
                    </LinearGradient>
                </>
            )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 15,
    color: THEME.textLight,
    marginBottom: 2,
  },
  userName: {
    fontSize: 26,
    fontWeight: '800',
    color: THEME.text,
    letterSpacing: -0.5,
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  // STATS CARD (Compact & Premium)
  statsCard: {
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    // Premium Shadow
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: THEME.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: THEME.text,
  },
  statLabel: {
    fontSize: 10,
    color: THEME.textLight,
    fontWeight: '600',
  },
  verticalDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#F0EBE4',
  },

  // SECTION TITLE (Centered)
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 16,
    textAlign: 'center',
  },

  // CALENDAR
  calendarContainer: {
    backgroundColor: THEME.cardBg,
    borderRadius: 24,
    padding: 16,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  calendar: {
    marginBottom: 16,
  },
  
  // DAILY DETAIL
  dailyDetailCard: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F5E6D3',
  },
  dailyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dailyLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 2,
  },
  dailySubLabel: {
    fontSize: 12,
    color: THEME.textLight,
  },
  dailyValue: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME.activePill,
    fontVariant: ['tabular-nums'],
  },
});