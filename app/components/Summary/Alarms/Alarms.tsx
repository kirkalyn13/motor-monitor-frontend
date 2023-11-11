import { Alarm } from '@/app/types/user'
import React from 'react'

interface AlarmsProps {
  alarms: Alarm[]
}

const Alarms = ({alarms = []}: AlarmsProps) => {
  const renderTextColor = (status: string): string => {
    switch (status) {
      case "normal":
        return ""
      case "warning":
        return "font-bold text-amber-500"
      case "critical":
        return "font-bold text-red-500"
      default:
        return ""
    }
  }

  return (
    <div className="w-screen md:w-1/3">
      <h3 className="w-full px-4 py-2">Alarms</h3>
      <ul className="my-4 space-y-2 text-left">
        {
          alarms.map((alarm: Alarm) => <li className={`ms-8 md:ms-32 ${renderTextColor(alarm.status)}`} key={alarm.alarm}>{alarm.alarm}</li>)
        }
      </ul>
    </div>
  )
}

export default Alarms