import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// 1. Configure how notifications appear when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true, // Replaces shouldShowAlert
    shouldShowList: true,   // Replaces shouldShowAlert
  }),
});

/**
 * Ensures permissions are granted and Android channel is created.
 * Crucial for Local Notifications to work.
 */
export async function initializeNotifications() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Namsadhan Reminders',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: 'meditation_bell.mp3', // Make sure this file exists in android/app/src/main/res/raw/ for production builds
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      return false;
    }
    return true;
  }
  
  return true; // Simulators treated as true but might not show
}

/**
 * Getting the Push Token (Keep this if you use Firebase/Remote Push)
 */
export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  const hasPermission = await initializeNotifications();
  if (!hasPermission) return;

  let token;
  if (Device.isDevice) {
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    console.log('Must use physical device for Push Notifications');
  }
  return token;
}

/**
 * Schedules the recurring Namsadhan reminder.
 * @param hours Frequency in hours
 */
export async function scheduleIntervalNotification(hours: number) {
  // 1. Ensure system is ready (Channel + Permissions)
  const hasPermission = await initializeNotifications();
  if (!hasPermission) {
    throw new Error('Permission not granted');
  }

  // 2. Cancel old ones to prevent duplicates
  await Notifications.cancelAllScheduledNotificationsAsync();

  // 3. Schedule new one
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Time is slipping away",
      body: "Don't forget to meditate on the Divine Name",
      sound: 'meditation_bell.mp3',
      data: { url: '/namasmaran' }, // Optional: Link to open when tapped
    },
    trigger: {
      seconds: hours * 3600, // Converts hours to seconds
      repeats: true,         // Vital for recurring
    },
  });
}

export async function cancelAllScheduledNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}