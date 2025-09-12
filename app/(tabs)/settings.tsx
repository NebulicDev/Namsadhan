// app/(tabs)/settings.tsx
import { useRouter } from 'expo-router';
import { Settings, UserRound } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { authInstance } from '../../firebaseConfig';

const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  primary: '#D2B48C',
  card: '#FFFFFF',
  gradientEnd: '#FFB88D',
};

export default function ProfileScreen() {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = authInstance.currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);

  const handleGoToSettings = () => {
    router.push('/settings');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.header}>
          {/* <View style={styles.headerTitleContainer}>
            <Text style={styles.title}>Profile</Text>
          </View> */}
          <TouchableOpacity onPress={handleGoToSettings} style={styles.settingsButton}>
            <Settings size={26} color={THEME.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <UserRound size={40} color={THEME.gradientEnd} />
          </View>
          <Text style={styles.userName}>Welcome, {userName}</Text>
        </View>

        {/* Placeholder for Meditation Stats Chart */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Meditation Progress</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.placeholderText}>Interactive Chart Coming Soon!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
  },
  // Added this new style
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: THEME.text,
  },
  settingsButton: {
    position: 'absolute', // Position icon independently
    right: 20,
    top: 60,
    padding: 8,
  },
  profileHeader: {
    alignItems: 'center',
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
  },
  statsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.text,
    marginBottom: 15,
    textAlign: 'center', // Center the text
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: THEME.card,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'rgba(93, 64, 55, 0.4)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  placeholderText: {
    fontSize: 16,
    color: THEME.primary,
  },
});