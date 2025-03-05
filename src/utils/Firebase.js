// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNYPGcyu0nBCzRhsuCMViAJbVgbmD6n4",
  authDomain: "netflix-1729.firebaseapp.com",
  projectId: "netflix-1729",
  storageBucket: "netflix-1729.firebasestorage.app",
  messagingSenderId: "368431033949",
  appId: "1:368431033949:web:12abb890b07e8e8f7aa7b4",
  measurementId: "G-S57QE9HGYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
