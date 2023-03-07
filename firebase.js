// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD8mfa8OU3ESNPQQRimWDOt9yK7mSa_mY",
  authDomain: "reveal-379911.firebaseapp.com",
  projectId: "reveal-379911",
  storageBucket: "reveal-379911.appspot.com",
  messagingSenderId: "592698089350",
  appId: "1:592698089350:web:e95232e5b8c9405ff41607",
  measurementId: "G-G2B1VG6VEP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app)

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }