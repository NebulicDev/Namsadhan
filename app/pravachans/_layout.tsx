// app/pravachans/_layout.tsx
import { Stack } from 'expo-router';

export default function PravachansLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[year]" options={{ headerShown: false }} />
    </Stack>
  );
}