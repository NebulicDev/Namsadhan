// app/(tabs)/_layout.tsx
import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { BookOpen, Home, Library, Sun, UserRound } from 'lucide-react-native';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SessionProvider } from '../../context/SessionContext';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0', // Cream color matching your app screens
  primary: '#D2B48C',
  accent: '#FFB88D',
  text: '#5D4037',
  white: '#FFFFFF',
};

// Custom Haptic Tab Button
const TabButton = (props: any) => {
  const { onPress } = props;
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        if (onPress) {
          onPress(e);
        }
      }}
    />
  );
};

// Custom Icon Component
const TabIcon = ({ icon: Icon, color, focused }: { icon: any, color: string, focused: boolean }) => {
  return (
    <View style={[styles.iconContainer, focused && styles.activeContainer]}>
      <Icon 
        size={26} 
        color={color} 
        strokeWidth={2.5} 
      />
    </View>
  );
};

// This component renders the "Card" look of the tab bar
const TabBarBackground = () => (
  <View style={styles.tabBackgroundContainer}>
    <View style={styles.tabBackgroundCard} />
  </View>
);

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  
  // Taller height for premium feel
  const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 98 : 84;

  return (
    <SessionProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          
          // 1. The Container: Fills the gap with Cream color to hide the grey
          tabBarStyle: {
            backgroundColor: THEME.background, // <--- This fixes the grey corners
            height: TAB_BAR_HEIGHT,
            borderTopWidth: 0,
            elevation: 0, // Remove default Android shadow
            shadowOpacity: 0, // Remove default iOS shadow
            paddingTop: 12,
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : 12,
          },
          
          // 2. The Background: Renders the White Rounded Card with Shadow
          tabBarBackground: () => <TabBarBackground />,
          
          // Colors & Typo
          tabBarActiveTintColor: THEME.accent, 
          tabBarInactiveTintColor: THEME.text,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 6,
          },
          // Haptic Button
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Home} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="quotes"
          options={{
            title: 'Thoughts',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={BookOpen} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="namasmaran"
          options={{
            title: 'Sadhana',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Sun} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Library} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={UserRound} color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50, 
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  activeContainer: {
    backgroundColor: THEME.background, 
  },
  // Wrapper for the background to ensure it fills space
  tabBackgroundContainer: {
    flex: 1,
    backgroundColor: THEME.background, // Ensures corners are cream, not grey
  },
  // The actual white card with shadow
  tabBackgroundCard: {
    flex: 1,
    backgroundColor: THEME.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // Premium Shadow
    shadowColor: '#5D4037',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 20,
    // Ensure border/background doesn't clip shadow
    overflow: 'visible', 
  },
});