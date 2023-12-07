import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import dayjs from 'dayjs';
import { Column, Line, ColumnConfig } from '@ant-design/charts';
import { Col } from 'antd';
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
  
  const config: ColumnConfig = {
    data,
    
    xField: 'type',
    yField: 'sales',
    padding: [50],
    columnStyle: {
      radius: [12, 12, 0, 0],
    

    },
    label: {
      position: 'top',
      //rotate: -340,
      style: {
        fontSize: 20,
        
      },
      content: ({ sales }) => `${sales}k`,
    },
    xAxis: {
      grid: null,
      label: {
        autoHide: true,
        autoRotate: false,
        //rotate: 320,
       
      },
     
    },
    yAxis: {
      grid: null,
     

    },
    legend: false,
    meta: {
      type: {
        alias: 'sales',
      },
      sales: {
        alias: 'Ligue Táxi',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 40,
    seriesField: 'type',
    color:['#e9e7fd','#7367f0'],
    
  };
  return <Column {...config} />;
 
  
}