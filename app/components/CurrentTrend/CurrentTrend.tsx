import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { getCurrentTrend } from '@/app/services/metricService'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS, METRICS_GRANULARITY } from '@/app/utils/constants'

interface CurrentTrendProps {
  unitID: string
  threshold?: number
}

const CurrentTrend = ({unitID, threshold = 0}: CurrentTrendProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)

  useEffect(() => {
      const refresh = () => setRefreshTrigger(!refreshTrigger)
      setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
      getCurrentTrend(unitID)
        .then((res) => {
          setSeries(res.trend ?? DEFAULT_SERIES)
          setTimestamps(res.timestamps ?? DEFAULT_SERIES)
        })
  },[ refreshTrigger,])

  return (
    <section id="current" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Current</h2>
        <div className="flex flex-row justify-center my-4 space-x-16">
          <div className="flex flex-col">
            <span>Line 1</span>
            <span>{getValueDeltaSign(series[0].data[10], series[0].data[11])} {series[0].data[11]}</span>
          </div>
          <div className="flex flex-col">
            <span>Line 2</span>
            <span>{getValueDeltaSign(series[1].data[10], series[1].data[11])} {series[1].data[11]}</span>
          </div>
          <div className="flex flex-col">
            <span>Line 3</span>
            <span>{getValueDeltaSign(series[2].data[10], series[2].data[11])} {series[2].data[11]}</span>
          </div>
        </div>
        <Trend series={series} unit="A" threshold={threshold} xAxis={timestamps} yLabel='CURRENT (A)'/>
    </section>
  )
}

export default CurrentTrend