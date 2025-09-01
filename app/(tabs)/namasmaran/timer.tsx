// app/tabs/namasmaran/timer.tsx
import CustomAlert from '@/components/CustomAlert'; // 1. Import the new component
import { useSessions } from '@/context/SessionContext';
import { Pause, Play, RotateCcw, StopCircle } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  white: '#FFFFFF',
  success: '#5cb85c',
  card: '#FFFFFF',
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
  const { addSession } = useSessions();
  
  // 2. Add state to control the custom alert's visibility
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
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

  const handleStartPause = () => setIsActive(!isActive);

  const handleStop = () => {
    if (time > 0) {
      const today = new Date();
      const dateString = today.toISOString().split('T')[0];
      addSession({ date: dateString, duration: time });
      // 3. Show our custom alert instead of the basic one
      setAlertVisible(true);
    }
    setIsActive(false);
    // Note: We reset the time when the user closes the alert
  };

  const handleReset = () => {
    if (time === 0 && !isActive) return;
    Alert.alert("Reset Timer", "Are you sure?",
      [{ text: "Cancel", style: "cancel" }, {
        text: "Reset",
        onPress: () => {
          setIsActive(false);
          setTime(0);
        },
        style: "destructive",
      }]
    );
  };
  
  // 4. Function to handle closing the alert and resetting the timer
  const handleAlertClose = () => {
    setAlertVisible(false);
    setTime(0);
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Namasmaran</Text>
      <View style={styles.timerCard}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={[styles.controlButton, time === 0 && !isActive && styles.disabledButton]} onPress={handleReset} disabled={time === 0 && !isActive}>
            <RotateCcw size={24} color={THEME.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.startPauseButton, { backgroundColor: isActive ? THEME.accent : THEME.success }]} onPress={handleStartPause}>
            {isActive ? <Pause size={28} color={THEME.white} /> : <Play size={28} color={THEME.white} style={{ marginLeft: 3 }} />}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.controlButton, time === 0 && !isActive && styles.disabledButton]} onPress={handleStop} disabled={time === 0 && !isActive}>
            <StopCircle size={24} color={THEME.text} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* 5. Add the CustomAlert component to our screen */}
      <CustomAlert 
        visible={isAlertVisible}
        title="Session Complete!"
        message={`You have meditated for ${formatTime(time)}.`}
        onClose={handleAlertClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background, paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text, marginBottom: 30, textAlign: 'center' },
  timerCard: { backgroundColor: THEME.card, borderRadius: 20, padding: 25, alignItems: 'center', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  timerText: { fontSize: 64, fontWeight: '300', color: THEME.text, fontVariant: ['tabular-nums'], marginBottom: 25 },
  controlsContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around' },
  startPauseButton: { width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center' },
  controlButton: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: THEME.background, borderColor: THEME.primary, borderWidth: 1.5 },
  disabledButton: { opacity: 0.5 },
});