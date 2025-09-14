// app/(tabs)/index.tsx
import { useAuth } from '@/context/AuthContext';
import { useSessions } from '@/context/SessionContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { LogOut, Settings as SettingsIcon, Sun, User } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  card: '#FFFFFF',
  error: '#D32F2F',
  lightText: '#A1887F',
  accent: '#FFB88D',
  gradientStart: '#FEDCBA',
  gradientEnd: '#FFB88D',
  selected: '#5D4037',
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
};

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Using logout from AuthContext
  const { dailyTotals, loading } = useSessions();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: logout }
    ]);
  };

  const markedDates = useMemo(() => {
    const markings: { [key: string]: any } = {};
    dailyTotals.forEach(session => {
      markings[session.date] = {
        marked: true,
        dotColor: THEME.accent,
      };
    });
    // Apply selected styling
    markings[selectedDate] = {
      ...markings[selectedDate],
      selected: true,
      selectedColor: THEME.selected,
      disableTouchEvent: true,
    };
    return markings;
  }, [dailyTotals, selectedDate]);

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const selectedDayTotal = dailyTotals.find(d => d.date === selectedDate)?.totalDuration ?? 0;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* --- EXISTING PROFILE HEADER --- */}
        <View style={[styles.profileHeader, { paddingTop: insets.top + 20 }]}>
          <View style={styles.avatar}>
            <User size={40} color={THEME.primary} />
          </View>
          <Text style={styles.userName}>{user?.displayName || user?.email || 'User'}</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push('/(tabs)/settings/settings-page')}
              accessibilityLabel="Open Settings"
            >
              <SettingsIcon size={26} color={THEME.text} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleSignOut}
              accessibilityLabel="Sign Out"
            >
              <LogOut size={26} color={THEME.error} />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- NEWLY ADDED PROGRESS VIEW --- */}
        <View style={styles.progressContainer}>
          {loading ? (
            <ActivityIndicator style={{marginTop: 40}} size="large" color={THEME.accent} />
          ) : (
            <>
              <Calendar
                current={selectedDate}
                onDayPress={onDayPress}
                markedDates={markedDates}
                style={styles.calendar}
                theme={{
                  calendarBackground: 'transparent', // Transparent background
                  backgroundColor: 'transparent',
                  textSectionTitleColor: THEME.primary,
                  selectedDayBackgroundColor: THEME.selected,
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: THEME.accent,
                  dayTextColor: THEME.text,
                  textDisabledColor: '#d9e1e8',
                  arrowColor: THEME.primary,
                  monthTextColor: THEME.text,
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 14,
                }}
              />
              <LinearGradient
                colors={[THEME.gradientStart, THEME.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dailyTotalCard}
              >
                <View style={styles.dailyTotalIcon}>
                  <Sun size={20} color='white' />
                </View>
                <Text style={styles.dailyTotalText}>
                  Meditation for {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </Text>
                <Text style={styles.dailyTotalTimeText}>{formatTime(selectedDayTotal)}</Text>
              </LinearGradient>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: THEME.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    backgroundColor: THEME.card,
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  // --- New Styles ---
  progressContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  calendar: {
    marginBottom: 20,
  },
  dailyTotalCard: {
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: THEME.gradientEnd,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  dailyTotalIcon: {
    position: 'absolute',
    top: -15,
    backgroundColor: THEME.accent,
    borderRadius: 15,
    padding: 8,
    elevation: 10,
  },
  dailyTotalText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.9,
    marginTop: 10,
  },
  dailyTotalTimeText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
    marginTop: 8,
  },
});