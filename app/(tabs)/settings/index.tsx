import { useRouter } from 'expo-router';
import { LogOut, Settings as SettingsIcon, User } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { authInstance } from '../../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  card: '#FFFFFF',
  error: '#D32F2F',
};

export default function ProfileScreen() {
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const user = authInstance.currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await authInstance.signOut();
    } catch (error) {
      console.error('Error signing out: ', error);
      Alert.alert('Failed to sign out.');
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.profileHeader, { paddingTop: insets.top + 40 }]}>
          <View style={styles.avatar}>
            <User size={40} color={THEME.primary} />
          </View>
          <Text style={styles.userName}>{userName}</Text>

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push('/settings/settings-page')}
              accessibilityLabel="Open Settings"
            >
              <SettingsIcon size={26} color={THEME.text} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleSignOut}
              accessibilityLabel="Sign Out"
            >
              <LogOut size={26} color={THEME.error} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: THEME.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: THEME.card,
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});