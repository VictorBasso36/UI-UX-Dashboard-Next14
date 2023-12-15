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
  const { start, end } = DashboardContext();
  const annotations = [];
  const data = [
    {
      type: 'Ligue taxi-1',
      sales: 38,
    },
    {
      type: 'Ligue taxi-2',
      sales: 52,
    },
    {
      type: 'Ligue taxi-3',
      sales: 61,
    },
    {
      type: 'Ligue taxi-4',
      sales: 145,
    },
    {
      type: 'Ligue taxi-5',
      sales: 48,
    },
    {
      type: 'Ligue taxi-6',
      sales: 38,
    },
    {
      type: 'Ligue taxi-7',
      sales: 38,
    },
    {
      type: 'Ligue taxi-8',
      sales: 38,
    },
  ];

  const options: ApexOptions = {

        
      series: [{
        name: 'Chamados por cliente',
        data: [2, 3, 4, 10, 4, 33, 3, 2, 1, 3, 20, 10]
      }],
      grid: {
        show: false
      },
      chart: {
        toolbar: {
          show: false
        },
        
        width: '100%',
        height: '400px',
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
        formatter: function (val) {
          return val + "k";
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
        
        categories: ["Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi", "Ligue taxi"],
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
            return val + "k";
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
      }
    }
  
  
  
      
    
   

  return ( 
  
    <div style={{width: '100%', marginLeft: '20px', marginRight: '20px', }}>
      <ReactApexChart
          options={options}
          series={options.series}
          type="bar"
          height={350}
          />
    </div>
  )
  
}