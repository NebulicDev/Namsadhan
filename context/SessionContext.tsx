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

  // Load data from local storage on app start
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const storedTotals = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTotals) {
          setDailyTotals(JSON.parse(storedTotals));
        }
      } catch (error) {
        console.error('Error loading data from local storage:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Sync data with Firestore once a day
  useEffect(() => {
    const syncWithFirestore = async () => {
      if (!user) return;

      const lastSyncString = await AsyncStorage.getItem(LAST_SYNC_KEY);
      const lastSync = lastSyncString ? new Date(lastSyncString) : new Date(0);
      const now = new Date();
      
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      if (now.getTime() - lastSync.getTime() > oneDay) {
        console.log('More than 24 hours since last sync. Syncing with Firestore...');
        
        // Fetch from Firestore first to merge data
        const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
        const doc = await docRef.get();
        const firestoreData = doc.exists ? doc.data()?.totals || [] : [];

        // Simple merge: Firestore data is the source of truth, local data is appended
        // A more complex merge strategy could be implemented if needed
        const mergedTotals = [...firestoreData];
        dailyTotals.forEach(localDay => {
            const firestoreDayIndex = mergedTotals.findIndex(fd => fd.date === localDay.date);
            if (firestoreDayIndex > -1) {
                // If the day exists in both, assume the local one is more up-to-date
                mergedTotals[firestoreDayIndex] = localDay;
            } else {
                mergedTotals.push(localDay);
            }
        });
        
        await docRef.set({ totals: mergedTotals });
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mergedTotals));
        await AsyncStorage.setItem(LAST_SYNC_KEY, now.toISOString());
        setDailyTotals(mergedTotals);
        console.log('Sync complete.');
      }
    };

    if (user) {
      syncWithFirestore();
    }
  }, [user]);

  const addSession = async (session: { date: string; duration: number }) => {
    const newTotals = (prevTotals: DailyMeditation[]) => {
      const today = new Date().toISOString().split('T')[0];
      const existingEntryIndex = prevTotals.findIndex(entry => entry.date === today);

      let updatedTotals = [...prevTotals];
      if (existingEntryIndex > -1) {
        const updatedEntry = {
          ...updatedTotals[existingEntryIndex],
          totalDuration: updatedTotals[existingEntryIndex].totalDuration + session.duration,
        };
        updatedTotals[existingEntryIndex] = updatedEntry;
      } else {
        updatedTotals.push({ date: today, totalDuration: session.duration });
      }
      return updatedTotals;
    };

    const updatedTotals = newTotals(dailyTotals);
    setDailyTotals(updatedTotals);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTotals));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
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