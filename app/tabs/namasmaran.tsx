import { Pause, Play, RotateCcw } from 'lucide-react-native';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  success: '#5cb85c',
  danger: '#d9534f',
  card: '#FFFFFF',
};

// --- Helper function to format time ---
const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export default function NamasmaranScreen() {
  const [time, setTime] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [markedDates, setMarkedDates] = React.useState<MarkedDates>({});
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const handleStartPause = () => {
    if (isActive && time > 0) {
      const today = new Date();
      const dateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

      // Add a new marked date to our state
      const newMarkedDates = {
        ...markedDates,
        [dateString]: { marked: true, dotColor: THEME.accent },
      };
      setMarkedDates(newMarkedDates);

      Alert.alert("Session Complete!", `You meditated for ${formatTime(time)}.`);
      // We don't reset the timer here, user can continue or reset manually
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    if (time === 0) return;
    setIsActive(false);
    setTime(0);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        {/* <Text style={styles.title}>Namasmaran</Text> */}
      </View>

      <View style={styles.timerCard}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
        <View style={styles.controlsContainer}>
          <TouchableOpacity 
            style={[styles.controlButton, time === 0 && styles.disabledButton]} 
            onPress={handleReset}
            disabled={time === 0}
          >
            <RotateCcw size={24} color={THEME.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.startPauseButton, { backgroundColor: isActive ? THEME.danger : THEME.success }]}
            onPress={handleStartPause}
          >
            {isActive ? <Pause size={28} color={THEME.white} /> : <Play size={28} color={THEME.white} style={{ marginLeft: 3 }}/>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Your Progress</Text>
        <Calendar
          markedDates={markedDates}
          theme={{
            backgroundColor: THEME.background,
            calendarBackground: THEME.background,
            textSectionTitleColor: THEME.lightText,
            selectedDayBackgroundColor: THEME.accent,
            selectedDayTextColor: THEME.white,
            todayTextColor: THEME.accent,
            dayTextColor: THEME.text,
            textDisabledColor: '#d9e1e8',
            dotColor: THEME.accent,
            selectedDotColor: THEME.white,
            arrowColor: THEME.accent,
            monthTextColor: THEME.text,
            indicatorColor: THEME.text,
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 16,
          }}
          style={styles.calendar}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 40,
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
  timerCard: {
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  timerText: {
    fontSize: 50,
    fontWeight: '300',
    color: THEME.text,
    fontVariant: ['tabular-nums'],
    marginBottom: 25,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  startPauseButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.background,
    borderColor: THEME.primary,
    borderWidth: 1.5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  calendarContainer: {
    flex: 1,
    marginTop: 30,
  },
  calendarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
    paddingLeft: 10,
  },
  calendar: {
    borderRadius: 10,
  }
});
