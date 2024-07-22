// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1tuAXTa9t64jv_WiHH0qU6rOW5MAVAM",
  authDomain: "acerta-leads.firebaseapp.com",
  projectId: "acerta-leads",
  storageBucket: "acerta-leads.appspot.com",
  messagingSenderId: "1077898079489",
  appId: "1:1077898079489:web:aa83aeb1a415d97c5f7f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtenha as instâncias do Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };