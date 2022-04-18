// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF0rjZX6-ebgAdIV0FeGoec54JDmV5-Es",
  authDomain: "crick-tutor.firebaseapp.com",
  projectId: "crick-tutor",
  storageBucket: "crick-tutor.appspot.com",
  messagingSenderId: "508719256675",
  appId: "1:508719256675:web:38f33992cbd8cdd6975456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;