import { Metrics } from '@/app/types/metrics'
import Chart from 'react-apexcharts'

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
            foreColor: '#4CAF50',
          },
          annotations: {
            yaxis: [
              {
                y: threshold,
                borderColor: '#F44336',
                label: {
                  borderColor: '#F44336',
                  style: {
                    color: '#fff',
                    background: '#F44336'
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
            borderColor: '#455A64'
          },
          yaxis:{
            title: {
              text: yLabel,
              offsetX: -8,
              style: {
                color: "#ffffff",
                fontSize: "16px",
              }
            },
            labels:{
              style:{
                colors: ["#FFFFFF"]
              }
            }
          },
          stroke: {
            curve: 'smooth'
          },
          legend:{
            labels:{
              colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            }
          },
          xaxis: {
            // type: 'datetime',
            categories: xAxis,
            labels: {
              style: {
                colors: "#FFFFFF"
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
                height={400}
                 />
    </div>
  )
}

export default Trend