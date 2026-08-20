// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw0r_52KxadQWc-1MyLlgRVTmVa180oa8",
  authDomain: "itechnova-fec14.firebaseapp.com",
  projectId: "itechnova-fec14",
  storageBucket: "itechnova-fec14.firebasestorage.app",
  messagingSenderId: "751232246819",
  appId: "1:751232246819:web:a6509193bf0636cd2ebd96",
  measurementId: "G-6N5JTF2TPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
