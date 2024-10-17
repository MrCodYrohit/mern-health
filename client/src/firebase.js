// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-health.firebaseapp.com",
  projectId: "mern-health",
  storageBucket: "mern-health.appspot.com",
  messagingSenderId: "239190749666",
  appId: "1:239190749666:web:e5f14cc75018b8eaa609bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);