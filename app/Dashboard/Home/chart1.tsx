"use client"
import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import dayjs from 'dayjs';

export default function Chart1() {
  const { start, end } = DashboardContext();

  // const data = {
  //   series: [
  //     { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
  //     { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
  //     { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
  //   ],
  //   options: {
  //     chart: {
  //       type: 'bar' as const,
  //       height: 350,
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: '55%',
  //         endingShape: 'rounded',
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ['transparent'],
  //     },
  //     xaxis: {
  //       categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function (val: number) {
  //           return '$ ' + val + ' thousands';
  //         },
  //       },
  //     },
  //   },
  // };

  return (  
    <section className={styles.main} style={{
      width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      {/* <Chart options={data.options} series={data.series} type="bar" height={350} /> */}

      {start && dayjs(start).format('DD/MM/YYYY')} {' -  '}
      {end && dayjs(end).format('DD/MM/YYYY')}
    </section>
  );
}
