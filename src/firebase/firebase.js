import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDMm5kXnDWLmhdHMQzcxNfDpVy_aHg-3iY",
  authDomain: "expensify-d5b28.firebaseapp.com",
  databaseURL: "https://expensify-d5b28.firebaseio.com",
  projectId: "expensify-d5b28",
  storageBucket: "expensify-d5b28.appspot.com",
  messagingSenderId: "681864867371",
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
