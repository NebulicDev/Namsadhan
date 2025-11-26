// app/_layout.tsx
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { initializeSslPinning } from 'react-native-ssl-public-key-pinning';
import { AudioProvider } from '../context/AudioContext';
import { AuthProvider } from '../context/AuthContext';
import { DownloadProvider } from '../context/DownloadContext';
import { SessionProvider } from '../context/SessionContext';
import { registerForPushNotificationsAsync } from '../services/NotificationService';
import logger from '../utils/logger';

// SSL Pinning Initialization
initializeSslPinning({
  'firestore.googleapis.com': {
    includeSubdomains: true,
    publicKeyHashes: [
      '8i3miacE5BOa7yeLJQmWHsNF9iPgAzvg/TRFxnio/LU=',
    ],
  },
  'identitytoolkit.googleapis.com': {
    includeSubdomains: true,
    publicKeyHashes: [
      'Lvc5Yh+wmHt8+/uOK7S5CYVKZ1eHcHajfivcuw5C8cs=',
    ],
  },
})
.then(() => {
  logger.log('SSL Pinning successfully initialized.');
})
.catch((error) => {
  logger.error('SSL Pinning initialization failed:', error);
});

function RootLayoutNav() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Return early if not on Android
    if (Platform.OS !== 'android') {
      return;
    }

    // Configure the navigation bar
    const configureNavigationBar = async () => {
      try {
        // CHANGED: Removed setBackgroundColorAsync('#FFFFFF') to fix the "edge-to-edge" warning.
        // Your app.config.js already sets the bar to transparent/absolute, which is correct for edge-to-edge.
        
        // Keep the buttons dark so they are visible
        await NavigationBar.setButtonStyleAsync('dark'); 
      } catch (error) {
        logger.error('Failed to configure navigation bar:', error);
      }
    };

    configureNavigationBar();
  }, []);

  return (
    // Use a View to apply bottom padding based on the safe area insets
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="liveDarshan" options={{ headerShown: false }} />
        <Stack.Screen name="bhajans" options={{ headerShown: false }} />
        <Stack.Screen name="pravachans" options={{ headerShown: false }} />
        <Stack.Screen name="dasbodh" options={{ headerShown: false }} />
        <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
        <Stack.Screen name="nityaNemavali" options={{ headerShown: false }} />
        <Stack.Screen name="nemavaliVivaran" options={{ headerShown: false  }} />
        <Stack.Screen name="parmarthMandir" options={{ headerShown: false }} />
        <Stack.Screen name="glossary" options={{ headerShown: false }} />
        <Stack.Screen name="parmarthSopan" options={{ headerShown: false }} />

      </Stack>
    </View>
  );
}

export default function RootLayout() {
  // This hook registers the notification channel when the app loads.
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      // You might want to send this token to your server
      console.log('Expo Push Token:', token);
    }).catch(error => {
      logger.error('Failed to register for push notifications:', error);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <AudioProvider>
        <AuthProvider>
          <SessionProvider>
            <DownloadProvider>
              <RootLayoutNav />
            </DownloadProvider>
          </SessionProvider>
        </AuthProvider>
      </AudioProvider>
    </SafeAreaProvider>
  );
}