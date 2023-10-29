"use client"
import { useState, useEffect } from "react"
import { getUserData } from "../services/userService"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { User } from "../types/user"
import { FiSettings } from 'react-icons/fi'
import SettingsModal from "../components/SettingsModal/SettingsModal"
import Divider from "../components/Divider/Divider"

const Dashboard = () => {
    const [ userData, setUserData ] = useState<User>()
    const [ showSettingsModal, setShowSettingsModal ] = useState<boolean>(false)
    const { user } = useFirebaseAuth()

    useEffect(() => {
        if (!user?.email) return
        getUserData(user?.email)
                .then((res) => {
                    setUserData(res)
                }).catch((err) => console.error(err))
    },[user])

    return (
        <div className="pt-32 flex flex-col text-center space-y-2 bg-slate-800 text-white h-screen">
            { showSettingsModal ? <SettingsModal userData={userData!} closeModal={() => setShowSettingsModal(false)}/> : null}
            <div className="text-left space-y-1 mb-2">
                <div className="flex">
                    <h1 className="text-4xl text-left ms-8 md:ms-16">Dashboard</h1>
                    <FiSettings 
                        className="text-3xl ms-4 my-1 hover:text-amber-500"
                        onClick={() => setShowSettingsModal(true)}/>
                </div>
                <div className="flex mt-2">
                    <span className="text-xl text-left ms-8 md:ms-16">Welcome, </span>
                    <span className="text-xl text-left ms-2 text-amber-500">{userData?.firstName ?? "..."} {userData?.lastName ?? "..."}</span>
                </div>
                <span className="text-md text-left ms-8 md:ms-16">{userData?.company ?? null}</span>
            </div>
            <div className="mx-8"><Divider /></div>
        </div>
    )
}

export default Dashboard