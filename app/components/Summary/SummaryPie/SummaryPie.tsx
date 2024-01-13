'use client'
import { useState, useEffect } from "react"
import { MetricsSummarySeries } from '@/app/types/metrics';
import { chartStyles } from '@/app/utils/chartStyles'
import { METRICS_GRANULARITY, DEFAULT_SUMMARY_SERIES } from '@/app/utils/constants';
import dynamic from 'next/dynamic'
import { getMetricsSummary } from "@/app/services/metricService";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SummaryPieProps {
  unitID: string;
  ratedVoltage: number;
  ratedCurrent: number;
  maxTemperature: number;
}

const SummaryPie = ({unitID, ratedVoltage, ratedCurrent, maxTemperature}: SummaryPieProps) => {
    const [refreshTrigger, setRefreshTrigger] = useState(false)
    const [ summary, setSummary ] = useState<MetricsSummarySeries>(DEFAULT_SUMMARY_SERIES)

    useEffect(() => {
        const refresh = () => setRefreshTrigger(!refreshTrigger)
        setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
        getMetricsSummary(unitID, ratedVoltage, ratedCurrent, maxTemperature)
          .then((res) => setSummary(res))
    },[maxTemperature, ratedCurrent, ratedVoltage, refreshTrigger, unitID]) 

    const options: ApexCharts.ApexOptions = {
        colors: [chartStyles.colors.green, chartStyles.colors.amber, chartStyles.colors.red],
        plotOptions:{
          pie:{
            donut:{
              labels:{
                show:true,
                name:{
                  show: true,
                },
                value:{
                  show: true,
                  color: chartStyles.colors.white
                },
                total:{
                  label: "Total Metrics",
                  show: true,
                  color: chartStyles.colors.white
                }
              }
            },
          },
        },
        labels: ['Normal', 'Warning', 'Critical'],
        responsive: [{
          breakpoint: chartStyles.breakpoint,
          options: {
            chart: {
              width: chartStyles.sizes.pieWidth,
              height:  chartStyles.sizes.pieHeight
            },
          }
        }],
        stroke:{
            colors:[chartStyles.colors.bg]
        },
        legend: {
            position: 'bottom',
            labels:{
              colors: chartStyles.colors.white
            }
          },
        tooltip: {
            y: {
              formatter: function (val: number) {
                return  val + ` metric${val !== 1 ? "s" : ""}`
              }
            }
          }
      }

    return (
        <div className="w-screen md:w-1/3 text-center">
            <h3 className="w-full px-4 py-2">Metrics Summary</h3>
            <Chart 
                className="flex justify-center align-center z-1 my-8"
                options={options} 
                series={summary?.summary ?? DEFAULT_SUMMARY_SERIES.summary} 
                type="donut" 
                width="350"
                height="350" />
        </div>
    )
}

export default SummaryPie