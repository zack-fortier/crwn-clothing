import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCmchn8JB0UMMa0IkI4zHcLcsR6N5HfV0Y",
  authDomain: "crwn-db-7de3e.firebaseapp.com",
  databaseURL: "https://crwn-db-7de3e-default-rtdb.firebaseio.com",
  projectId: "crwn-db-7de3e",
  storageBucket: "crwn-db-7de3e.appspot.com",
  messagingSenderId: "316098153572",
  appId: "1:316098153572:web:fd574cd3fc6f74bef2e371",
  measurementId: "G-0YCYVJMTNW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
