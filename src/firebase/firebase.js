import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:681864867371:web:7b16e99659e1b9b0aa446e",
  measurementId: "G-KQ40FMYYPR"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//   description: 'expnes 1',
//   note: 'this is my first expense',
//   amount: 150,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'second expense',
//   note: 'this is note',
//   amount: 100,
//   createdAt: 100000
// });

// database.ref('expenses').push({
//   description: 'number 3',
//   note: 'this is the final note',
//   amount: 999.5,
//   createdAt: 500000
// });
