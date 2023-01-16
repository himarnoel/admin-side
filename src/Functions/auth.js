import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
  import { auth, db } from "./firebase-config";
  import { setDoc, collection, doc } from "firebase/firestore";
  
  
  
  export const Logout=()=>{
    signOut(auth)
  
  }
  