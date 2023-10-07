// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFizx0dZIEvNW1yfKRMS44SzPj4xvI2fA",
  authDomain: "realtor-clone-react-e7fcd.firebaseapp.com",
  projectId: "realtor-clone-react-e7fcd",
  storageBucket: "realtor-clone-react-e7fcd.appspot.com",
  messagingSenderId: "214067409509",
  appId: "1:214067409509:web:43367d09a93c0351ae4c8c",
  measurementId: "G-SENSN2WXSH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();