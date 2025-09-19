// app/_layout.tsx
import { Stack } from 'expo-router';
import { initializeSslPinning } from 'react-native-ssl-public-key-pinning';
import { AudioProvider } from '../context/AudioContext';
import { AuthProvider } from '../context/AuthContext';
import { SessionProvider } from '../context/SessionContext'; // Ensure SessionProvider is imported

// --- ADD THIS INITIALIZATION LOGIC ---
// Make sure to replace the placeholder keys with your actual keys
initializeSslPinning({
  'firestore.googleapis.com': {
    includeSubdomains: true,
    publicKeyHashes: [
      '8i3miacE5BOa7yeLJQmWHsNF9iPgAzvg/TRFxnio/LU=', // <-- PASTE YOUR FIRST KEY HERE
    ],
  },
  'identitytoolkit.googleapis.com': {
    includeSubdomains: true,
    publicKeyHashes: [
      'Lvc5Yh+wmHt8+/uOK7S5CYVKZ1eHcHajfivcuw5C8cs=', // <-- PASTE YOUR SECOND KEY HERE
    ],
  },
})
.then(() => {
  // In production, you might want to use a silent logger
  console.log('SSL Pinning successfully initialized.');
})
.catch((error) => {
  // In production, you should report this error to a monitoring service
  console.error('SSL Pinning initialization failed:', error);
});
// --- END OF ADDED LOGIC ---


export default function RootLayout() {
  return (
    <AudioProvider>
      <AuthProvider>
        {/* SessionProvider is needed for the timer and progress screens */}
        <SessionProvider> 
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="liveDarshan" options={{ headerShown: false }} />
            <Stack.Screen name="bhajans" options={{ headerShown: false }} />
            <Stack.Screen name="pravachans" options={{ headerShown: false }} />
            {/* <Stack.Screen name="gallery" options={{ headerShown: false }} /> */}
            <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
            <Stack.Screen name="nityaNemavali" options={{ headerShown: false }} />
            <Stack.Screen name="parmarthMandir" options={{ headerShown: false }} />
          </Stack>
        </SessionProvider>
      </AuthProvider>
    </AudioProvider>
  );
}