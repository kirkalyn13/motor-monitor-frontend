'use client';
import { useState, useEffect } from "react";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth";


function Registration() {
  const {
    register, 
        login, 
        logout, 
        setRegisterEmail, 
        setRegisterPassword, 
        setLoginEmail, 
        setLoginPassword, 
        user
  } = useFirebaseAuth()

  return (
    <div className="Registration">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Registration;