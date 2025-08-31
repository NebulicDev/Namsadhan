import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import React from 'react';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { auth } from '../../firebaseConfig';


const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  primary: '#D2B48C',
  white: '#FFFFFF',
};

const WEB_CLIENT_ID = '313704785379-g8tp688umrk5jdmddsnudihtjr8mafi4.apps.googleusercontent.com';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID, 
});

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);

  const onGoogleButtonPress = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // **FIX:** Destructure idToken directly from the signIn() result.
      const { idToken } = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error("Google Sign-In failed: No ID token received.");
      }

      // Create a Firebase credential with the Google ID token
      const googleCredential = GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await signInWithCredential(auth, googleCredential);

    } catch (error: any) {
      console.error("A detailed error occurred during sign-in:", error);
      // Don't show an alert if the user cancels the sign-in flow
      if (error.code !== '12501' && error.code !== '12500') { 
        Alert.alert(
          'Sign-In Failed',
          'An unexpected error occurred. Please check your configuration and try again.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/app-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Namsadhan</Text>
      <Text style={styles.subtitle}>A spiritual companion</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color={THEME.primary} style={{ marginTop: 50 }} />
      ) : (
        <GoogleSigninButton
          style={{ width: 220, height: 48, marginTop: 50 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onGoogleButtonPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.background,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: THEME.text,
  },
  subtitle: {
    fontSize: 18,
    color: THEME.lightText,
    marginTop: 8,
  },
});