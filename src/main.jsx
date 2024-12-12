import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuye53Yt2LtKAjdFXnznY7k8XCQxqLaU8",
  authDomain: "licorpro-c80fe.firebaseapp.com",
  projectId: "licorpro-c80fe",
  storageBucket: "licorpro-c80fe.firebasestorage.app",
  messagingSenderId: "750050061268",
  appId: "1:750050061268:web:d355468418a44fbe89c441",
  measurementId: "G-7LHNFKFZ28"
};

// Initialize Firebase

initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
