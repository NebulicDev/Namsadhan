// app/_layout.tsx
import { Stack } from 'expo-router';
import { initializeSslPinning } from 'react-native-ssl-public-key-pinning';
import { AudioProvider } from '../context/AudioContext';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from '../context/SessionContext';
import logger from '../utils/logger';

// --- UPDATED INITIALIZATION LOGIC ---
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
  logger.log('SSL Pinning successfully initialized.'); // Use logger
})
.catch((error) => {
  logger.error('SSL Pinning initialization failed:', error); // Use logger
});
// --- END OF UPDATED LOGIC ---


export default function RootLayout() {
  return (
    <AudioProvider>
      <AuthProvider>
        <SessionProvider> 
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
        </SessionProvider>
      </AuthProvider>
    </AudioProvider>
  );
}