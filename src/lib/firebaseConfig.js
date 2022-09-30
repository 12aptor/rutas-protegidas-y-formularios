import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrGZFByHHuzQ8ieIdaJHvWLpkmTO4DGD0",
  authDomain: "rutas-protegidas-20897.firebaseapp.com",
  projectId: "rutas-protegidas-20897",
  storageBucket: "rutas-protegidas-20897.appspot.com",
  messagingSenderId: "654992665710",
  appId: "1:654992665710:web:158afc4b214d4fe73e0a7f",
  measurementId: "G-ZF0Q2TJYBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Analytics
const analytics = getAnalytics(app);