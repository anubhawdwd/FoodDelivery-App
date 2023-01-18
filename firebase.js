// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_NATIVE_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_NATIVE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_NATIVE_APP_MESSAGING_SENDER,
  appId: REACT_NATIVE_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBR5Cn14dySe4jSx0SUxYF8Kj3-LaJbzi0",
//   authDomain: "fooddelivery-50379.firebaseapp.com",
//   projectId: "fooddelivery-50379",
//   storageBucket: "fooddelivery-50379.appspot.com",
//   messagingSenderId: "326528659387",
//   appId: "1:326528659387:web:d16280e5f74f0a15989e9e",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
