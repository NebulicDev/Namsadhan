// app/tabs/namasmaran/timer.tsx
import CustomAlert from '@/components/CustomAlert';
import { useSessions } from '@/context/SessionContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Pause, Play, RotateCcw, StopCircle, Sun } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFB88D',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  success: '#FFB88D',
  card: '#FFFFFF',
  gradientStart: '#FEDCBA',
  gradientEnd: '#FFB88D',
  disabled: '#EAE3DA',
  shadow: 'rgba(93, 64, 55, 0.2)',
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export default function TimerScreen() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { addSession, dailyTotals } = useSessions();
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const handleStartPause = () => setIsActive(!isActive);

  const handleStop = () => {
    if (time > 0) {
      const today = new Date().toISOString().split('T')[0];
      addSession({ date: today, duration: time });
      setAlertVisible(true);
    }
    setIsActive(false);
  };

  const handleReset = () => {
    if (time === 0 && !isActive) return;
    Alert.alert('Reset Timer', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reset',
        onPress: () => {
          setIsActive(false);
          setTime(0);
        },
        style: 'destructive',
      },
    ]);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    setTime(0);
  };

  const today = new Date().toISOString().split('T')[0];
  const todayTotal = dailyTotals.find((d) => d.date === today)?.totalDuration ?? 0;
  const isTimerIdle = time === 0 && !isActive;

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* The heading is here, at the top */}
      <Text style={styles.title}>Namasmaran</Text>
      
      <View style={styles.contentContainer}>
        {/* Top Half: Timer */}
        <View style={styles.cardContainer}>
          <View style={styles.timerCard}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                style={[styles.controlButton, isTimerIdle && styles.disabledButton]}
                onPress={handleReset}
                disabled={isTimerIdle}
              >
                <RotateCcw size={28} color={isTimerIdle ? THEME.lightText : THEME.text} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.startPauseButton, { backgroundColor: isActive ? THEME.accent : THEME.success }]}
                onPress={handleStartPause}
              >
                {isActive ? (
                  <Pause size={32} color={THEME.white} />
                ) : (
                  <Play size={32} color={THEME.white} style={{ marginLeft: 4 }} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.controlButton, isTimerIdle && styles.disabledButton]}
                onPress={handleStop}
                disabled={isTimerIdle}
              >
                <StopCircle size={28} color={isTimerIdle ? THEME.lightText : THEME.text} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom Half: Daily Total */}
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={[THEME.gradientStart, THEME.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.dailyTotalCard}
          >
            <View style={styles.dailyTotalIcon}>
              <Sun size={24} color={THEME.white} />
            </View>
            <Text style={styles.dailyTotalText}>Today you've meditated on the divine name for</Text>
            <Text style={styles.dailyTotalTimeText}>{formatTime(todayTotal)}</Text>
          </LinearGradient>
        </View>
      </View>

      <CustomAlert
        visible={isAlertVisible}
        title="Session Saved!"
        message={`You have meditated for ${formatTime(time)}.`}
        onClose={handleAlertClose}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  timerCard: {
    backgroundColor: THEME.card,
    borderRadius: 32,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: THEME.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  timerText: {
    fontSize: 64,
    fontWeight: '300',
    color: THEME.text,
    fontVariant: ['tabular-nums'],
    marginBottom: 30,
    letterSpacing: 1.5,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  startPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  controlButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F0E9',
  },
  disabledButton: {
    backgroundColor: THEME.disabled,
  },
  dailyTotalCard: {
    borderRadius: 32,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    shadowColor: THEME.gradientEnd,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    marginTop: 20,
  },
  dailyTotalIcon: {
    position: 'absolute',
    top: -15,
    backgroundColor: THEME.accent,
    borderRadius: 15,
    padding: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  dailyTotalText: {
    fontSize: 18,
    color: THEME.white,
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.9,
    marginTop: 20,
  },
  dailyTotalTimeText: {
    fontSize: 42,
    color: THEME.white,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
    marginTop: 10,
    letterSpacing: 1,
  },
});