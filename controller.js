// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVUiNILG6_fjWgWtITVKpP5uUgjfvDAA",
  authDomain: "mobile2025-7a879.firebaseapp.com",
  projectId: "mobile2025-7a879",
  storageBucket: "mobile2025-7a879.firebasestorage.app",
  messagingSenderId: "586932741291",
  appId: "1:586932741291:web:8f1f10693f717ae28903ee"
};
//oi brayan :)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);