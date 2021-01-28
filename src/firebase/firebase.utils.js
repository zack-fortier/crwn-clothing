// Configures the Firebase utilities 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Configuring Firebase
const config = {
    apiKey: "AIzaSyCmchn8JB0UMMa0IkI4zHcLcsR6N5HfV0Y",
    authDomain: "crwn-db-7de3e.firebaseapp.com",
    projectId: "crwn-db-7de3e",
    storageBucket: "crwn-db-7de3e.appspot.com",
    messagingSenderId: "316098153572",
    appId: "1:316098153572:web:fd574cd3fc6f74bef2e371",
    measurementId: "G-0YCYVJMTNW"
}

// Initializing Firebase
firebase.initializeApp(config);

// Accessing Firebase authentication and database
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Exporting entire Firebase library
export default firebase;