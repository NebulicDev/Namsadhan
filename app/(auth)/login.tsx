// app/(auth)/login.tsx
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { authInstance } from '../../firebaseConfig';

const WEB_CLIENT_ID = '124322613000-7ifkvsv3nkhl1mb2vcbdhkouk77nm20m.apps.googleusercontent.com';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  lightText: '#A1887F',
  primary: '#D2B48C',
  white: '#FFFFFF',
  error: '#D32F2F',
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }
    setLoading(true);
    try {
      await authInstance.signInWithEmailAndPassword(email, password);
      router.replace({ pathname: '/' } as any);
    } catch (error: any) {
      Alert.alert('Login Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      
      // --- THIS IS THE CORRECTED LINE ---
      const idToken = userInfo.data?.idToken;

      if (!idToken) {
        console.log('Google Sign-In Response was missing ID token:', JSON.stringify(userInfo, null, 2));
        throw new Error('Something went wrong obtaining the ID token.');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await authInstance.signInWithCredential(googleCredential);
      router.replace({ pathname: '/' } as any);

    } catch (error: any) {
      console.log('--- DETAILED GOOGLE SIGN-IN ERROR ---');
      console.log(JSON.stringify(error, null, 2));
      console.log('--- END OF ERROR ---');

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled Google Sign-In.');
      } else {
        Alert.alert('Google Sign-In Error', error.message || 'An unknown error occurred. Please check the console logs.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey</Text>

        <View style={styles.inputContainer}>
          <Mail size={20} color={THEME.lightText} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={THEME.lightText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color={THEME.lightText} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={THEME.lightText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={THEME.white} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4285F4', marginTop: 10 }]}
            onPress={handleGoogleSignIn}
            disabled={loading}
        >
            <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>


        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
            <Text style={[styles.footerText, styles.link]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  inner: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  title: { fontSize: 34, fontWeight: 'bold', color: THEME.text, marginBottom: 10 },
  subtitle: { fontSize: 16, color: THEME.lightText, marginBottom: 40, textAlign: 'center' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: THEME.white, borderRadius: 12, marginBottom: 20, paddingHorizontal: 15, borderWidth: 1, borderColor: THEME.primary },
  icon: { marginRight: 10 },
  input: { flex: 1, height: 50, color: THEME.text, fontSize: 16 },
  button: { backgroundColor: THEME.primary, borderRadius: 12, paddingVertical: 15, alignItems: 'center', width: '100%', marginTop: 10 },
  buttonText: { color: THEME.white, fontSize: 16, fontWeight: '600' },
  footer: { flexDirection: 'row', marginTop: 20 },
  footerText: { color: THEME.lightText, fontSize: 14 },
  link: { color: THEME.primary, fontWeight: 'bold' },
});