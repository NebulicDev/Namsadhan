// app/(auth)/login.tsx
import { Ionicons } from '@expo/vector-icons';
import { GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { authInstance } from '../../firebaseConfig';

const { width, height } = Dimensions.get('window');
const WEB_CLIENT_ID = '124322613000-7ifkvsv3nkhl1mb2vcbdhkouk77nm20m.apps.googleusercontent.com';

// Refined Earthy Palette
const THEME = {
  gradientTop: '#FDFBF7',      // Very light cream
  gradientBottom: '#E6DCC3',   // Muted beige
  cardBg: '#FFFFFF',           // Pure white for the card
  textPrimary: '#4A3B32',      // Deep brown
  textSecondary: '#8C7B70',    // Soft brown
  accent: '#E09F7D',           // Warm peach/terracotta
  accentHighlight: '#FFDAB9',  // Lighter peach for gradients/highlights
  toggleBg: '#F5F0EB',         // Very light grey/beige for toggle track
};

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data?.idToken;

      if (!idToken) throw new Error('No ID token found');

      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(authInstance, googleCredential);
      
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.replace({ pathname: '/' } as any);

    } catch (error: any) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      if (error.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign In Error', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. TOP HALF: Atmospheric Background & Brand */}
      <LinearGradient
        colors={[THEME.gradientTop, THEME.gradientBottom]}
        style={styles.topSection}
      >
        <Animated.View 
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.brandContainer}
        >
          <View style={styles.iconRing}>
            <Image 
              source={require('../../assets/images/app-icon.png')} 
              style={styles.appIcon}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.appName} adjustsFontSizeToFit={true}>Namsadhan</Text>
          <Text style={styles.tagline} adjustsFontSizeToFit={true}>Shri Gurudev Ranade Samadhi Trust</Text>
        </Animated.View>
      </LinearGradient>

      {/* 2. BOTTOM HALF: The "Card" Sheet */}
      <Animated.View 
        entering={FadeInDown.delay(100).duration(800).springify()}
        style={styles.bottomSheet}
      >
        <View style={styles.sheetContent}>
          
          {/* Header Text */}
          <View style={styles.headerBlock}>
            <Text style={styles.welcomeTitle}>
              {authMode === 'login' ? 'Welcome Back' : 'Join Us'}
            </Text>
            <Text style={styles.welcomeSubtitle}>
              {authMode === 'login' 
                ? 'Sign in to your account' 
                : 'Create a new account'}
            </Text>
          </View>

          {/* Custom Toggle Switch */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, authMode === 'login' && styles.toggleBtnActive]}
              onPress={() => {
                Haptics.selectionAsync();
                setAuthMode('login');
              }}
              activeOpacity={0.9}
            >
              <Text style={[styles.toggleText, authMode === 'login' && styles.toggleTextActive]}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, authMode === 'signup' && styles.toggleBtnActive]}
              onPress={() => {
                Haptics.selectionAsync();
                setAuthMode('signup');
              }}
              activeOpacity={0.9}
            >
              <Text style={[styles.toggleText, authMode === 'signup' && styles.toggleTextActive]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handleGoogleSignIn}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <>
                <View style={styles.btnIconContainer}>
                  <Ionicons name="logo-google" size={20} color={THEME.accent} />
                </View>
                <Text style={styles.mainButtonText}>
                  {authMode === 'login' ? 'Continue with Google' : 'Sign up with Google'}
                </Text>
                <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ opacity: 0.8 }} />
              </>
            )}
          </TouchableOpacity>

          {/* Footer Note */}
          <Text style={styles.footerText} adjustsFontSizeToFit={true}>
            By continuing, you agree to our Terms & Privacy Policy.
          </Text>

        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.gradientBottom, // Safety fallback color
  },
  /* TOP SECTION */
  topSection: {
    height: height * 0.55, // Takes up 55% of the screen
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60, // Push content up slightly so it clears the card overlap
  },
  brandContainer: {
    alignItems: 'center',
  },
  iconRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    padding: 3,
    shadowColor: THEME.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
    marginBottom: 20,
  },
  appIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: THEME.textPrimary,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 16,
    color: THEME.textSecondary,
    marginTop: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
  },

  /* BOTTOM SHEET CARD */
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.45, // 45% of screen
    backgroundColor: THEME.cardBg,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: 32,
    paddingTop: 40,
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerBlock: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center', // Left align text for modern look
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: THEME.textPrimary,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: THEME.textSecondary,
    lineHeight: 22,
  },
  
  /* TOGGLE SWITCH */
  toggleContainer: {
    width: '100%',
    height: 55,
    backgroundColor: THEME.toggleBg,
    borderRadius: 30,
    flexDirection: 'row',
    padding: 4,
    marginBottom: 25,
  },
  toggleBtn: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.textSecondary,
  },
  toggleTextActive: {
    color: THEME.textPrimary,
    fontWeight: '700',
  },

  /* ACTION BUTTON */
  mainButton: {
    width: '100%',
    height: 60,
    backgroundColor: THEME.accent,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Spreads content: Icon - Text - Arrow
    paddingHorizontal: 20,
    shadowColor: THEME.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    marginBottom: 20,
  },
  btnIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
  
  /* FOOTER */
  footerText: {
    fontSize: 12,
    color: THEME.textSecondary,
    textAlign: 'center',
    marginTop: 'auto', // Pushes to bottom of available space
    marginBottom: 40,
    opacity: 0.7,
  }
});