import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEdvYRemfkaPRcd-9cX1XgZTLiLWOGqZs",
  authDomain: "crwn-clothing-f0a37.firebaseapp.com",
  databaseURL: "https://crwn-clothing-f0a37.firebaseio.com",
  projectId: "crwn-clothing-f0a37",
  storageBucket: "crwn-clothing-f0a37.appspot.com",
  messagingSenderId: "189788365610",
  appId: "1:189788365610:web:85883dbee3b5051968f453"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;