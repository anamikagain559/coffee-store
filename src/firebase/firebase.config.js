// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3TX6EGq7y_ThB5CJ0lGFOpWaybvanU_A",
  authDomain: "coffee-project-d8e39.firebaseapp.com",
  projectId: "coffee-project-d8e39",
  storageBucket: "coffee-project-d8e39.appspot.com",
  messagingSenderId: "493729403187",
  appId: "1:493729403187:web:d0be83f1a80d422f35ae46",
  measurementId: "G-6H3E0M9PXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
