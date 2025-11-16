import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: 'meditation_bell.mp3', // Important for Android custom sound
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
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    // Allowing for simulators to not throw an error
    console.log('Must use physical device for Push Notifications');
  }

  return token;
}

// NEW: Schedule repeating notifications by interval
export async function scheduleIntervalNotification(hours: number) {
  await Notifications.cancelAllScheduledNotificationsAsync(); // Clear existing notifications

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Time is slipping away",
      body: "Don't forget to meditate on the Divine Name",
      sound: 'meditation_bell.mp3', // Custom sound for both platforms
    },
    trigger: {
      seconds: hours * 3600, // Convert hours to seconds
      repeats: true,
    },
  });
}

export async function cancelAllScheduledNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}