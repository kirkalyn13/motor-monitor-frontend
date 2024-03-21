'use client'
import { useState, useEffect } from 'react'
import { Alarm } from '@/app/types/user'
import { getStatusTextColor } from '@/app/utils/helpers'
import { getAlarms } from '@/app/services/metricService'
import { BiDownload } from 'react-icons/bi'
import { downloadAlarmsHistory } from '@/app/services/metricService'
import { useSearchParams } from 'next/navigation'
import { jsonToCsvWriter } from '@/app/utils/writer'
import { getCurrentTimestampString } from '@/app/utils/helpers'
import useMinuteListener from '@/app/hooks/useMinuteListener'
import Alert from '../../Alert/Alert'

interface AlarmsProps {
  unitID: string;
  ratedVoltage: number;
  ratedCurrent: number;
  maxTemperature: number;
}

const CSV_HEADERS = {
  alarm: "alarm",
  status: "severity",
  timestamp: "day,timestamp"
}

const Alarms = ({unitID, ratedVoltage, ratedCurrent, maxTemperature}: AlarmsProps) => {
    const [ alarms, setAlarms ] = useState<Alarm[]>([])
    const [ showModal, setShowModal ] = useState(false)
    const searchParams = useSearchParams()
    const period = searchParams.get("period") ?? "15"
    const { currentMinute } = useMinuteListener()

    const extractData = async (): Promise<void> => {
      downloadAlarmsHistory(unitID, ratedVoltage, ratedCurrent, maxTemperature, period)
        .then((res: any) => {
          const filename = `alarms-history-${getCurrentTimestampString()}.csv`
          const logs = [ CSV_HEADERS, ...res ]
          jsonToCsvWriter(logs, filename)
        }).catch((err) => {
          console.error(err)
        })
    }

    const showAlert = (): void => {
      if (alarms.some((alarm: Alarm) => alarm.status !== "null")) setShowModal(true)
    }

    const closeAlert = (): void => {
      setShowModal(true)
    }

    useEffect(() => {
        getAlarms(unitID, ratedVoltage, ratedCurrent, maxTemperature)
          .then((res) => setAlarms(res))
          .then(() => showAlert())
    },[currentMinute, maxTemperature, ratedCurrent, ratedVoltage, unitID])

  return (
    <>
      { !showModal && <Alert 
        message="Test Alert" 
        closeModal={() => closeAlert()}/>
      }
      <div className="w-screen md:w-1/3">
        <div className="w-full flex justify-center align-center">
          <h3 className="px-4 py-2">Alarms</h3>
          <BiDownload 
            title="Extract Alarms History"
            className="text-3xl mt-1 py-1 hover:text-amber-500"
            onClick={() => extractData()}
            />
        </div>
        <ul className="my-4 space-y-2 text-left">
          { alarms ?
            alarms.map((alarm: Alarm) => (
              <li 
                className={`ms-8 md:ms-32 ${getStatusTextColor(alarm.status, false)}`} 
                key={alarm.alarm}>
                  {alarm.alarm}
              </li>
              )
            ) : null
          }
        </ul>
      </div>
    </>
  )
}

export default Alarms