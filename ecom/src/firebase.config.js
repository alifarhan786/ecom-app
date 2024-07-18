// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAur1J2y57rA2hI1786TCro1hoJJSnbR5U",
  authDomain: "chicloomapp.firebaseapp.com",
  projectId: "chicloomapp",
  storageBucket: "chicloomapp.appspot.com",
  messagingSenderId: "988872822379",
  appId: "1:988872822379:web:0137a891a55650ede7eb2e",
  measurementId: "G-XQDYWMS00F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);