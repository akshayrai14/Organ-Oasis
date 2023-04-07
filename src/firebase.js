// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  // apiKey: "AIzaSyDgU0upORxDto3cxPEwm9EJkQKEkXvVPrM",
  // authDomain: "rentcycle-9fa18.firebaseapp.com",
  // projectId: "rentcycle-9fa18",
  // storageBucket: "rentcycle-9fa18.appspot.com",
  // messagingSenderId: "888016524572",
  // appId: "1:888016524572:web:f070713ca379b446c716d9",
  // measurementId: "G-1T6HT4JV2G"
  apiKey: "AIzaSyCzRIsnFpznmHmTfXO2xXbOWceoUguvCBY",
  authDomain: "organ-oasis.firebaseapp.com",
  projectId: "organ-oasis",
  storageBucket: "organ-oasis.appspot.com",
  messagingSenderId: "750689994299",
  appId: "1:750689994299:web:6816fdaa34d3e5e2a33e1e",
  measurementId: "G-NFD2BM5VHW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;