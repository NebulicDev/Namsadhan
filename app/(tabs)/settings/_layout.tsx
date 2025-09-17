import { Stack } from 'expo-router';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
};

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings-page"
        options={{
          title: 'Settings',
          headerStyle: { backgroundColor: THEME.background },
          headerTintColor: THEME.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}