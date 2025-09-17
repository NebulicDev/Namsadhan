import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { BookOpen, Home, Library, Sun, UserRound } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { SessionProvider } from '../../context/SessionContext';

// --- Theme Colors ---
const THEME = {
  background: '#FFF8F0',
  primary: '#D2B48C',
  accent: '#FFB88D',
  text: '#5D4037',
  white: '#FFFFFF',
};

// Haptic Pressable Component
const HapticPressable = (props: any) => (
  <Pressable
    {...props}
    onPress={(e) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      if (props.onPress) {
        props.onPress(e);
      }
    }}
  />
);

export default function TabsLayout() {
  return (
    <SessionProvider>
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
            shadowColor: 'rgba(93, 64, 55, 0.4)',
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
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Home size={26} color={color} strokeWidth={2.5} />,
            tabBarButton: (props) => <HapticPressable {...props} />,
          }}
        />
        <Tabs.Screen
          name="quotes"
          options={{
            title: 'Thoughts',
            tabBarIcon: ({ color }) => <BookOpen size={26} color={color} strokeWidth={2.5} />,
            tabBarButton: (props) => <HapticPressable {...props} />,
          }}
        />
        <Tabs.Screen
          name="namasmaran"
          options={{
            title: 'Sadhana',
            tabBarIcon: ({ color }) => <Sun size={26} color={color} strokeWidth={2.5} />,
            tabBarButton: (props) => <HapticPressable {...props} />,
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            tabBarIcon: ({ color }) => <Library size={26} color={color} strokeWidth={2.5} />,
            tabBarButton: (props) => <HapticPressable {...props} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <UserRound size={26} color={color} strokeWidth={2.5} />,
            tabBarButton: (props) => <HapticPressable {...props} />,
          }}
        />
      </Tabs>
    </SessionProvider>
  );
}