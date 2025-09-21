// app/_layout.tsx
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { initializeSslPinning } from 'react-native-ssl-public-key-pinning';
import { AudioProvider } from '../context/AudioContext';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from '../context/SessionContext';
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
        await NavigationBar.setBackgroundColorAsync('#FFFFFF'); // Set background to white
        await NavigationBar.setButtonStyleAsync('dark'); // Set buttons to dark
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
        <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
        <Stack.Screen name="nityaNemavali" options={{ headerShown: false }} />
        <Stack.Screen name="parmarthMandir" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AudioProvider>
        <AuthProvider>
          <SessionProvider>
            <RootLayoutNav />
          </SessionProvider>
        </AuthProvider>
      </AudioProvider>
    </SafeAreaProvider>
  );
}