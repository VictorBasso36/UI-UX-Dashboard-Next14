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

export default function Chart6() {
  const { start, end } = DashboardContext();
  const annotations = [];

  const options: ApexOptions = {

        
    series: [{
        name: 'N Atribuido',
        data: [44, 55, 57]
      }, 
      {
        name: 'S Resolução',
        data: [76, 85, 101]
      }, 
      {
        name: 'Att Recentemente',
        data: [35, 41, 36]
      }, 
      {
        name: 'Pendentes',
        data: [35, 41, 36]
      },
       {
        name: 'Resolvido',
        data: [35, 41, 36]
      }],
      grid: {
        show: true,
        strokeDashArray: 10
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
          borderRadius: 4,
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "k";
        },
        offsetY: -30,
        style: {
          fontSize: '12pt',
          fontFamily: 'var(--Public_Sans)!important',
          colors: ["#5d596c"]
        }
        
      },
      
      colors:['#7367f0', '#28c76f', '#ff9f43', '#00cfe8', '#5d596c'],
      xaxis: {
        
        categories: ["Iago", "Leo", "Gui"],
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
            fontSize: '10pt',
            fontFamily: 'var(--Public_Sans)!important',
            colors: ["#5d596c"]
          },
          show: true,
          formatter: function (val) {
            return val + "";
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
  
  
  
      
    
   

  return ( 
 
      <ReactApexChart
          options={options}
          series={options.series}
          type="bar"
          height={350}
          />
  
  )
  
}