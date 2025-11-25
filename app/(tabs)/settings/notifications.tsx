import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  cancelAllScheduledNotifications,
  initializeNotifications,
  scheduleIntervalNotification,
} from '../../../services/NotificationService';

const THEME = {
  background: '#FFF8F0', // Creamy off-white
  text: '#4A3B32',       // Deep brown
  subtext: '#8D7B68',    // Soft brown
  cardBg: '#FFFFFF',     // Pure white
  primary: '#D2B48C',    // Tan
  accent: '#E09F7D',     // Warm peach
  border: '#F0EAE4',     // Very light divider
  success: '#81C784',    // Soft Green
  inactive: '#D7CCC8',   // Grey-brown
};

const FREQUENCY_OPTIONS = [
  { label: 'Every hour', value: 1, desc: 'Intensive' },
  { label: 'Every 3 hours', value: 3, desc: 'Regular pauses' },
  { label: 'Every 4 hours', value: 4, desc: 'Balanced routine' },
  { label: 'Every 6 hours', value: 6, desc: 'Morning, Noon, Evening' },
  { label: 'Turn Off', value: 0, desc: 'No reminders' },
];

const STORAGE_KEY = 'notification_frequency';

export default function NotificationSettingsPage() {
  const [selectedFrequency, setSelectedFrequency] = useState<number>(3);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const loadData = async () => {
      try {
        await initializeNotifications();
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
        const value = storedValue ? Number(storedValue) : 3;
        setSelectedFrequency(value);
        if (!storedValue) await AsyncStorage.setItem(STORAGE_KEY, String(value));
      } catch (e) {
        console.warn('Failed to load frequency', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSelectFrequency = async (hours: number) => {
    Haptics.selectionAsync(); // Tactile feedback
    setIsLoading(true);
    try {
      if (hours > 0) {
        await scheduleIntervalNotification(hours);
        setSelectedFrequency(hours);
        await AsyncStorage.setItem(STORAGE_KEY, String(hours));
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        await cancelAllScheduledNotifications();
        setSelectedFrequency(0);
        await AsyncStorage.setItem(STORAGE_KEY, '0');
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch (e: any) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      if (e.message === 'Permission not granted') {
        Alert.alert('Permission Required', 'Please enable notifications in settings.');
      } else {
        Alert.alert('Error', 'Could not update setting.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.screenContainer, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={THEME.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header - Aligned Left, Standard Back Button */}
      <View style={[styles.header, { marginTop: Platform.OS === 'android' ? insets.top + 10 : 0 }]}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ChevronLeft size={30} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Status Banner */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)}>
          <View style={styles.statusCard}>
            <View style={styles.statusTextContainer}>
              <Text style={styles.statusLabel}>Current Status</Text>
              <Text style={[
                styles.statusValue, 
                { color: selectedFrequency > 0 ? THEME.text : THEME.subtext }
              ]}>
                {selectedFrequency > 0 
                  ? `Active • Every ${selectedFrequency} ${selectedFrequency === 1 ? 'hour' : 'hours'}` 
                  : 'Reminders Disabled'}
              </Text>
            </View>
            <View style={[
              styles.statusIndicator, 
              { backgroundColor: selectedFrequency > 0 ? THEME.success : THEME.inactive }
            ]} />
          </View>
        </Animated.View>

        <Text style={styles.sectionTitle}>FREQUENCY</Text>

        {/* Options Card */}
        <Animated.View 
          style={styles.optionsCard}
          entering={FadeInUp.delay(300).duration(600)}
        >
          {FREQUENCY_OPTIONS.map((option, index) => {
            const isSelected = selectedFrequency === option.value;
            const isLast = index === FREQUENCY_OPTIONS.length - 1;

            // Using View instead of Fragment to avoid potential rendering issues
            return (
              <View key={option.value}>
                <TouchableOpacity
                  style={[styles.optionRow, isSelected ? styles.optionRowSelected : null]}
                  onPress={() => handleSelectFrequency(option.value)}
                  activeOpacity={0.7}
                >
                  <View style={styles.textContainer}>
                    <Text style={[styles.optionLabel, isSelected ? styles.optionLabelSelected : null]}>
                      {option.label}
                    </Text>
                    <Text style={styles.optionDesc}>{option.desc}</Text>
                  </View>

                  {/* Custom Radio Button */}
                  <View style={[styles.radioOuter, isSelected ? { borderColor: THEME.primary } : null]}>
                    {isSelected ? <View style={styles.radioInner} /> : null}
                  </View>
                </TouchableOpacity>
                
                {/* Explicit Ternary to prevent loose boolean/strings */}
                {!isLast ? <View style={styles.divider} /> : null}
              </View>
            );
          })}
        </Animated.View>

        <Text style={styles.footerText}>
          These reminders serve to gently guide your awareness back towards the remembrance of the Divine Name
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 15,
    backgroundColor: THEME.background,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: THEME.text,
    marginLeft: 8,
  },
  backButton: {
    padding: 4,
    // Standardizing back button (removed card bg/shadow)
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  
  /* Status Banner */
  statusCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.cardBg,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statusTextContainer: {
    flex: 1,
  },
  statusLabel: {
    fontSize: 12,
    color: THEME.subtext,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    fontWeight: '600',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 15,
  },

  /* Section Header */
  sectionTitle: {
    fontSize: 13,
    color: THEME.subtext,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 12,
    marginLeft: 10,
  },

  /* Options Card */
  optionsCard: {
    backgroundColor: THEME.cardBg,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  optionRowSelected: {
    backgroundColor: '#f5f1eeff',
  },
  textContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 17,
    color: THEME.text,
    fontWeight: '500',
    marginBottom: 2,
  },
  optionLabelSelected: {
    fontWeight: '700',
    color: THEME.text,
  },
  optionDesc: {
    fontSize: 13,
    color: THEME.subtext,
  },
  
  /* Radio Button Custom UI */
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEME.inactive,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: THEME.primary,
  },
  
  divider: {
    height: 1,
    backgroundColor: THEME.border,
    marginLeft: 20, 
    marginRight: 20,
  },
  
  footerText: {
    marginTop: 25,
    textAlign: 'center',
    color: THEME.subtext,
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 20,
    opacity: 0.8,
  },
});