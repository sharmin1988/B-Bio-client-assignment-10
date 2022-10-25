// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjP9T_BkuJZZgI4TCul1f5WzJTCwKVbtA",
  authDomain: "b-bio-client.firebaseapp.com",
  projectId: "b-bio-client",
  storageBucket: "b-bio-client.appspot.com",
  messagingSenderId: "591666679563",
  appId: "1:591666679563:web:3941eb49adb86dc4a01c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app