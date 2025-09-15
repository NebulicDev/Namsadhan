import { useAuth } from '@/context/AuthContext';
import { useSessions } from '@/context/SessionContext';
import { authInstance } from '@/firebaseConfig';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { LogOut, Settings as SettingsIcon } from 'lucide-react-native';
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
  selected: '#FFB88D',
  icon: '#5D4037',
  disabled: '#D9D9D9',
  divider: '#F0EBE4'
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
};

const StatCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <View style={styles.statCard}>
    {icon}
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export default function ProfileScreen() {
  const { user } = useAuth();
  const { dailyTotals, loading } = useSessions();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // ✅ FIX: use Firebase logout directly (not from AuthContext)
  const handleSignOut = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: async () => {
          try {
            await authInstance.signOut();
            router.replace('/(auth)/login'); // redirect to login
          } catch (err) {
            console.error("Logout error:", err);
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
      markings[selectedDate] = { ...markings[selectedDate], selected: true, selectedColor: THEME.selected, disableTouchEvent: true };
    } else {
      markings[selectedDate] = { selected: true, selectedColor: THEME.selected, disableTouchEvent: true };
    }
    return markings;
  }, [dailyTotals, selectedDate]);

  const onDayPress = (day: DateData) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedDate(day.dateString);
  };

  const selectedDayTotal = dailyTotals.find(d => d.date === selectedDate)?.totalDuration ?? 0;
  const totalSadhana = useMemo(() => dailyTotals.reduce((acc, curr) => acc + curr.totalDuration, 0), [dailyTotals]);
  const firstName = user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'User';

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top, paddingBottom: 30 }}>
        {/* --- HEADER --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Namaskar,</Text>
            <Text style={styles.userName}>{firstName}</Text>
          </View>

          {/* Settings + Logout icons side by side */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleSettings} style={styles.iconButton}>
              <SettingsIcon size={24} color={THEME.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={[styles.iconButton, { marginLeft: 10 }]}>
              <LogOut size={24} color={THEME.error} />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* --- STATS --- */}
        {/* <View style={styles.statsContainer}>
          <StatCard icon={<BarChart2 size={24} color={THEME.primary}/>} label="Total Sadhana" value={formatTime(totalSadhana)} />
          <StatCard icon={<CalendarIcon size={24} color={THEME.primary}/>} label="Current Streak" value="12 days" />
          <StatCard icon={<Award size={24} color={THEME.primary}/>} label="Longest Streak" value="45 days" />
        </View> */}
        
        

        {/* --- CALENDAR & PROGRESS --- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Progress</Text>
          <View style={styles.divider} />
          {loading ? (
            <ActivityIndicator style={{ marginVertical: 40 }} size="large" color={THEME.accent} />
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
                  textSectionTitleColor: THEME.primary,
                  selectedDayBackgroundColor: THEME.selected,
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: THEME.accent,
                  dayTextColor: THEME.text,
                  textDisabledColor: THEME.disabled,
                  arrowColor: THEME.primary,
                  monthTextColor: THEME.text,
                  textDayFontWeight: '400',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '500',
                }}
              />
              <LinearGradient
                colors={[THEME.gradientStart, THEME.gradientEnd]}
                style={styles.dailyTotalCard}
              >
                <Text style={styles.dailyTotalText}>
                  Sadhana on {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 20,
    color: THEME.lightText,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.text,
  },
  iconButton: {
    padding: 12,
    backgroundColor: THEME.card,
    borderRadius: 30,
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.divider,
    width: '100%',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: THEME.lightText,
    marginTop: 2,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 20,
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  calendar: {
    marginBottom: 10,
  },
  dailyTotalCard: {
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dailyTotalText: {
    fontSize: 16,
    color: THEME.card,
    fontWeight: '500',
  },
  dailyTotalTimeText: {
    fontSize: 28,
    color: THEME.card,
    fontWeight: 'bold',
    marginTop: 5,
  },
});