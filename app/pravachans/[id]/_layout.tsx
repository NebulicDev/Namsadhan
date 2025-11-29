import { Stack } from 'expo-router';

export default function SpeakerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 1. The list of folders (Years/All) */}
      <Stack.Screen name="index" />
      
      {/* 2. The list of tracks for a specific year */}
      <Stack.Screen name="[collectionId]" />
    </Stack>
  );
}