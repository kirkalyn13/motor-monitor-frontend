"use client"
import { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import "./Registration.css";
import { auth } from "@/firebase-config";

const useFirebaseAuth = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser: any) => {
          setUser(currentUser);
        });
    },[])

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error: any) {
          console.error(error.message);
        }
      };
    
      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error: any) {
          console.error(error.message);
        }
      };
    
      const logout = async () => {
        await signOut(auth);
      };

      return {
        register, 
        login, 
        logout, 
        setRegisterEmail, 
        setRegisterPassword, 
        setLoginEmail, 
        setLoginPassword, 
        user
    }
}

export default useFirebaseAuth