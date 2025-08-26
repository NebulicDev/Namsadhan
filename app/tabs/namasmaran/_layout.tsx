// app/tabs/namasmaran/_layout.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Create a new Navigator from the library
const { Navigator } = createMaterialTopTabNavigator();

// Make it compatible with Expo Router
export const MaterialTopTabs = withLayoutContext(Navigator);

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFA07A',
  text: '#5D4037',
  lightText: '#A1887F',
};

export default function NamasmaranLayout() {
  return (
    // Using SafeAreaView from safe-area-context for better top-padding handling
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }} edges={['top']}>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: THEME.accent,
          tabBarInactiveTintColor: THEME.lightText,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
          tabBarIndicatorStyle: {
            backgroundColor: THEME.accent,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: THEME.background,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <MaterialTopTabs.Screen name="timer" options={{ title: 'Session' }} />
        <MaterialTopTabs.Screen name="progress" options={{ title: 'Diary' }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}