// app/tabs/namasmaran/timer.tsx
import CustomAlert, { AlertType } from '@/components/CustomAlert';
import { useSessions } from '@/context/SessionContext';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { Pause, Play, RotateCcw, StopCircle } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  AppState,
  AppStateStatus,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFB88D',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  disabled: '#EAE3DA',
  shadow: 'rgba(93, 64, 55, 0.2)',
  divider: '#F0EBE4',
};

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const formatDescriptiveTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  return `${pad(hours)} h ${pad(minutes)} m ${pad(seconds)} s`;
};

export default function TimerScreen() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const { addSession, dailyTotals } = useSessions();
  const progressAnim = useRef(new Animated.Value(0)).current;

  // State for the custom alert
  const [alertInfo, setAlertInfo] = useState<{
    visible: boolean;
    title: string;
    message: string;
    type: AlertType;
    onConfirm?: () => void;
  }>({
    visible: false,
    title: '',
    message: '',
    type: 'success',
  });

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && isActive) {
        setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
    };
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      if (startTimeRef.current === 0) {
        startTimeRef.current = Date.now() - time * 1000;
      }
      intervalRef.current = setInterval(() => {
        const newTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setTime(newTime);
        progressAnim.setValue(newTime % 60);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startTimeRef.current = 0;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const handleStartPause = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (!isActive) {
      startTimeRef.current = Date.now() - time * 1000;
    }
    setIsActive(!isActive);
  };

  const handleStop = () => {
    if (time > 0) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const today = new Date().toISOString().split('T')[0];
      addSession({ date: today, duration: time });
      setAlertInfo({
        visible: true,
        title: 'Session Saved!',
        message: `Current session ${formatDescriptiveTime(time)}.`,
        type: 'success',
        onConfirm: () => {
          setAlertInfo({ ...alertInfo, visible: false });
          setTime(0);
          startTimeRef.current = 0;
        }
      });
    }
    setIsActive(false);
    progressAnim.setValue(0);
  };

  const handleResetPress = () => {
    if (time === 0 && !isActive) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setAlertInfo({
      visible: true,
      title: 'Reset Timer',
      message: 'Are you sure you want to reset? This action cannot be undone.',
      type: 'confirm',
      onConfirm: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        setIsActive(false);
        setTime(0);
        startTimeRef.current = 0;
        progressAnim.setValue(0);
        setAlertInfo({ ...alertInfo, visible: false });
      }
    });
  };

  const today = new Date().toISOString().split('T')[0];
  const todayTotal = dailyTotals.find((d) => d.date === today)?.totalDuration ?? 0;
  const isTimerIdle = time === 0 && !isActive;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <LinearGradient colors={['#FFF8F0', '#F8F0E6']} style={styles.gradient}>
        <View style={styles.header}>
          <Text style={styles.title}>Namasmaran</Text>
        </View>

        <View style={styles.timerContainer}>
          <CircularProgress
            size={260}
            width={12}
            fill={(time % 60) * (100 / 60)}
            tintColor={THEME.accent}
            backgroundColor="rgba(93, 64, 55, 0.1)"
            rotation={0}
            lineCap="round"
          >
            {() => (
              <View style={styles.timerContent}>
                <Text style={styles.timerText}>{formatTime(time)}</Text>
                {/* <Text style={styles.timerSubtitle}>CURRENT SESSION</Text> */}
              </View>
            )}
          </CircularProgress>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={[styles.controlButton, isTimerIdle && styles.disabledButton]}
              onPress={handleResetPress}
              disabled={isTimerIdle}
            >
              <RotateCcw size={28} color={isTimerIdle ? THEME.lightText : THEME.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.startPauseButton} onPress={handleStartPause}>
              {isActive ? <Pause size={32} color={THEME.white} /> : <Play size={32} color={THEME.white} style={{ marginLeft: 4 }} />}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlButton, isTimerIdle && styles.disabledButton]}
              onPress={handleStop}
              disabled={isTimerIdle}
            >
              <StopCircle size={28} color={isTimerIdle ? THEME.lightText : THEME.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.dailyTotalContainer}>
            <View style={styles.divider} />
            <Text style={styles.dailyTotalText}>
              Today you have meditated on the Divine Name for
            </Text>
            <View style={styles.divider} />
            <Text style={styles.dailyTotalTime}>{formatDescriptiveTime(todayTotal)}</Text>
          </View>
        </View>
      </LinearGradient>

      <CustomAlert
        visible={alertInfo.visible}
        title={alertInfo.title}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ ...alertInfo, visible: false })}
        onConfirm={alertInfo.onConfirm}
        confirmText={alertInfo.type === 'confirm' ? 'Reset' : 'OK'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    paddingTop: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
    textAlign: 'center',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  timerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 60,
    fontWeight: '300',
    color: THEME.text,
    fontVariant: ['tabular-nums'],
  },
  timerSubtitle: {
    fontSize: 12,
    color: THEME.lightText,
    letterSpacing: 2,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  startPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.accent,
    marginHorizontal: 20,
    elevation: 8,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  controlButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.white,
    elevation: 6,
    shadowColor: THEME.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  disabledButton: {
    backgroundColor: THEME.disabled,
    elevation: 0,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.divider,
    width: '100%',
  },
  dailyTotalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyTotalText: {
    fontSize: 16,
    color: THEME.lightText,
    textAlign: 'center',
    marginVertical: 15,
  },
  dailyTotalTime: {
    fontSize: 28,
    fontWeight: '600',
    color: THEME.text,
    fontVariant: ['tabular-nums'],
    marginTop: 10,
    letterSpacing: 1,
  },
});