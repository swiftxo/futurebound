// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "futurebound-7951d.firebaseapp.com",
  projectId: "futurebound-7951d",
  storageBucket: "futurebound-7951d.appspot.com",
  messagingSenderId: "717389058794",
  appId: "1:717389058794:web:582b0987d3250348c2bd93",
  measurementId: "G-LW0YF9YZXY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
