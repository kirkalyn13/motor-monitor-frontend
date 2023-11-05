import React from 'react'
import SummaryTable from './SummaryTable/SummaryTable'
import Alarms from './Alarms/Alarms'
import SummaryPie from './SummaryPie/SummaryPie'
import { UserData } from '@/app/types/user'

interface SummaryProps {
  userData: UserData
}

const Summary = ({userData}: SummaryProps) => {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-center align-center py-8 space-y-8 md:space-y-0">
        <SummaryTable unitID={userData?.user.motors[0] ? userData?.user.motors[0].unitID : null} />
        <SummaryPie />
        <Alarms alarms={userData?.user.alarms}/>
    </section>
  )
}

export default Summary