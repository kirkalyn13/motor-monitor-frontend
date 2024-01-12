import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS, METRICS_GRANULARITY } from '@/app/utils/constants'
import { getTemperatureTrend } from '@/app/services/metricService'
import { useSearchParams } from 'next/navigation'

interface TemperatureTrendProps {
    unitID: string
    threshold?: number
}

const TemperatureTrend = ({unitID, threshold = 0}: TemperatureTrendProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)
  const searchParams = useSearchParams()

  useEffect(() => {
      const refresh = () => setRefreshTrigger(!refreshTrigger)
      const period = searchParams.get("period") ?? "15"
      setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
      getTemperatureTrend(unitID, period)
        .then((res) => {
          setSeries(res.trend ?? DEFAULT_SERIES)
          setTimestamps(res.timestamps ?? DEFAULT_SERIES)
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
        <Trend 
          series={series} 
          unit="°C"
          xAxis={timestamps}
          yLabel='TEMPERATURE (°C)'
          thresholds={[
            { label: "critical", value: threshold },
            { label: "warning", value: threshold*0.9 }
          ]}
            />
    </section>
  )
}

export default TemperatureTrend