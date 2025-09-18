// context/SessionContext.tsx
import { db } from '@/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

interface DailyMeditation {
  date: string;
  totalDuration: number;
}

interface SessionContextType {
  dailyTotals: DailyMeditation[];
  addSession: (session: { date: string; duration: number }) => void;
  loading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const STORAGE_KEY = '@dailyTotals';
const LAST_SYNC_KEY = '@lastSync';

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [dailyTotals, setDailyTotals] = useState<DailyMeditation[]>([]);
  const [loading, setLoading] = useState(true);

  // Effect to load data and sync with Firestore
  useEffect(() => {
    const manageData = async () => {
      if (user) {
        setLoading(true);
        // 1. Load local data first for a snappy UI
        const localData = await loadFromStorage();
        setDailyTotals(localData);

        // 2. Check if it's time to sync with Firestore
        const now = new Date();
        const lastSyncString = await AsyncStorage.getItem(`${LAST_SYNC_KEY}_${user.uid}`);
        const lastSync = lastSyncString ? new Date(lastSyncString) : new Date(0);
        const oneDay = 24 * 60 * 60 * 1000;

        if (now.getTime() - lastSync.getTime() > oneDay) {
          console.log('Time to sync with Firestore.');
          // 3. Fetch from Firestore
          const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
          try {
            const doc = await docRef.get();
            const firestoreData = doc.exists ? doc.data()?.totals || [] : [];
            
            // 4. Merge local and Firestore data
            const mergedData = mergeTotals(localData, firestoreData);
            
            // 5. Save the merged data back to Firestore and local storage
            await docRef.set({ totals: mergedData });
            await saveToStorage(mergedData);
            await AsyncStorage.setItem(`${LAST_SYNC_KEY}_${user.uid}`, now.toISOString());
            setDailyTotals(mergedData);
            console.log('Sync complete.');
          } catch (error) {
            console.error("Error during Firestore sync:", error);
            // If sync fails, we still have the local data loaded
          }
        }
        setLoading(false);
      } else {
        // Clear data when user logs out
        setDailyTotals([]);
        setLoading(false);
      }
    };

    manageData();
  }, [user]);

  const loadFromStorage = async (): Promise<DailyMeditation[]> => {
    try {
      const storedTotals = await AsyncStorage.getItem(`${STORAGE_KEY}_${user?.uid}`);
      return storedTotals ? JSON.parse(storedTotals) : [];
    } catch (error) {
      console.error('Error loading data from local storage:', error);
      return [];
    }
  };

  const saveToStorage = async (data: DailyMeditation[]) => {
    try {
      await AsyncStorage.setItem(`${STORAGE_KEY}_${user?.uid}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  };

  const mergeTotals = (local: DailyMeditation[], remote: DailyMeditation[]): DailyMeditation[] => {
    const mergedMap = new Map<string, number>();

    // Add all remote entries to the map first
    remote.forEach(item => {
        mergedMap.set(item.date, item.totalDuration);
    });

    // Add or update with local entries. Local data for a given day is considered more current.
    local.forEach(item => {
        mergedMap.set(item.date, item.totalDuration);
    });

    // Convert map back to an array and sort by date
    return Array.from(mergedMap, ([date, totalDuration]) => ({ date, totalDuration }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const addSession = async (session: { date: string; duration: number }) => {
    const updatedTotals = ((prevTotals) => {
      const today = new Date().toISOString().split('T')[0];
      const existingEntryIndex = prevTotals.findIndex(entry => entry.date === today);

      let newTotals = [...prevTotals];
      if (existingEntryIndex > -1) {
        const updatedEntry = {
          ...newTotals[existingEntryIndex],
          totalDuration: newTotals[existingEntryIndex].totalDuration + session.duration,
        };
        newTotals[existingEntryIndex] = updatedEntry;
      } else {
        newTotals.push({ date: today, totalDuration: session.duration });
      }
      return newTotals;
    })(dailyTotals);

    setDailyTotals(updatedTotals);
    await saveToStorage(updatedTotals);
  };

  return (
    <SessionContext.Provider value={{ dailyTotals, addSession, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessions = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSessions must be used within a SessionProvider');
  }
  return context;
};