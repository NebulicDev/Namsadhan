// nebulicdev/namsadhan/Namsadhan-feature-auth/context/AuthContext.tsx
import { authInstance } from '@/firebaseConfig';
import { onAuthStateChanged } from '@react-native-firebase/auth'; // CHANGED: Modular import
import { useRouter, useSegments } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

interface AuthContextType {
  user: any; 
}

const AuthContext = createContext<AuthContextType>({ user: null });

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user: any, initializing: boolean) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // If we are still initializing, do nothing.
    if (initializing) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Redirect to the login page if the user is not authenticated.
      router.replace('/(auth)/login');
    } else if (user && inAuthGroup) {
      // Redirect away from the auth group if the user is authenticated.
      router.replace({ pathname: '/' } as any);
    }
  }, [user, segments, router, initializing]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // CHANGED: Using the modular onAuthStateChanged function
    // Pass the auth instance (from firebaseConfig) as the first argument
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    // Unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  useProtectedRoute(user, initializing);

  // Show a loading screen while we determine the auth state
  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8F0' }}>
        <ActivityIndicator size="large" color="#D2B48C" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}