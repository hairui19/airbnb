// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5dJGIsxlyU3PA34sNLdf3S9Z6J1zH5zw",
  authDomain: "reveal-2-6737d.firebaseapp.com",
  projectId: "reveal-2-6737d",
  storageBucket: "reveal-2-6737d.appspot.com",
  messagingSenderId: "192111851410",
  appId: "1:192111851410:web:c23ca58b7abee60f57734b",
  measurementId: "G-Q8VS2PWK3K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }