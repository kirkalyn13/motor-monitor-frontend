import React from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'

const series: Metrics[] = [{
    name: "Temperature",
    data: [50,55,52,53,58,65,77,80,97,102,103,102]
}]

const xAxis = ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00"]

interface TemperatureTrendProps {
    threshold: number
}

const TemperatureTrend = ({threshold}: TemperatureTrendProps) => {
  return (
    <section id="temperature" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Temperature</h2>
        <Trend series={series} unit="°C" threshold={threshold} xAxis={xAxis} yLabel='TEMPERATURE (°C)'/>
    </section>
  )
}

export default TemperatureTrend