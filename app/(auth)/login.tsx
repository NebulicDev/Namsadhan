import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import React from 'react';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { auth } from '../../firebaseConfig';


const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  white: '#FFFFFF',
};

// Extracted for clarity and debugging
const WEB_CLIENT_ID = '313704785379-mkle5ntc551dihgns3g269oopkm46ot8.apps.googleusercontent.com';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID, 
});

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);

  const onGoogleButtonPress = async () => {
    // Log the Client ID to the terminal every time the button is pressed
    console.log('Attempting to sign in with Web Client ID:', WEB_CLIENT_ID);
    
    setLoading(true);
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Get the user's info from Google
      const userInfo = await GoogleSignin.signIn();

      // Check if the idToken exists before we proceed
      if (!userInfo.idToken) {
        throw new Error("Google Sign-In failed to return an ID token.");
      }

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);

      // Sign-in the user with the credential
      await signInWithCredential(auth, googleCredential);

    } catch (error: any) {
      console.error("A detailed error occurred during sign-in:", error);
      if (error.code !== '12501') { // 12501 is the code for a user-cancelled sign-in
        Alert.alert(
          'Sign-In Failed',
          'An error occurred during sign-in. Please try again.'
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