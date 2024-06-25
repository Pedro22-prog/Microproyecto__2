// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDMj6Ffuzg3MYw8XGx25txP9OdMHZtae2c",
//   authDomain: "micro2-sistemas-de-info.firebaseapp.com",
//   projectId: "micro2-sistemas-de-info",
//   storageBucket: "micro2-sistemas-de-info.appspot.com",
//   messagingSenderId: "121339066204",
//   appId: "1:121339066204:web:9a5262a902634d70db3399"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOJUx...",
  authDomain: "microproyecto2-86850.firebaseapp.com",
  projectId: "microproyecto2-86850",
  storageBucket: "microproyecto2-86850.appspot.com",
  messagingSenderId: "71807243021",
  appId: "1:71807243021:web:3a62d4623bd...",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();