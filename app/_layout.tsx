import { Stack } from 'expo-router';
import React from 'react';

// This is the root layout for the entire app.
// Its only job is to display the group of screens located in the 'tabs' directory.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
