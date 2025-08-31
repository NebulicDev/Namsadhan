import { Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';

const InitialLayout = () => {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Wait until the auth state is loaded
    if (loading) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    // If the user is signed in and the initial segment is not the main app group,
    // redirect them to the main app.
    if (user && !inAuthGroup) {
      router.replace('/(tabs)');
    } 
    // If the user is not signed in and the initial segment is not the auth group,
    // redirect them to the login page.
    else if (!user) {
      router.replace('/(auth)/login');
    }
  }, [user, segments, loading, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

// Wrap the app with the AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}