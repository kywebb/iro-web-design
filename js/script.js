// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAeG1wTCdxuIyB5EjIkNPd2IdxESEUffA",
  authDomain: "iro-web-design.firebaseapp.com",
  projectId: "iro-web-design",
  storageBucket: "iro-web-design.firebasestorage.app",
  messagingSenderId: "865404156100",
  appId: "1:865404156100:web:a9c2d883f8c821a2c0f191",
  measurementId: "G-KNQ84PKTTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);