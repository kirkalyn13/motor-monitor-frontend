"use client"
import { useState, useEffect } from "react"
import { getUserData } from "../services/userService"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { UserData } from "../types/user"
import { FiSettings } from 'react-icons/fi'
import SettingsModal from "../components/SettingsModal/SettingsModal"
import Divider from "../components/Divider/Divider"
import Summary from "../components/Summary/Summary"
import VoltageTrend from "../components/VoltageTrend/VoltageTrend"
import CurrentTrend from "../components/CurrentTrend/CurrentTrend"
import TemperatureTrend from "../components/TemperatureTrend/TemperatureTrend"
import SetupNotice from "../components/SetupNotice/SetupNotice"
import Extract from "../components/Extract/Extract"

const Dashboard = () => {
    const [ userData, setUserData ] = useState<UserData>()
    const [ showSettingsModal, setShowSettingsModal ] = useState<boolean>(false)
    const { user } = useFirebaseAuth()

    useEffect(() => {
        if (!user?.email) return
        getUserData(user?.email)
                .then((res) => {
                    setUserData(res)
                }).catch((err) => console.error(err))
    }, [ user, showSettingsModal ])

    const renderDashboardWithSetup = () => (
        userData?.user.motors.length !== 0 ?
        <>
            <Summary userData={userData!}/>
            <Divider />
            <VoltageTrend 
                unitID={userData!.user.motors[0].unitID}
                threshold={userData?.user.motors[0] ? userData?.user.motors[0].ratedVoltage : 0}/>
            <Divider />
            <CurrentTrend 
                unitID={userData!.user.motors[0].unitID}
                threshold={userData?.user.motors[0] ? userData?.user.motors[0].ratedCurrent : 0}/>
            <Divider />
            <TemperatureTrend 
                unitID={userData!.user.motors[0].unitID}
                threshold={userData?.user.motors[0] ? userData?.user.motors[0].maxTemperature : 0}/>
            <Divider /> 
        </>
        : <SetupNotice />
    )

    return (
        <div className="pt-32 flex flex-col text-center space-y-2 bg-slate-800 text-white">
            { showSettingsModal ? <SettingsModal userData={userData!} closeModal={() => setShowSettingsModal(false)}/> : null}
            <div className="flex flex-col md:flex-row justify-between align-center">
                <div className="text-left space-y-1 mb-2">
                    <div className="flex">
                        <h1 className="text-4xl text-left ms-8 md:ms-16">Dashboard</h1>
                        <FiSettings
                            title="Settings" 
                            className="text-3xl ms-4 my-1 hover:text-amber-500"
                            onClick={() => setShowSettingsModal(true)}/>
                    </div>
                    <div className="flex mt-2">
                        <span className="text-xl text-left ms-8 md:ms-16">Welcome, </span>
                        <span className="text-xl text-left ms-2 text-amber-500">{userData?.user.firstName ?? "..."} {userData?.user.lastName ?? "..."}</span>
                    </div>
                    <span className="text-md text-left ms-8 md:ms-16">{userData?.user.company ?? null}</span>
                </div>
                <Extract />
            </div>
            <Divider />
            {!userData ? <section className="h-screen" /> : renderDashboardWithSetup()}  
        </div>
    )
}

export default Dashboard