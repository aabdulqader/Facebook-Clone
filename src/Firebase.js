import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC444xGg7uO2mpOJ9BN1uvzeiN9NQ8nRvs",
  authDomain: "facebook-clone-93154.firebaseapp.com",
  projectId: "facebook-clone-93154",
  storageBucket: "facebook-clone-93154.appspot.com",
  messagingSenderId: "250309251703",
  appId: "1:250309251703:web:e4b38e7f2eb72f37fcec72",
  measurementId: "G-V4E0DK7ECV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
