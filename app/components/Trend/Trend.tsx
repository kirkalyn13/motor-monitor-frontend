import Chart from 'react-apexcharts'

interface TrendProps {
    title: string,
    unit: string,
}

const Trend = ({title, unit}: TrendProps) => {
    const series = [{
        name: "Sample Trend",
        data: [230, 400, 230, 10, 100, 220, 230]
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
            type: 'datetime',
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
    <div className="text-white mx-4 md:mx-32">
        <Chart 
                className="flex justify-center align-center"
                options={options} 
                series={series} 
                type="line" 
                height={350}
                 />
    </div>
  )
}

export default Trend