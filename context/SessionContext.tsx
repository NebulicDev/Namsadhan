import { db } from '@/firebaseConfig';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
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

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [dailyTotals, setDailyTotals] = useState<DailyMeditation[]>([]);
  const [firestoreTotals, setFirestoreTotals] = useState<DailyMeditation[]>([]);
  const [loading, setLoading] = useState(true);

  // Effect to load data from Firestore when the user logs in
  useEffect(() => {
    if (user) {
      setLoading(true);
      const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
      const unsubscribe = docRef.onSnapshot(doc => {
        const data = doc.exists ? doc.data()?.totals || [] : [];
        setDailyTotals(data);
        setFirestoreTotals(data); // Store the initial state from Firestore
        setLoading(false);
      }, error => {
        console.error("Error fetching sadhana data:", error);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      setDailyTotals([]);
      setFirestoreTotals([]);
      setLoading(false);
    }
  }, [user]);

  // Effect to save data only when the app goes to the background
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState.match(/inactive|background/) && user) {
        // Compare current state with the last known state from Firestore
        if (JSON.stringify(dailyTotals) !== JSON.stringify(firestoreTotals)) {
          console.log("Saving updated meditation data to Firestore...");
          const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
          docRef.set({ totals: dailyTotals }).then(() => {
            // Update the baseline once saved
            setFirestoreTotals(dailyTotals);
          }).catch(error => {
            console.error("Error saving sadhana data:", error);
          });
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, [dailyTotals, firestoreTotals, user]);

  // addSession now ONLY updates the local state
  const addSession = (session: { date: string; duration: number }) => {
    setDailyTotals(prevTotals => {
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
    });
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