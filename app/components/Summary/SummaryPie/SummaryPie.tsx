import Chart from 'react-apexcharts'

const SummaryPie = () => {
    const series: number[] = [4,3]
    const options: ApexCharts.ApexOptions = {
        colors: ['#4CAF50', '#F44336'],
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
                  color: '#FFFFFF'
                },
                total:{
                  label: "Total Metrics",
                  show: true,
                  color: '#FFFFFF'
                }
              }
            },
          },
        },
        labels: ['Healthy', 'Alarms'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300
            },
          }
        }],
        stroke:{
            colors:['#1E293B']
        },
        legend: {
            position: 'bottom',
            labels:{
              colors: ["#FFFFFF", "#FFFFFF"]
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