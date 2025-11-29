// app/pravachans/[id]/index.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Disc
} from 'lucide-react-native';
import { useMemo } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PRAVACHANS_DATA } from '../../../assets/text/pravachansData';

// --- THEME CONSTANTS ---
const THEME = {
  background: '#FFF8F0',
  text: '#5D4037',
  textLight: '#8D6E63',
  cardBg: '#FFFFFF',
  primary: '#D2B48C',
  folderBg: '#FDF5E6',
};

export default function SpeakerFoldersScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  
  const speakerData = PRAVACHANS_DATA.find(s => s.id === id);

  // Group Tracks by Year to create "Folders"
  const folders = useMemo(() => {
    if (!speakerData || !speakerData.tracks.length) return [];

    const grouped: Record<string, number> = {};
    
    speakerData.tracks.forEach(track => {
      const yearKey = track.year ? track.year.toString() : 'All Tracks';
      grouped[yearKey] = (grouped[yearKey] || 0) + 1;
    });

    const sortedKeys = Object.keys(grouped).sort((a, b) => {
        if (a === 'All Tracks') return -1; 
        if (b === 'All Tracks') return 1;
        return parseInt(b) - parseInt(a);
    });

    return sortedKeys.map(key => ({
      title: key,
      count: grouped[key],
      slug: key === 'All Tracks' ? 'all' : key
    }));
  }, [speakerData]);

  const renderFolder = ({ item }: { item: { title: string; count: number; slug: string } }) => {
    const isAllTracks = item.title === 'All Tracks';

    return (
      <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.folderCard}
        onPress={() => {
            // FIX: Use explicit object syntax for nested dynamic routes
            router.push({
                pathname: '/pravachans/[id]/[collectionId]',
                params: { 
                    id: id as string, 
                    collectionId: item.slug, 
                    title: item.title 
                }
            });
        }}
      >
        <View style={styles.folderLeft}>
            <View style={[styles.iconBox, isAllTracks && styles.iconBoxAll]}>
                {isAllTracks ? (
                    <Disc size={22} color={THEME.text} />
                ) : (
                    <Calendar size={22} color={THEME.textLight} />
                )}
            </View>
            <View>
                <Text style={styles.folderTitle}>{item.title}</Text>
                <Text style={styles.folderSubtitle}>{item.count} recordings</Text>
            </View>
        </View>
        <ChevronRight size={20} color={THEME.textLight} opacity={0.5} />
      </TouchableOpacity>
    );
  };

  if (!speakerData) return null;

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.background} />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 10 : 40 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={28} color={THEME.text} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle} numberOfLines={1}>{speakerData.name}</Text>
        </View>
      </View>

      <FlatList
        data={folders}
        keyExtractor={(item) => item.title}
        renderItem={renderFolder}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: THEME.background },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.background,
  },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: THEME.text },
  headerSubtitle: { fontSize: 13, color: THEME.textLight, marginTop: 2 },
  listContent: { padding: 16 },
  
  folderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  folderLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#F3E5D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  iconBoxAll: {
    backgroundColor: '#FFE0B2',
  },
  folderTitle: { fontSize: 16, fontWeight: '700', color: THEME.text },
  folderSubtitle: { fontSize: 12, color: THEME.textLight, marginTop: 2 },
});