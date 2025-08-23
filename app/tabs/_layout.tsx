import { Tabs } from 'expo-router';
import { BookOpen, Clock, Home, Music, Settings } from 'lucide-react-native';
import React from 'react';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0', // Off-white
  primary: '#D2B48C',   // Faint brown / Tan
  accent: '#FFA07A',     // Faint orange / Light Salmon
  text: '#5D4037',      // Darker brown for text
  white: '#FFFFFF',
};

// This is the layout for the tabs navigation
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: THEME.white,
          borderTopWidth: 0,
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: THEME.accent,
        tabBarInactiveTintColor: THEME.text,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index" // This corresponds to app/tabs/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={26} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="namasmaran"
        options={{
          title: 'Namasmaran',
          tabBarIcon: ({ color }) => <Clock size={26} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="quotes"
        options={{
          title: 'Quotes',
          tabBarIcon: ({ color }) => <BookOpen size={26} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: 'Music',
          tabBarIcon: ({ color }) => <Music size={26} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings size={26} color={color} strokeWidth={2.5} />,
        }}
      />
    </Tabs>
  );
}
