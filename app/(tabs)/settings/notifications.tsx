import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Check, ChevronLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    cancelAllScheduledNotifications,
    scheduleIntervalNotification,
} from '../../../services/NotificationService';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
};

const FREQUENCY_OPTIONS = [
  { label: 'Every hour', value: 1 },
  { label: 'Every 3 hours', value: 3 },
  { label: 'Every 4 hours', value: 4 },
  { label: 'Every 6 hours', value: 6 },
  { label: 'Off', value: 0 },
];

const STORAGE_KEY = 'notification_frequency';

export default function NotificationSettingsPage() {
  const [selectedFrequency, setSelectedFrequency] = useState<number>(3); // default 3 hrs
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const loadFrequency = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
        const value = storedValue ? Number(storedValue) : 3;
        setSelectedFrequency(value);
        if (!storedValue) {
          await AsyncStorage.setItem(STORAGE_KEY, String(value));
        }
      } catch (e) {
        console.warn('Failed to load notification frequency', e);
        setSelectedFrequency(3);
      } finally {
        setIsLoading(false);
      }
    };
    loadFrequency();
  }, []);

  const handleSelectFrequency = async (hours: number) => {
    try {
      setSelectedFrequency(hours);
      await AsyncStorage.setItem(STORAGE_KEY, String(hours));

      if (hours > 0) {
        await scheduleIntervalNotification(hours);
        Alert.alert(
          'Reminders Set',
          `You will now receive a reminder every ${hours} ${hours === 1 ? 'hour' : 'hours'}.`
        );
      } else {
        await cancelAllScheduledNotifications();
        Alert.alert('Reminders Off', 'All scheduled reminders have been canceled.');
      }
    } catch (e) {
      Alert.alert('Error', 'Could not update your notification setting.');
      console.warn('Error setting frequency:', e);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.screenContainer, { paddingTop: insets.top, justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={THEME.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.screenContainer, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.subtitle}>
          How often you would like get reminded.
        </Text>
        <View style={styles.card}>
          {FREQUENCY_OPTIONS.map((option, index) => (
            <View key={option.value}>
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => handleSelectFrequency(option.value)}
              >
                <Text style={styles.itemText}>{option.label}</Text>
                {selectedFrequency === option.value && <Check size={24} color={THEME.primary} />}
              </TouchableOpacity>
              {index < FREQUENCY_OPTIONS.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EAE4',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
  },
  backButton: {
    padding: 5,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.lightText,
    marginBottom: 20,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: THEME.card,
  },
  itemText: {
    fontSize: 17,
    color: THEME.text,
  },
  separator: {
    height: 1,
    backgroundColor: '#F0EAE4',
    marginHorizontal: 20,
  },
});
