'use client'
import { Metrics } from '@/app/types/metrics'
import { chartStyles } from '@/app/utils/chartStyles'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TrendProps {
    series: Metrics[],
    unit: string,
    threshold: number,
    xAxis: string[],
    yLabel: string
}

const Trend = ({series, unit, threshold, xAxis, yLabel}: TrendProps) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
          },
          annotations: {
            yaxis: [
              {
                y: threshold,
                borderColor: chartStyles.colors.red,
                label: {
                  borderColor: chartStyles.colors.red,
                  style: {
                    color: chartStyles.colors.white,
                    background: chartStyles.colors.red
                  },
                  text: 'Treshold'
                }
              }
            ]
          },
          dataLabels: {
            enabled: false
          },
          grid:{
            borderColor: chartStyles.colors.gray
          },
          yaxis:{
            title: {
              text: yLabel,
              offsetX: -8,
              style: {
                color: chartStyles.colors.white,
                fontSize: chartStyles.fonts.sizes.yLabel,
              }
            },
            labels:{
              style:{
                colors: [chartStyles.colors.white]
              }
            }
          },
          stroke: {
            curve: 'smooth'
          },
          legend:{
            labels:{
              colors: [chartStyles.colors.white, chartStyles.colors.white, chartStyles.colors.white]
            }
          },
          xaxis: {
            // type: 'datetime',
            categories: xAxis,
            labels: {
              style: {
                colors: chartStyles.colors.white
              }
            }
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return  val + ` ${unit}`
              }
            }
          },
        }

  return (
    <div className="text-black mx-2 md:mx-32">
        <Chart 
                className="flex justify-center align-center z-0"
                options={options} 
                series={series} 
                type="line" 
                height="500"
                width="100%"
                 />
    </div>
  )
}

export default Trend