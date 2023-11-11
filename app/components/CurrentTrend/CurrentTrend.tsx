import React from 'react'
import Trend from '../Trend/Trend'
import { Metrics } from '@/app/types/metrics'
import { getValueDeltaSign } from '@/app/utils/helpers'

const series: Metrics[] = [{
    name: "Line 1 Current",
    data: [10,11,10,10,11,10,10,11,10,12,9,97]
},
{
  name: 'Line 2 Current',
  data: [13,12,11,12,9,10,9,23,50,45,64,0]
},
{
  name: "Line 3 Current",
  data: [10,9,10,10,9,10,5,2,1,0,0,0]
}]

const xAxis = ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00"]

const CurrentTrend = () => {
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
        <Trend series={series} unit="A" threshold={50} xAxis={xAxis} yLabel='CURRENT (A)'/>
    </section>
  )
}

export default CurrentTrend