import { useState, useEffect } from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'
import { getVoltageTrend } from '@/app/services/metricService'
import { DEFAULT_SERIES, DEFAULT_TIMESTAMPS, METRICS_GRANULARITY } from '@/app/utils/constants'
import { useSearchParams } from 'next/navigation'

interface VoltageTrendProps {
  unitID: string
  threshold?: number
}

const VoltageTrend = ({unitID, threshold = 0}: VoltageTrendProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ series, setSeries ] = useState<Metrics[]>(DEFAULT_SERIES)
  const [ timestamps, setTimestamps ] = useState<string[]>(DEFAULT_TIMESTAMPS)
  const searchParams = useSearchParams()
  const period = searchParams.get("period") ?? "15"

  useEffect(() => {
      const refresh = () => setRefreshTrigger(!refreshTrigger)
      setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
      getVoltageTrend(unitID, period)
        .then((res) => {
          setSeries(res.trend ?? DEFAULT_SERIES)
          setTimestamps(res.timestamps ?? DEFAULT_SERIES)
        })
  },[period, refreshTrigger, unitID])

  return (
    <section id="voltage" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Voltage</h2>
        <div className="flex flex-row justify-center my-4 space-x-16">
          <div className="flex flex-col">
            <span>Phase 1</span>
            <span>{getValueDeltaSign(series[0].data[10], series[0].data[11])} {series[0].data[parseInt(period) + 1]}</span>
          </div>
          <div className="flex flex-col">
            <span>Phase 2</span>
            <span>{getValueDeltaSign(series[1].data[10], series[1].data[11])} {series[1].data[parseInt(period) + 1]}</span>
          </div>
          <div className="flex flex-col">
            <span>Phase 3</span>
            <span>{getValueDeltaSign(series[2].data[10], series[2].data[11])} {series[2].data[parseInt(period) + 1]}</span>
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