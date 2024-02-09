import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { getCurrentTrend } from '@/app/services/metricService'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS } from '@/app/utils/constants'
import { useSearchParams } from 'next/navigation'
import useMinuteListener from '@/app/hooks/useMinuteListener'

interface CurrentTrendProps {
  unitID: string
  threshold?: number
}

const CurrentTrend = ({unitID, threshold = 0}: CurrentTrendProps) => {
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)
  const searchParams = useSearchParams()
  const period = searchParams.get("period") ?? "15"
  const { currentMinute } = useMinuteListener()
  
  useEffect(() => {
      getCurrentTrend(unitID, period)
        .then((res) => {
          setSeries(res.trend ?? DEFAULT_SERIES)
          setTimestamps(res.timestamps ?? DEFAULT_SERIES)
        })
  },[currentMinute, period, unitID])

  return (
    <section id="current" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Current</h2>
        <div className="flex flex-row justify-center my-4 space-x-16">
          <div className="flex flex-col">
            <span>Line 1</span>
            <span>{getValueDeltaSign(series[0].data[10], series[0].data[11])} {series[0].data[parseInt(period) + 1]}</span>
          </div>
          <div className="flex flex-col">
            <span>Line 2</span>
            <span>{getValueDeltaSign(series[1].data[10], series[1].data[11])} {series[1].data[parseInt(period) + 1]}</span>
          </div>
          <div className="flex flex-col">
            <span>Line 3</span>
            <span>{getValueDeltaSign(series[2].data[10], series[2].data[11])} {series[2].data[parseInt(period) + 1]}</span>
          </div>
        </div>
        <Trend 
          series={series}
          unit="A"
          xAxis={timestamps}
          yLabel='CURRENT (A)'
          thresholds={[
            { label: "critical", value: threshold*4 },
            { label: "critical", value: threshold*1.25 },
          ]}
          />
    </section>
  )
}

export default CurrentTrend