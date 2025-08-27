import { Stack } from 'expo-router';
import React from 'react';

// This is the root layout for the entire app.
export default function RootLayout() {
  return (
    // The Stack navigator will manage the overall app structure.
    <Stack>
      {/* This screen manages the main tab bar */}
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      
      {/* These screens are the full-screen pages. We hide the default header for them. */}
      <Stack.Screen name="liveDarshan" options={{ headerShown: false }} />
      <Stack.Screen name="bhajans" options={{ headerShown: false }} />
      <Stack.Screen name="pravachans" options={{ headerShown: false }} />
      <Stack.Screen name="player" options={{ headerShown: false }} />
      <Stack.Screen name="gallery" options={{ headerShown: false }} />
      <Stack.Screen name="manacheShlok" options={{ headerShown: false }} />
    </Stack>
  );
}
