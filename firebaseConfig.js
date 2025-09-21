import appCheck from '@react-native-firebase/app-check';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Initialize App Check
appCheck().activate('production', true);

export const authInstance = auth();
export const db = firestore();