"use client"
import { useState, useEffect } from "react";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation';
import { isObjectNotEmpty } from "../utils/helpers";

const Dashboard = () => {
    const [ initialLoad, setInitialLoad ] = useState(true)
    const { logout, user } = useFirebaseAuth()
    const router = useRouter()

    const handleLogout = () => {
        logout()
            .then(() => {
                router.push("/login")
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        setTimeout(() => {setInitialLoad(false)}, 2000)
        console.log(user)
        if (!user) router.push("/")
    },[user])

    return (
        <>
        {!initialLoad ? 
        (
        <div>
            <h1>INDUCTION MOTOR MONITORING SYSTEM</h1>
            <h4> User Logged In: </h4>
            {user?.email}
            <button onClick={() => handleLogout()}> Sign Out </button>
        </div>
        )
        : <p>Loading...</p>
        }
        </>
    )
}

export default Dashboard