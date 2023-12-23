import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import dayjs from 'dayjs';
import { Column, Line, ColumnConfig } from '@ant-design/charts';
import { Col } from 'antd';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { withTheme } from '@emotion/react';


// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   PointElement,
//   LineElement,
//   BarElement,
// } from "chart.js";
// import { Chart } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   BarElement
// );

export default function Chart3() {
  const { dataCharts, loading } = DashboardContext();
  if(loading) return ''
  const Chamados_Cliente = dataCharts?.Chamados_Cliente || [];
  const chartData = Chamados_Cliente.map((item) => ({
    type: item.dsDescricao,
    sales: item.nrQtde,
  }));  


  const options: ApexOptions = {

        
      series: [{
        name: 'Chamados por cliente',
        data: chartData.map((item) => item.sales),
      }],
      grid: {
        show: false
      },
      chart: {
        toolbar: {
          show: false
        },
        
        width: '100%',
        height: '300px',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          // columnWidth: 40,
          borderRadius: 10,
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          if (val < 1000) {
              return val + ''; // Return the number as is if it's less than 1000
          } else if (val < 100000) {
              return (val / 1000).toFixed(1) + "k"; // Convert to 'k' format and keep 1 decimal place if it's less than 100000
          } else {
              return (val / 1000) + 'k'; // Convert to ''k'' format if it's greater than or equal to 100000
          }
        },
        offsetY: -30,
        style: {
          fontSize: '15pt',
          fontFamily: 'var(--Public_Sans)!important',
          colors: ["#5d596c"]
        }
        
      },
 
      colors:['#7367f0'],
      xaxis: {
        
        categories: chartData.map((item) => item.type),
        position: 'left',
        axisBorder: {
          show: true
        },
        labels: {
          rotate: -45,
          style: {
            fontSize: '10pt',
            cssClass: '.labelMainChart3',
            fontFamily: 'var(--Public_Sans)!important',
            colors: ["#5d596c"]},
            rotateAlways: false,
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        
        tooltip: {
          enabled: false,
        }
      },
      
      yaxis: {
        axisBorder: {
          show: false
        },
    
        labels: {
          style:{
            fontSize: '15pt',
            fontFamily: 'var(--Public_Sans)!important',
            colors: ["#5d596c"]
          },
          show: true,
          formatter: function (val) {
            if (val < 1000) {
                return val + ''; // Return the number as is if it's less than 1000
            } else if (val < 100000) {
                return (val / 1000).toFixed(1) + ""; // Convert to 'k' format and keep 1 decimal place if it's less than 100000
            } else {
                return (val / 1000) + ''; // Convert to ''k'' format if it's greater than or equal to 100000
            }
          }
        }
      
      },
      
      title: {
        text: '',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      responsive: [{
        breakpoint: 700,
        options: {
          grid: {
            show: false
          },
          chart: {
            width: '100%',
            height: '300px',
            toolbar: {
              show: false
            },
            type: 'bar',
          },
          plotOptions: {
            bar: {
              // columnWidth: 40,
              borderRadius: 10,
              borderRadiusApplication: 'end',
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          
          dataLabels: {
            enabled: true,
            formatter: function (val: number) {
              if (val < 1000) {
                  return val + ''; // Return the number as is if it's less than 1000
              } else if (val < 100000) {
                  return (val / 1000).toFixed(1) + "k"; // Convert to 'k' format and keep 1 decimal place if it's less than 100000
              } else {
                  return (val / 1000) + "k"; // Convert to 'k' format if it's greater than or equal to 100000
              }
            },
            offsetY: -30,
            style: {
              fontSize: '8pt',
              fontFamily: 'var(--Public_Sans)!important',
              colors: ["#5d596c"]
            }
            
          },
     
          colors:['#7367f0'],
          xaxis: {
            
             position: 'left',
            axisBorder: {
              show: true
            },
            labels: {
              rotate: -90,
              style: {
                fontSize: '10pt',
                cssClass: '.labelMainChart3',
                fontFamily: 'var(--Public_Sans)!important',
                colors: ["#5d596c"]},
                rotateAlways: false,
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            
            tooltip: {
              enabled: false,
            }
          },
          
          yaxis: {
            axisBorder: {
              show: false
            },
        
            labels: {
              style:{
                fontSize: '6pt',
                fontFamily: 'var(--Public_Sans)!important',
                colors: ["#5d596c"]
              },
              show: true,
              formatter: function (val: number) {
                if (val < 1000) {
                    return val + ''; // Return the number as is if it's less than 1000
                } else if (val < 100000) {
                    return (val / 1000).toFixed(1) + "k"; // Convert to 'k' format and keep 1 decimal place if it's less than 100000
                } else {
                    return (val / 1000) + "k"; // Convert to 'k' format if it's greater than or equal to 100000
                }
              }
            }
          
          },
          
          title: {
            text: '',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          },
        }
      }]
    }
  
  
   const isMobile = window.innerWidth < 550;
  return <ReactApexChart
        style={{width:'100%'}}
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />

  
  
}