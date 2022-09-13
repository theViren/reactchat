import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGj5xrJJwbZI4IYfQyJlUWtGVEjkngdI4",
  authDomain: "reactchat-d795e.firebaseapp.com",
  projectId: "reactchat-d795e",
  storageBucket: "reactchat-d795e.appspot.com",
  messagingSenderId: "678763210376",
  appId: "1:678763210376:web:4ca2a6132d87e17a07a13d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
