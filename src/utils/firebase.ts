import * as firebase from 'firebase/app';

export function setupFirebase() {
    // Get firebaseConfig from firebase console
    const firebaseConfig = {};

    console.log('Firebase set up');

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}