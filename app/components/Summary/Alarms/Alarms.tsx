'use client'
import { useState, useEffect } from 'react'
import { Alarm } from '@/app/types/user'
import { getStatusTextColor } from '@/app/utils/helpers'
import { getAlarms } from '@/app/services/metricService'
import { METRICS_GRANULARITY } from '@/app/utils/constants'

interface AlarmsProps {
  unitID: string;
  ratedVoltage: number;
  ratedCurrent: number;
  maxTemperature: number;
}

const Alarms = ({unitID, ratedVoltage, ratedCurrent, maxTemperature}: AlarmsProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ alarms, setAlarms ] = useState<Alarm[]>([])

    useEffect(() => {
        const refresh = () => setRefreshTrigger(!refreshTrigger)
        setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
        getAlarms(unitID, ratedVoltage, ratedCurrent, maxTemperature)
          .then((res) => setAlarms(res))
    },[maxTemperature, ratedCurrent, ratedVoltage, refreshTrigger, unitID])

  return (
    <div className="w-screen md:w-1/3">
      <h3 className="w-full px-4 py-2">Alarms</h3>
      <ul className="my-4 space-y-2 text-left">
        {
          alarms.map((alarm: Alarm) => (
            <li 
              className={`ms-8 md:ms-32 ${getStatusTextColor(alarm.status, false)}`} 
              key={alarm.alarm}>
                {alarm.alarm}
            </li>
            )
          )
         }
      </ul>
    </div>
  )
}

export default Alarms