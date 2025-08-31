// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  // This can be a simple stack navigator for your auth flow
  return <Stack screenOptions={{ headerShown: false }} />;
}