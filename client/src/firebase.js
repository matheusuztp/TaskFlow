// client/src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlFBODBRpFNJy7566g6eAXnn7bbHDSAyA",
  authDomain: "taskflow-magu.firebaseapp.com",
  projectId: "taskflow-magu",
  storageBucket: "taskflow-magu.firebasestorage.app",
  messagingSenderId: "29138436970",
  appId: "1:29138436970:web:515b05bc18c073b76f9b13",
  measurementId: "G-7E1DYE3299"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };