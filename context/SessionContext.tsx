// context/SessionContext.tsx
import { db } from '@/firebaseConfig';
import * as SecureStore from 'expo-secure-store';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import logger from '../utils/logger'; // Import the new logger
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

const STORAGE_KEY = 'dailyTotals';
const LAST_SYNC_KEY = 'lastSync';

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [dailyTotals, setDailyTotals] = useState<DailyMeditation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const manageData = async () => {
      if (user) {
        setLoading(true);
        const localData = await loadFromStorage();
        setDailyTotals(localData);

        const now = new Date();
        const lastSyncString = await SecureStore.getItemAsync(`${LAST_SYNC_KEY}_${user.uid}`);
        const lastSync = lastSyncString ? new Date(lastSyncString) : new Date(0);
        const oneDay = 24 * 60 * 60 * 1000;

        if (now.getTime() - lastSync.getTime() > oneDay) {
          logger.log('Time to sync with Firestore.'); // Use logger
          const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
          try {
            const doc = await docRef.get();
            const firestoreData = doc.exists ? doc.data()?.totals || [] : [];
            
            const mergedData = mergeTotals(localData, firestoreData);
            
            await docRef.set({ totals: mergedData });
            await saveToStorage(mergedData);
            await SecureStore.setItemAsync(`${LAST_SYNC_KEY}_${user.uid}`, now.toISOString());
            setDailyTotals(mergedData);
            logger.log('Sync complete.'); // Use logger
          } catch (error) {
            logger.error("Error during Firestore sync:", error); // Use logger
          }
        }
        setLoading(false);
      } else {
        setDailyTotals([]);
        setLoading(false);
      }
    };

    manageData();
  }, [user]);

  const loadFromStorage = async (): Promise<DailyMeditation[]> => {
    try {
      const storedTotals = await SecureStore.getItemAsync(`${STORAGE_KEY}_${user?.uid}`);
      return storedTotals ? JSON.parse(storedTotals) : [];
    } catch (error) {
      logger.error('Error loading data from local storage:', error); // Use logger
      return [];
    }
  };

  const saveToStorage = async (data: DailyMeditation[]) => {
    try {
      await SecureStore.setItemAsync(`${STORAGE_KEY}_${user?.uid}`, JSON.stringify(data));
    } catch (error) {
      logger.error('Error saving data to local storage:', error); // Use logger
    }
  };

  const mergeTotals = (local: DailyMeditation[], remote: DailyMeditation[]): DailyMeditation[] => {
    const mergedMap = new Map<string, number>();
    remote.forEach(item => {
        mergedMap.set(item.date, item.totalDuration);
    });
    local.forEach(item => {
        mergedMap.set(item.date, item.totalDuration);
    });
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