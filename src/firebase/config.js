// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  }  from 'firebase/auth'
import { getFirestore }  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWpdCCFIWvUW-ZGqAhEC3_Nk8y_g-lYrE",
  authDomain: "doffot-defi.firebaseapp.com",
  projectId: "doffot-defi",
  storageBucket: "doffot-defi.appspot.com",
  messagingSenderId: "1023687569964",
  appId: "1:1023687569964:web:146f66a8a1f02c6e98d789"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp)

export const Db = getFirestore(FirebaseApp)
