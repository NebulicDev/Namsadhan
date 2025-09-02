// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// // Your web client ID from google-services.json
// const WEB_CLIENT_ID = '124322613000-7ifkvsv3nkhl1mb2vcbdhkouk77nm20m.apps.googleusercontent.com';

// GoogleSignin.configure({
//   webClientId: WEB_CLIENT_ID,
// });

// export const authInstance = auth();
// export const db = firestore();


// nebulicdev/namsadhan/Namsadhan-feature-auth/firebaseConfig.js

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const authInstance = auth();
export const db = firestore();