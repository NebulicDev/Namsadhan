// app/tabs/namasmaran/_layout.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
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
          tabBarStyle: { display: 'none' }, // Hide default tab bar
        }}
        tabBar={({ state, descriptors, navigation }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: THEME.containerBackground,
                borderRadius: 22,
                marginHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
                marginBottom: 15,
                padding: 4,
              }}
            >
              {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                  options.title !== undefined ? options.title : route.name;

                const isFocused = state.index === index;

                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => navigation.navigate(route.name)}
                    style={{
                      flex: 1,
                      backgroundColor: isFocused ? THEME.white : 'transparent',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 8,
                      elevation: isFocused ? 1 : 0,
                      shadowColor: isFocused ? 'rgba(93, 64, 55, 0.4)' : undefined,
                      shadowOffset: isFocused ? { width: 0, height: 1 } : undefined,
                      shadowOpacity: isFocused ? 0.1 : undefined,
                      shadowRadius: isFocused ? 2 : undefined,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: isFocused ? THEME.text : THEME.lightText,
                      }}
                    >
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        }}
      >
        <MaterialTopTabs.Screen name="timer" options={{ title: 'Session' }} />
        <MaterialTopTabs.Screen name="progress" options={{ title: 'Diary' }} />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
