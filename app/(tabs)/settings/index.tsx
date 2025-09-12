import { useRouter } from 'expo-router';
import {
  ChevronRight,
  LogOut,
  Settings as SettingsIcon,
  User,
} from 'lucide-react-native';
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
  lightText: '#A1887F',
  card: '#FFFFFF',
  primary: '#D2B48C',
  white: '#FFFFFF',
  error: '#D32F2F',
};

const SettingsItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    {icon}
    <Text style={styles.itemText}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);

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
      <ScrollView>
        <View style={{ paddingTop: insets.top }}>
          <View style={styles.headerActions}>
            <TouchableOpacity
              onPress={() => router.push('/settings/settings-page')}
              hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}
              accessibilityLabel="Open Settings"
            >
              <SettingsIcon size={28} color={THEME.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <User size={40} color={THEME.primary} />
            </View>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <SettingsItem
            icon={<LogOut size={24} color={THEME.error} />}
            text="Sign Out"
            onPress={handleSignOut}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  headerActions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 8,
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: THEME.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 8,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 15,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 20,
    color: THEME.text,
  },
});