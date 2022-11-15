// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcruGMHDLAvmASmpaJRM8it1e3EvqT36Y",
  authDomain: "burger-join.firebaseapp.com",
  projectId: "burger-join",
  storageBucket: "burger-join.appspot.com",
  messagingSenderId: "109533126356",
  appId: "1:109533126356:web:20a7f5e86b82c364212541",
  measurementId: "G-MPMBPJBFKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);