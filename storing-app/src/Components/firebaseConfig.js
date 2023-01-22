// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfpNZ0FzrUYxpbYQlQdKVbMeRt-AdeYw",
  authDomain: "storage-solution-842ae.firebaseapp.com",
  databaseURL: "https://storage-solution-842ae-default-rtdb.firebaseio.com",
  projectId: "storage-solution-842ae",
  storageBucket: "storage-solution-842ae.appspot.com",
  messagingSenderId: "723689189815",
  appId: "1:723689189815:web:c9d9197476d0850ebc7832",
  measurementId: "G-4JPVCBMZ5J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);