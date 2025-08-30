// app/tabs/namasmaran/progress.tsx
import { useSessions } from '@/context/SessionContext';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  card: '#FFFFFF',
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
};

export default function ProgressScreen() {
  const { sessions } = useSessions();

  const markedDates = useMemo(() => {
    const marks: MarkedDates = {};
    sessions.forEach(session => {
      marks[session.date] = { marked: true, dotColor: THEME.accent };
    });
    return marks;
  }, [sessions]);

  const renderSessionItem = ({ item }: { item: { date: string, duration: number } }) => (
    <View style={styles.sessionItem}>
      <Text style={styles.sessionDate}>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
      <Text style={styles.sessionDuration}>{formatTime(item.duration)}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Your Progress</Text>
      <Calendar
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
      <FlatList
        data={sessions}
        renderItem={renderSessionItem}
        keyExtractor={(item, index) => `${item.date}-${index}`}
        ListHeaderComponent={<Text style={styles.sessionsTitle}>Recent Sessions</Text>}
        style={styles.sessionsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: THEME.text, marginBottom: 15 },
  calendar: { borderRadius: 10, marginBottom: 20 },
  sessionsTitle: { fontSize: 18, fontWeight: 'bold', color: THEME.text, marginBottom: 10 },
  sessionsList: { flex: 1 },
  sessionItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 15, backgroundColor: THEME.card, borderRadius: 10, marginBottom: 10 },
  sessionDate: { fontSize: 16, color: THEME.text },
  sessionDuration: { fontSize: 16, fontWeight: '600', color: THEME.primary },
});