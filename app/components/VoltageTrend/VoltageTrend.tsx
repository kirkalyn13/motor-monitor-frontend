import React from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'

const series: Metrics[] = [{
    name: "Line 1 Voltage",
    data: [230, 229, 231, 230, 230, 228, 230, 231, 231, 230, 240, 321]
},
{
    name: 'Line 2 Voltage',
    data: [232, 232, 228, 229, 229, 228, 234, 245, 256, 260, 287, 0]
},
{
    name: "Line 3 Voltage",
    data: [231, 229, 232, 231, 231, 225, 125, 54, 12, 23, 2, 3]
}]

const xAxis = ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00"]

const VoltageTrend = () => {
  return (
    <section id="voltage" className="h-screen my-4 flex flex-col justify-center align-center">
        <h2 className="text-xl my-2">Voltage</h2>
        <Trend series={series} unit="V" threshold={250} xAxis={xAxis} yLabel='VOLTAGE (V)'/>
    </section>
  )
}

export default VoltageTrend