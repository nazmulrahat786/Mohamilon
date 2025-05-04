// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZJ3ZocfyaofrqsyB-V8agYbigBq5QcFA",
  authDomain: "mohamilomn.firebaseapp.com",
  projectId: "mohamilomn",
  storageBucket: "mohamilomn.firebasestorage.app",
  messagingSenderId: "781281815170",
  appId: "1:781281815170:web:76fa0872c7ef350083629b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);