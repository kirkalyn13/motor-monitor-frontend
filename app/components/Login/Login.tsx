"use client"
import useFirebaseAuth from '@/app/hooks/useFirebaseAuth';
import React from 'react'

const Login = () => {
    const { setLoginEmail, setLoginPassword, login } = useFirebaseAuth()

    return (
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
    )
}

export default Login