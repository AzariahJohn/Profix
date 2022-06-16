// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt42ggeVmAVnlVE9npQ__rQPB5VsnV4A4",
  authDomain: "profix-a5a0b.firebaseapp.com",
  projectId: "profix-a5a0b",
  storageBucket: "profix-a5a0b.appspot.com",
  messagingSenderId: "810475261792",
  appId: "1:810475261792:web:a6281ec08e49e161999805",
  measurementId: "G-B1WKGTTB73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
