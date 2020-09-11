import firebase from 'firebase'

const firebaseConfig = {
  development: {
    apiKey: "AIzaSyD6WEsUXyWL4b-pkg6Qt-YE6K153GAjzCQ",
    authDomain: "my-project-1527060076661.firebaseapp.com",
    databaseURL: "https://my-project-1527060076661.firebaseio.com",
    projectId: "my-project-1527060076661",
    storageBucket: "my-project-1527060076661.appspot.com",
    messagingSenderId: "183852513522",
    appId: "1:183852513522:web:0f8ead00ee8a4b8fc6b86b"
  }
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig.development)
}

const db = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()

export {
  firebaseConfig,
  db,
  auth,
  database,
}
