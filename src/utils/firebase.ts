import * as firebase from 'firebase/app';

export function setupFirebase() {
    const firebaseConfig = {};

    console.log('Firebase set up');

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}