// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMj6Ffuzg3MYw8XGx25txP9OdMHZtae2c",
  authDomain: "micro2-sistemas-de-info.firebaseapp.com",
  projectId: "micro2-sistemas-de-info",
  storageBucket: "micro2-sistemas-de-info.appspot.com",
  messagingSenderId: "121339066204",
  appId: "1:121339066204:web:9a5262a902634d70db3399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);