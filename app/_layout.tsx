import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="liveDarshan" options={{ headerShown: false }} />
      <Stack.Screen name="bhajans" options={{ headerShown: false }} />
      <Stack.Screen name="pravachans" options={{ headerShown: false }} />
      <Stack.Screen name="gallery" options={{ headerShown: false }} />
      <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
      <Stack.Screen name="nityaNemavali" options={{ headerShown: false }} />
    </Stack>
  );
}