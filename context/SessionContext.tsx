// context/SessionContext.tsx
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc } from '@react-native-firebase/firestore'; // CHANGED: Modular imports
import * as SecureStore from 'expo-secure-store';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import logger from '../utils/logger';
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
          logger.log('Time to sync with Firestore.');

          // CHANGED: Modular Doc Reference
          // Path: users -> {uid} -> sadhana -> dailyTotals
          const docRef = doc(db, 'users', user.uid, 'sadhana', 'dailyTotals');

          try {
            // CHANGED: Modular getDoc
            const docSnap = await getDoc(docRef);
            const firestoreData = docSnap.exists ? docSnap.data()?.totals || [] : [];
            
            const mergedData = mergeTotals(localData, firestoreData);
            
            // CHANGED: Modular setDoc
            await setDoc(docRef, { totals: mergedData });
            
            await saveToStorage(mergedData);
            await SecureStore.setItemAsync(`${LAST_SYNC_KEY}_${user.uid}`, now.toISOString());
            setDailyTotals(mergedData);
            logger.log('Sync complete.');
          } catch (error) {
            logger.error("Error during Firestore sync:", error);
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
      logger.error('Error loading data from local storage:', error);
      return [];
    }
  };

  const saveToStorage = async (data: DailyMeditation[]) => {
    try {
      await SecureStore.setItemAsync(`${STORAGE_KEY}_${user?.uid}`, JSON.stringify(data));
    } catch (error) {
      logger.error('Error saving data to local storage:', error);
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