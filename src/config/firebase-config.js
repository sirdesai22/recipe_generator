import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "recipe-generator-abe4c.firebaseapp.com",
  projectId: "recipe-generator-abe4c",
  storageBucket: "recipe-generator-abe4c.appspot.com",
  messagingSenderId: "190583356797",
  appId: "1:190583356797:web:bdd48d0bf370ffdacf6014",
  measurementId: "G-8PE4X5QH72"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 
export const storage = getStorage(app); 
