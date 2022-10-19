// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeyOhWIy095zUID669QnS5jxUhI0hsUpY",
    authDomain: "dragon-news-496e7.firebaseapp.com",
    projectId: "dragon-news-496e7",
    storageBucket: "dragon-news-496e7.appspot.com",
    messagingSenderId: "903765438120",
    appId: "1:903765438120:web:31b9665cdf32c952a1dc9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;