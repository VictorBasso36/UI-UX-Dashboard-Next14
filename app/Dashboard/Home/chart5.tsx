"use client"
import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import dayjs from 'dayjs';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from '@ant-design/charts';
import dynamic from 'next/dynamic';


export default function Chart5() {
  const { start, end } = DashboardContext();
  const options: ApexOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      width: '90%'
    },
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '90%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
         
  };
    return (
      <ReactApexChart
      options={options}
      series={options.series}
      type="donut"
      height={320}
    />
    )
}