import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { getVoltageTrend } from '@/app/services/metricService'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS } from '@/app/utils/constants'
import { useSearchParams } from 'next/navigation'
import useMinuteListener from '@/app/hooks/useMinuteListener'

interface VoltageTrendProps {
  unitID: string
  threshold?: number
}

const VoltageTrend = ({unitID, threshold = 0}: VoltageTrendProps) => {
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)
  const searchParams = useSearchParams()
  const period = searchParams.get("period") ?? "15"
  const { currentMinute } = useMinuteListener()

  useEffect(() => {
      getVoltageTrend(unitID, period)
        .then((res) => {
          setSeries(res.trend ?? DEFAULT_SERIES)
          setTimestamps(res.timestamps ?? DEFAULT_SERIES)
        })
  },[currentMinute, period, unitID])

  return (
    <section id="voltage" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Voltage</h2>
        <div className="flex flex-row justify-center my-4 space-x-16">
          <div className="flex flex-col">
            <span>Phase 1</span>
            <span>{getValueDeltaSign(series[0].data[10], series[0].data[11])} {series[0].data[11]}</span>
          </div>
          <div className="flex flex-col">
            <span>Phase 2</span>
            <span>{getValueDeltaSign(series[1].data[10], series[1].data[11])} {series[1].data[11]}</span>
          </div>
          <div className="flex flex-col">
            <span>Phase 3</span>
            <span>{getValueDeltaSign(series[2].data[10], series[2].data[11])} {series[2].data[11]}</span>
          </div>
        </div>
        <Trend 
          series={series} 
          unit="V" 
          xAxis={timestamps} 
          yLabel='VOLTAGE (V)'
          thresholds={[
            { label: "critical", value: threshold*0.85 },
            { label: "critical", value: threshold*1.15 },
            { label: "warning", value: threshold*0.9 },
            { label: "warning", value: threshold*1.1 }
          ]} 
          />
    </section>
  )
}

export default VoltageTrend