"use client"
import { useState, useEffect } from "react";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const [ initialLoad, setInitialLoad ] = useState(true)
    const { user } = useFirebaseAuth()
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {setInitialLoad(false)}, 2000)
        if (!user) router.push("/")
    },[user])

    return (
        <>
        {!initialLoad ? 
        (
        <div>
            <h1>INDUCTION MOTOR MONITORING SYSTEM</h1>
        </div>
        )
        : <p>Loading...</p>
        }
        </>
    )
}

export default Dashboard