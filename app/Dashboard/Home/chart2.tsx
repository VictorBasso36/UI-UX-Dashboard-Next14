"use client"
import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import dayjs from 'dayjs';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from '@ant-design/charts';
import dynamic from 'next/dynamic';


export default function Chart2() {
  const { start, end } = DashboardContext();
  const options: ApexOptions = {
              series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
   
              chart: {
                type: 'polarArea',
              },
              stroke: {
                colors: ['#fff']
              },
              fill: {
                opacity: 0.8
              },
              grid: {
                show: false
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
              },
              legend: {
                horizontalAlign: 'center', 
                fontSize: '15pt',
                fontFamily: 'var(--Public_Sans)!important',
                itemMargin: {
                  horizontal: 20,
                },
                markers: {
                  width: 10,
                  height: 10,
                  strokeWidth: 0,
                  strokeColor: '#fff',
                  fillColors: undefined,
                  radius: 12,
                  customHTML: undefined,
                  onClick: undefined,
                  offsetX: 0,
                  offsetY: 0
                },
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    horizontalAlign: 'center', 
                    markers: {
                      width: 10,
                      height: 10,
                      strokeWidth: 0,
                      strokeColor: '#fff',
                      fillColors: undefined,
                      radius: 12,
                      customHTML: undefined,
                      onClick: undefined,
                      offsetX: 0,
                      offsetY: 0
                    },
                    position: 'bottom'
                  }
                }
              }]
        
          
  };
  // const series = [{
  //   data: [31, 40, 28, 51, 42, 109, 100]
  // }]
  
    return (
      <ReactApexChart
      options={options}
      series={options.series}
      type="polarArea"
      height={350}
    />
    )
}