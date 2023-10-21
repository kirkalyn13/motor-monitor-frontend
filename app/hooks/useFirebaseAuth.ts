"use client"
import { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase-config";

const useFirebaseAuth = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState<any>({});
    const [error, setError] = useState("")

    const disableRegister =  registerEmail.trim() === "" || registerPassword === ""|| registerPassword.length < 8
    const disableLogin =  loginEmail.trim() === "" || loginPassword === ""|| loginPassword.length < 8

    useEffect(() => {
        setError("")
        onAuthStateChanged(auth, (currentUser: any) => {
          setUser(currentUser);
        });
    },[])

    const register = async () => {   
        setError("")
        try {
          await createUserWithEmailAndPassword(
            auth,
            registerEmail.trim(),
            registerPassword.trim()
          );
        } catch (error: any) {
          console.error(error.message)
          setError(error.message)
          throw new Error(error.message)
        }
      };
    
      const login = async () => {
        setError("")
        try {
          await signInWithEmailAndPassword(
            auth,
            loginEmail.trim(),
            loginPassword.trim()
          );
        } catch (error: any) {
          console.error(error.message)
          setError(error.message)
          throw new Error(error.message)
        }
      };
    
      const logout = async () => {
        setError("")
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
        user,
        error,
        setError
      }
}

export default useFirebaseAuth