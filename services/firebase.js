import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   production: {
//     apiKey: "AIzaSyDR021s6EtXJT5kJorB3aAnOtJbepjTh5k",
//     authDomain: "ertert-1527060416924.firebaseapp.com",
//     databaseURL: "https://ertert-1527060416924.firebaseio.com",
//     projectId: "ertert-1527060416924",
//     storageBucket: "ertert-1527060416924.appspot.com",
//     messagingSenderId: "1010749182769",
//     appId: "1:1010749182769:web:3ff7b22f1ccd7ef7"
//   },
//   development: {
//     apiKey: "AIzaSyD6WEsUXyWL4b-pkg6Qt-YE6K153GAjzCQ",
//     authDomain: "my-project-1527060076661.firebaseapp.com",
//     databaseURL: "https://my-project-1527060076661.firebaseio.com",
//     projectId: "my-project-1527060076661",
//     storageBucket: "my-project-1527060076661.appspot.com",
//     messagingSenderId: "183852513522",
//     appId: "1:183852513522:web:0f8ead00ee8a4b8fc6b86b"
//   }
// };


const firebaseConfig = {
  apiKey: "AIzaSyD6WEsUXyWL4b-pkg6Qt-YE6K153GAjzCQ",
  authDomain: "my-project-1527060076661.firebaseapp.com",
  databaseURL: "https://my-project-1527060076661.firebaseio.com",
  projectId: "my-project-1527060076661",
  storageBucket: "my-project-1527060076661.appspot.com",
  messagingSenderId: "183852513522",
  appId: "1:183852513522:web:0f8ead00ee8a4b8fc6b86b"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '';

// const app = firebase.initializeApp(firebaseConfig);
//
export const db = firebase.firestore();
// const database = firebase.database();
export const auth = firebase.auth();
// const storage = firebase.storage();

