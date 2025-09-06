import { db } from '@/firebaseConfig';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

// TypeScript interface for a daily meditation total
interface DailyMeditation {
  date: string;
  totalDuration: number; // in seconds
}

// TypeScript interface for the context value
interface SessionContextType {
  dailyTotals: DailyMeditation[];
  addSession: (session: { date: string; duration: number }) => void;
  loading: boolean;
}

// Create the context with a default value
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Create a provider component
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [dailyTotals, setDailyTotals] = useState<DailyMeditation[]>([]);
  const [loading, setLoading] = useState(true);

  // Effect to load data from Firestore when the user logs in
  useEffect(() => {
    if (user) {
      setLoading(true);
      const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
      
      const unsubscribe = docRef.onSnapshot(doc => {
        if (doc.exists) {
          const data = doc.data();
          setDailyTotals(data?.totals || []);
        } else {
          setDailyTotals([]);
        }
        setLoading(false);
      }, error => {
        console.error("Error fetching sadhana data:", error);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      // Clear data when user logs out
      setDailyTotals([]);
      setLoading(false);
    }
  }, [user]);

  const addSession = async (session: { date: string; duration: number }) => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    let newTotals = [...dailyTotals];
    const existingEntryIndex = newTotals.findIndex(entry => entry.date === today);

    if (existingEntryIndex > -1) {
      // Create a new object for the updated entry to ensure state updates correctly
      const updatedEntry = {
        ...newTotals[existingEntryIndex],
        totalDuration: newTotals[existingEntryIndex].totalDuration + session.duration,
      };
      newTotals = [
        ...newTotals.slice(0, existingEntryIndex),
        updatedEntry,
        ...newTotals.slice(existingEntryIndex + 1),
      ];
    } else {
      // Add new entry
      newTotals.push({ date: today, totalDuration: session.duration });
    }
    
    // Set local state immediately for instant UI feedback
    setDailyTotals(newTotals);

    // Save to Firestore
    try {
      const docRef = db.collection('users').doc(user.uid).collection('sadhana').doc('dailyTotals');
      await docRef.set({ totals: newTotals });
    } catch (error) {
      console.error("Error saving sadhana data:", error);
    }
  };

  return (
    <SessionContext.Provider value={{ dailyTotals, addSession, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

// Create a custom hook to use the session context
export const useSessions = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSessions must be used within a SessionProvider');
  }
  return context;
};