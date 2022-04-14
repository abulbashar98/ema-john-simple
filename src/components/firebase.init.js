// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN6BFsuTVW4wj3kuDA5PIOMBSu9TFcOlk",
    authDomain: "ema-john-simple-12ef7.firebaseapp.com",
    projectId: "ema-john-simple-12ef7",
    storageBucket: "ema-john-simple-12ef7.appspot.com",
    messagingSenderId: "852941547513",
    appId: "1:852941547513:web:2da727560b9e7591b3ff28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;