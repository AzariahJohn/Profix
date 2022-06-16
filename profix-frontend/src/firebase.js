// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHECtJ-GL40cWrjM2Uyv7_oiQIZhMblE",
  authDomain: "profix-client.firebaseapp.com",
  projectId: "profix-client",
  storageBucket: "profix-client.appspot.com",
  messagingSenderId: "689523635671",
  appId: "1:689523635671:web:3bd1b42d2d412cfeeec792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();