'use client'
import { chartStyles } from '@/app/utils/chartStyles'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series: number[] = [4,1,2]

const SummaryPie = () => {
    // TODO: Add fetch for latest data for each metrics
    // TODO: REST API to array of metrics summary
    // [4,1,2]  

    const options: ApexCharts.ApexOptions = {
        colors: [chartStyles.colors.blue, chartStyles.colors.amber, chartStyles.colors.red],
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
            <h3 className="w-full px-4 py-2">Summary</h3>
            <Chart 
                className="flex justify-center align-center z-1"
                options={options} 
                series={series} 
                type="donut" 
                width="350"
                height="350" />
        </div>
    )
}

export default SummaryPie