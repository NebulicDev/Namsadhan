// app/tabs/namasmaran/_layout.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Create a new Navigator from the library
const { Navigator } = createMaterialTopTabNavigator();

// Make it compatible with Expo Router
export const MaterialTopTabs = withLayoutContext(Navigator);

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  white: '#FFFFFF',
  containerBackground: '#EAE3DA',
};

export default function NamasmaranLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }} edges={['top']}>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: THEME.text,
          tabBarInactiveTintColor: THEME.lightText,
          tabBarPressColor: 'transparent',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
          // This is the sliding "pill" that highlights the active tab
          tabBarIndicatorStyle: {
            backgroundColor: THEME.white,
            borderRadius: 18,
            height: '100%', // Fills the container set by padding below
            elevation: 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          },
          // This is the container that holds both tabs
          tabBarStyle: {
            backgroundColor: THEME.containerBackground,
            borderRadius: 22,
            marginHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 0 : 15,
            marginBottom: 15,
            elevation: 0,
            shadowOpacity: 0,
            // By adding padding, we create an inset for the indicator
            padding: 4,
          },
        }}
      >
        <MaterialTopTabs.Screen name="timer" options={{ title: 'Session' }} />
        <MaterialTopTabs.Screen name="progress" options={{ title: 'Diary' }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}