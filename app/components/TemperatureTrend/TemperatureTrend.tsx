import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS, METRICS_GRANULARITY } from '@/app/utils/constants'
import { getTemperatureTrend } from '@/app/services/metricService'

interface TemperatureTrendProps {
    unitID: string
    threshold?: number
}

const TemperatureTrend = ({unitID, threshold = 50}: TemperatureTrendProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)

  useEffect(() => {
      const refresh = () => setRefreshTrigger(!refreshTrigger)
      setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
      getTemperatureTrend(unitID)
        .then((res) => {
          console.log(res)
          setSeries(res.trend)
          setTimestamps(res.timestamps)
        })
  },[ refreshTrigger,])

  return (
    <section id="temperature" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Temperature</h2>
        <div className="flex flex-row justify-center my-4 space-x-16">
          <div className="flex flex-col">
            <span>Overall</span>
            <span>{getValueDeltaSign(series[0].data[10], series[0].data[11])} {series[0].data[11]}</span>
          </div>
        </div>
        <Trend series={series} unit="°C" threshold={threshold} xAxis={timestamps} yLabel='TEMPERATURE (°C)'/>
    </section>
  )
}

export default TemperatureTrend