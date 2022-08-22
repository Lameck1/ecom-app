// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import services you need from the Firebase SDK
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAZOIwTWLWqIhZAEwfD9jaSqD8cRjpLIK4",
    authDomain: "ecom-cb82d.firebaseapp.com",
    projectId: "ecom-cb82d",
    storageBucket: "ecom-cb82d.appspot.com",
    messagingSenderId: "1519288007",
    appId: "1:1519288007:web:d8757b1d3fe033d06288e2",
    measurementId: "G-BDWDJWLZ49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;