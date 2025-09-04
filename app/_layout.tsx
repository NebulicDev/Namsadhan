// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { AudioProvider } from '../context/AudioContext'; // 1. Import AudioProvider
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AudioProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="liveDarshan" options={{ headerShown: false }} />
          <Stack.Screen name="bhajans" options={{ headerShown: false }} />
          <Stack.Screen name="pravachans" options={{ headerShown: false }} />
          <Stack.Screen name="gallery" options={{ headerShown: false }} />
          <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
          <Stack.Screen name="nityaNemavali" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </AudioProvider>
  );
}