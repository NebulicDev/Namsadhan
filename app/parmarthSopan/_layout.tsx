// app/parmarthSopan/_layout.tsx
import { Stack } from 'expo-router';

export default function ParmarthSopanLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF8F0' } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="chapters" />
      <Stack.Screen name="items" />
      <Stack.Screen name="detail" />
    </Stack>
  );
}