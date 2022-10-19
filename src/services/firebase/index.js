import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7sz8hG3tVMam-X-RzGXD4vuUJZspe8u4",
    authDomain: "app-felkie.firebaseapp.com",
    projectId: "app-felkie",
    storageBucket: "app-felkie.appspot.com",
    messagingSenderId: "328376992879",
    appId: "1:328376992879:web:85e30ee1509e69d81bf99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);