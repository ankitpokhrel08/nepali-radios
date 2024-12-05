/* eslint-disable react/prop-types */
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbgWt5aIN6C0JdM80_jwW6vCVCZT9Xxhs",
  authDomain: "nepali-radio-e0929.firebaseapp.com",
  projectId: "nepali-radio-e0929",
  storageBucket: "nepali-radio-e0929.firebasestorage.app",
  messagingSenderId: "1087494122753",
  appId: "1:1087494122753:web:6562ff0613dd4189877f00",
  measurementId: "G-0GFLKVYPB0",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react-refresh/only-export-components
export const firebaseAuth = getAuth(firebaseApp);
// eslint-disable-next-line react-refresh/only-export-components
export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const signupUser = (email, password) => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((value) => {
        console.log("User signed up successfully:", value);
        alert("Signup successful!");
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        alert(error.message);
      });
  };

  const signupWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((result) => {
        console.log("User signed up with Google:", result);
        alert("Signup successful!");
      })
      .catch((error) => {
        console.error("Error during signup with Google:", error);
        alert(error.message);
      });
  };

  const loginUser = (firebaseAuth,email,password) => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((value) => {
        console.log("User Login successfully:", value);
        alert("Login successful!");
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert(error.message);
      });
  };

  return (
    <FirebaseContext.Provider value={{ signupUser, signupWithGoogle,loginUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
