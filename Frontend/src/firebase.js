// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-197be.firebaseapp.com",
  projectId: "blog-197be",
  storageBucket: "blog-197be.appspot.com",
  messagingSenderId: "78615566573",
  appId: "1:78615566573:web:ec5021b8f8df5c3a5954e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);