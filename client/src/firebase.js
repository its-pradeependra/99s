// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "fir-india-77ae4.firebaseapp.com",
    projectId: "fir-india-77ae4",
    storageBucket: "fir-india-77ae4.appspot.com",
    messagingSenderId: "130694258818",
    appId: "1:130694258818:web:db4ea4542b426b84a7949b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const formDatabase = getFirestore()