import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQks5eDUFA-R5-i8E4A6zNIY83qWxEfbk",
  authDomain: "react-netflix-clone-21.firebaseapp.com",
  projectId: "react-netflix-clone-21",
  storageBucket: "react-netflix-clone-21.appspot.com",
  messagingSenderId: "1069322717380",
  appId: "1:1069322717380:web:b8e54296ee7e251fc36191",
  measurementId: "G-WYMYJSP4WL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
