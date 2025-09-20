// app/(auth)/login.tsx
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { authInstance } from '../../firebaseConfig';
import logger from '../../utils/logger'; // Import the new logger

const WEB_CLIENT_ID = '124322613000-7ifkvsv3nkhl1mb2vcbdhkouk77nm20m.apps.googleusercontent.com';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  primary: '#D2B48C',
  white: '#FFFFFF',
  error: '#D32F2F',
  containerBackground: '#EAE3DA',
};

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();

      // --- THIS IS THE CORRECTED LINE ---
      const idToken = userInfo.data?.idToken;

      if (!idToken) {
        logger.log('Google Sign-In Response was missing ID token:', JSON.stringify(userInfo, null, 2));
        throw new Error('Something went wrong obtaining the ID token.');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await authInstance.signInWithCredential(googleCredential);
      router.replace({ pathname: '/' } as any);

    } catch (error: any) {
      logger.log('--- DETAILED GOOGLE SIGN-IN ERROR ---');
      logger.log(JSON.stringify(error, null, 2));
      logger.log('--- END OF ERROR ---');

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        logger.log('User cancelled Google Sign-In.');
      } else {
        Alert.alert('Google Sign-In Error', error.message || 'An unknown error occurred. Please check the console logs.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Image source={require('../../assets/images/app-icon.png')} style={styles.appIcon} />

        <Text style={styles.title}>Namsadhan</Text>
        <Text style={styles.subtitle}>Sign in or create an account to continue</Text>

        <View style={styles.sliderContainer}>
          <TouchableOpacity
            style={[styles.sliderButton, authMode === 'login' && styles.activeSliderButton]}
            onPress={() => setAuthMode('login')}
          >
            <Text style={[styles.sliderButtonText, authMode === 'login' && styles.activeSliderButtonText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sliderButton, authMode === 'signup' && styles.activeSliderButton]}
            onPress={() => setAuthMode('signup')}
          >
            <Text style={[styles.sliderButtonText, authMode === 'signup' && styles.activeSliderButtonText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={handleGoogleSignIn}
            disabled={loading}
        >
            {loading ? (
              <ActivityIndicator color={THEME.white} />
            ) : (
              <Text style={styles.buttonText}>
                {authMode === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
              </Text>
            )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  appIcon: {
    width: 200,
    height: 150,
    borderRadius: 60,
    marginBottom: 10,
  },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text, marginBottom: 10 },
  subtitle: { fontSize: 16, color: THEME.lightText, marginBottom: 30, textAlign: 'center' },
  sliderContainer: {
    flexDirection: 'row',
    backgroundColor: THEME.containerBackground,
    borderRadius: 30,
    padding: 4,
    marginBottom: 30,
    width: '100%',
  },
  sliderButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 26,
    alignItems: 'center',
  },
  activeSliderButton: {
    backgroundColor: THEME.white,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  sliderButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.lightText,
  },
  activeSliderButtonText: {
    color: THEME.text,
  },
  button: {
    backgroundColor: '#faac8dff',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  buttonText: { color: THEME.white, fontSize: 16, fontWeight: '600' },
});