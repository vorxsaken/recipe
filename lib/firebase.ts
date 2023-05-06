// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgxPChl-ejqXWYSDXCrvavH3fRTGyHh5M",
  authDomain: "recipe-app-a0c98.firebaseapp.com",
  projectId: "recipe-app-a0c98",
  storageBucket: "recipe-app-a0c98.appspot.com",
  messagingSenderId: "387093613927",
  appId: "1:387093613927:web:af65bb041c547aa5bc33c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage }
