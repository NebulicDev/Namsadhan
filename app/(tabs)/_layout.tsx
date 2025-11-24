// app/(tabs)/_layout.tsx
import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { BookOpen, Home, Library, Sun, UserRound } from 'lucide-react-native';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SessionProvider } from '../../context/SessionContext';

// --- Original Theme Colors ---
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

// Custom Icon Component with Active Indicator
const TabIcon = ({ icon: Icon, color, focused }: { icon: any, color: string, focused: boolean }) => {
  return (
    <View style={[styles.iconContainer, focused && styles.activeContainer]}>
      <Icon 
        size={26} 
        color={color} 
        strokeWidth={2.5} // Bold stroke as requested
      />
    </View>
  );
};

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  
  // Taller height for premium feel (80 + bottom inset)
  const TAB_HEIGHT = 80 + insets.bottom; 

  return (
    <SessionProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          // Premium "Sheet" Styling with Rounded Top
          tabBarStyle: {
            backgroundColor: THEME.white,
            borderTopWidth: 0,
            height: TAB_HEIGHT,
            // Rounded Top Corners
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // Positioning
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            // Padding
            paddingTop: 12,
            paddingBottom: insets.bottom + 10, 
            // Soft Upward Shadow
            shadowColor: '#5D4037',
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 20,
          },
          // Original Active/Inactive Colors
          tabBarActiveTintColor: THEME.accent, 
          tabBarInactiveTintColor: THEME.text,
          // Typography
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 6,
          },
          // Apply Haptic Button
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
    // Uses the subtle cream background from your theme, matching the app aesthetic perfectly
    backgroundColor: THEME.background, 
  },
});