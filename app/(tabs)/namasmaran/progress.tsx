import { useSessions } from '@/context/SessionContext';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  gradientStart: '#FEDCBA',
  gradientEnd: '#FFB88D',
};

const formatTime = (timeInSeconds: number) => {
    if (timeInSeconds === 0) return '00:00:00';
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const pad = (num: number) => (num < 10 ? `0${num}` : num);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export default function ProgressScreen() {
  const { dailyTotals, loading } = useSessions();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const markedDates = useMemo(() => {
    const marks: MarkedDates = {};
    dailyTotals.forEach(session => {
      marks[session.date] = { marked: true, dotColor: THEME.accent };
    });
    if (selectedDate) {
      marks[selectedDate] = {
        ...marks[selectedDate],
        selected: true,
        selectedColor: THEME.gradientEnd,
        selectedTextColor: THEME.white,
      };
    }
    return marks;
  }, [dailyTotals, selectedDate]);

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const selectedDayTotal = dailyTotals.find(d => d.date === selectedDate)?.totalDuration ?? 0;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Your Progress</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: THEME.background,
          calendarBackground: THEME.background,
          textSectionTitleColor: THEME.lightText,
          todayTextColor: THEME.accent,
          dayTextColor: THEME.text,
          dotColor: THEME.accent,
          arrowColor: THEME.accent,
          monthTextColor: THEME.text,
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
        }}
        style={styles.calendar}
      />
      
      {loading ? (
        <ActivityIndicator size="large" color={THEME.primary} style={{ marginTop: 20 }} />
      ) : (
        <View style={styles.totalContainer}>
            <LinearGradient
                colors={[THEME.gradientStart, THEME.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dailyTotalCard}
            >
                <Text style={styles.dailyTotalText}>Nema</Text>
                <Text style={styles.dailyTotalTimeText}>{formatTime(selectedDayTotal)}</Text>
            </LinearGradient>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 15, textAlign:'center'},
  // Updated calendar style - removed card properties
  calendar: { 
    marginBottom: 20,
  },
  totalContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  dailyTotalCard: {
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dailyTotalText: {
    fontSize: 16,
    color: THEME.white,
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.9,
  },
  dailyTotalTimeText: {
    fontSize: 32,
    color: THEME.white,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
    marginTop: 8,
  },
});