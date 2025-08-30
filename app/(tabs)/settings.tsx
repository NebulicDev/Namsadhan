import { signOut } from 'firebase/auth';
import { LogOut } from 'lucide-react-native';
import { auth } from '../../firebaseConfig';
//... other imports

const SettingsItem = ({ icon, text, onPress, isDestructive = false }: { icon: React.ReactNode, text: string, onPress?: () => void, isDestructive?: boolean }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={[styles.itemText, isDestructive && { color: '#FF3B30' }]}>{text}</Text>
    <ChevronRight size={24} color={THEME.lightText} />
  </TouchableOpacity>
);


export default function SettingsScreen() {
    //... existing state
    
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
            Alert.alert("Error", "Could not sign out. Please try again.");
        }
    };
    
    return (
        // ... existing JSX
         <View style={styles.card}>
            {/* ... other settings items */}
            <View style={styles.separator} />
             <SettingsItem
                icon={<LogOut size={24} color={'#FF3B30'} />}
                text="Sign Out"
                onPress={handleSignOut}
                isDestructive
            />
        </View>
        //... rest of the JSX
    )
}