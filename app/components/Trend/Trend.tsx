'use client'
import { Metrics, Threshold } from '@/app/types/metrics'
import { chartStyles } from '@/app/utils/chartStyles'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TrendProps {
    series: Metrics[],
    unit: string,
    thresholds: Threshold[],
    xAxis: string[],
    yLabel: string
}

const getThresholdStyle = (label: string): string => label === "warning" ? chartStyles.colors.amber : chartStyles.colors.red
const getThresholdLabel = (label: string): string => label === "warning" ? "Warning" : "Critical"

const Trend = ({series, unit, thresholds, xAxis, yLabel}: TrendProps) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
          },
          annotations: {
            yaxis: thresholds.map((threshold: Threshold):YAxisAnnotations => ({
                  y: threshold.value,
                  borderColor: getThresholdStyle(threshold.label),
                  label: {
                    borderColor: getThresholdStyle(threshold.label),
                    style: {
                      color: chartStyles.colors.white,
                      background: getThresholdStyle(threshold.label)
                    },
                    text: getThresholdLabel(threshold.label)
                  }
            }))
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
              offsetX: -4,
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
            categories: xAxis,
            tickAmount: 6,
            labels: {
              hideOverlappingLabels: true,
              offsetY: -4,
              rotate: 270,
              style: {
                colors: chartStyles.colors.white,
                fontSize: chartStyles.fonts.sizes.xAxis
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