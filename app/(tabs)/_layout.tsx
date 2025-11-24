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
  background: '#FFF8F0',
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

// Background Component: The Visual White Card
const TabBarBackground = () => (
  <View style={styles.tabBackgroundCard} />
);

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  
  // Height calculation for premium look
  const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 96 : 80;

  return (
    <SessionProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          
          // --- TAB BAR CONFIGURATION ---
          tabBarStyle: {
            position: 'absolute', // Required for transparency behind corners
            bottom: 0,
            left: 0,
            right: 0,
            height: TAB_BAR_HEIGHT,
            backgroundColor: 'transparent', // Ensures the area around the rounded corners is see-through
            borderTopWidth: 0,
            elevation: 0, // Removes default Android flat shadow
            paddingTop: 12,
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : 12,
          },
          
          // --- CUSTOM BACKGROUND SHAPE ---
          // This renders the White Rounded Card *inside* the transparent container
          tabBarBackground: () => <TabBarBackground />,
          
          // Colors & Typography
          tabBarActiveTintColor: THEME.accent, 
          tabBarInactiveTintColor: THEME.text,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 6,
          },
          
          // Buttons
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
  // The actual visual white card
  tabBackgroundCard: {
    position: 'absolute', 
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: THEME.white,
    borderTopLeftRadius: 30, // The Rounded Corners
    borderTopRightRadius: 30,
    // Premium Shadow
    shadowColor: '#5D4037',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});