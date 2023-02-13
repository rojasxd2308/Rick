// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQyQ26qUMCdbasQoDsmUVI5v61ygtboo",
  authDomain: "prueba-e3160.firebaseapp.com",
  projectId: "prueba-e3160",
  storageBucket: "prueba-e3160.appspot.com",
  messagingSenderId: "974569712408",
  appId: "1:974569712408:web:26e99d6f15ac59342d0c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);