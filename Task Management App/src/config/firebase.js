// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setun up#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWFTF6IXs6WkIeK82TjQefuVH4ouQYf7s",
  authDomain: "todo-5e980.firebaseapp.com",
  projectId: "todo-5e980",
  storageBucket: "todo-5e980.appspot.com",
  messagingSenderId: "178251877436",
  appId: "1:178251877436:web:6fae9b25cf75554d350739"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth();