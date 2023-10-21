"use client"
import { useState, useEffect } from "react";
import { getUserData } from "../services/userService";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { User } from "../types/user";

const Dashboard = () => {
    const [ userData, setUserData ] = useState<User>()
    const { user } = useFirebaseAuth()

    useEffect(() => {
        if (!user || !user.email) return
        getUserData(user?.email)
                .then((res) => {
                    setUserData(res)
                }).catch((err) => console.error(err))
    },[user])

    return (
        <div className="flex flex-col space-y-2">
            <h1>INDUCTION MOTOR MONITORING SYSTEM</h1>
            <span>First Name: {userData?.firstName ?? "..."}</span>
            <span>Last Name: {userData?.lastName ?? "..."}</span>
            <span>Company: {userData?.company ?? "N/A"}</span>
            <span>Motors:</span>
            <ul>
                {userData?.motors.map((motor: string) => <li key={motor}>{motor}</li>)}
            </ul>
            <span>Alarms:</span>
            <ul>
                {userData?.alarms.map((alarm: string) => <li key={alarm}>{alarm}</li>)}
            </ul>
        </div>
    )
}

export default Dashboard