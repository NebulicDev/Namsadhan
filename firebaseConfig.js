import { getApp, getApps, initializeApp } from '@react-native-firebase/app';
import { initializeAppCheck } from '@react-native-firebase/app-check'; // Removed PlayIntegrityProvider import to fix crash
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

// 1. Initialize the Firebase App
let app;
try {
  if (getApps().length === 0) {
    console.log('[Firebase] Initializing new app instance...');
    app = initializeApp({});
  } else {
    console.log('[Firebase] Using existing app instance...');
    app = getApp();
  }
} catch (error) {
  console.error('[Firebase] App initialization failed:', error);
}

// 2. Initialize App Check
// We use the default provider factory which handles Play Integrity automatically on Android
try {
  if (app) {
    console.log('[Firebase] Initializing App Check...');
    initializeAppCheck(app, {
      provider: 'playIntegrity', // Use the string identifier or let it default
      isTokenAutoRefreshEnabled: true,
    });
    console.log('[Firebase] App Check initialized successfully.');
  }
} catch (error) {
  console.error('[Firebase] App Check failed to initialize (Proceeding without it):', error);
}

// 3. Initialize Auth and Firestore
let authInstance;
let db;

try {
  authInstance = getAuth(app);
  console.log('[Firebase] Auth initialized.');
} catch (e) {
  console.error('[Firebase] Auth init failed:', e);
}

try {
  db = getFirestore(app);
  console.log('[Firebase] Firestore initialized.');
} catch (e) {
  console.error('[Firebase] Firestore init failed:', e);
}

export { app, authInstance, db };

