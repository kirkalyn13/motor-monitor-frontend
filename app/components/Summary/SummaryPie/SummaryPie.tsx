import { chartStyles } from '@/app/utils/chartStyles'
import Chart from 'react-apexcharts'

const SummaryPie = () => {
    const series: number[] = [4,3]
    const options: ApexCharts.ApexOptions = {
        colors: [chartStyles.colors.green, chartStyles.colors.red],
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
        labels: ['Healthy', 'Alarms'],
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
                width="380" />
        </div>
    )
}

export default SummaryPie