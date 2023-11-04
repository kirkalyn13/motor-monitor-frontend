import { Metrics } from '@/app/types/metrics'
import Chart from 'react-apexcharts'

interface TrendProps {
    metricName: string,
    unit: string,
}

const Trend = ({metricName, unit}: TrendProps) => {
    const series: Metrics[] = [{
        name: metricName,
        data: [230, 400, 230, 10, 100, 220, 230]
    },
    {
      name: metricName + "2",
      data: [230, 230, 230, 0, 0, 220, 230]
    },
    {
      name: metricName + "2",
      data: [220, 100, 230, 230, 200, 230, 230]
    }]
    const options: ApexCharts.ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
            foreColor: '#4CAF50',
          },
          annotations: {
            yaxis: [
              {
                y: 300,
                borderColor: '#FFA000',
                label: {
                  borderColor: '#FFA000',
                  style: {
                    color: '#fff',
                    background: '#FFA000'
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
              colors: ["000000"]
            }
          },
          xaxis: {
            // type: 'datetime',
            categories: [0,100,200,300,400,500],
            labels: {
              style: {
                colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]
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
    <div className="text-black mx-4 md:mx-32">
        <Chart 
                className="flex justify-center align-center z-0"
                options={options} 
                series={series} 
                type="line" 
                height={350}
                 />
    </div>
  )
}

export default Trend