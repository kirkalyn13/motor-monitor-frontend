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

    const disableRegister =  registerEmail === "" || registerPassword === ""|| registerPassword.length < 8
    const disableLogin =  loginEmail === "" || loginPassword === ""|| loginPassword.length < 8

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
        } catch (error: any) {
          console.error(error.message);
        }
      };
    
      const logout = async () => {
        await signOut(auth);
      };

      const authenticate = {
        register,
        login,
        logout,
        registerEmail,
        registerPassword,
        setRegisterEmail, 
        setRegisterPassword, 
        loginEmail,
        loginPassword,
        setLoginEmail, 
        setLoginPassword,
      }

      const disable = {
        register: disableRegister,
        login: disableLogin,
      }

      return {
        authenticate, 
        disable,
        user
      }
}

export default useFirebaseAuth