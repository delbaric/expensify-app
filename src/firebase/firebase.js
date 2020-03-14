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

database.ref().set({
  name: 'Chen Delbari',
  age: 26,
  isMale: true,
  location: {
    country: 'Israel',
    city: 'Beer Sheva'
  }
});

database.ref('age').set(27);
database.ref('attributes').set({
  height: 170,
  weight: 63
})