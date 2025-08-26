import React, { createContext, ReactNode, useContext, useState } from 'react';

// TypeScript interface for a meditation session
interface MeditationSession {
  date: string;
  duration: number; // in seconds
}

// TypeScript interface for the context value
interface SessionContextType {
  sessions: MeditationSession[];
  addSession: (session: MeditationSession) => void;
}

// Create the context with a default value
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Create a provider component
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessions, setSessions] = useState<MeditationSession[]>([]);

  const addSession = (session: MeditationSession) => {
    setSessions(prevSessions => [session, ...prevSessions]);
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession }}>
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