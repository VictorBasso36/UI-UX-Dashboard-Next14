"use client"
import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css';
import { DotChartOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from '@ant-design/charts';
import dynamic from 'next/dynamic';
import { Skeleton } from 'antd';


export default function Chart2() {
  const { dataCharts, loading } = DashboardContext();
  if(loading) return ''
  const reinicializacaoServidor = dataCharts?.Reinicializacao_Servidor || [];
  const labels = reinicializacaoServidor
    .map(item => item.dsDescricao)
    .filter((item): item is string => item !== null);
  
  const series = reinicializacaoServidor.map(item => item.nrQtde);
  const options: ApexOptions = {
              series: series,
              labels: labels,
              chart: {
                type: 'polarArea',
                width: '100%',
                height: 400
                
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
                position: 'bottom',
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
                breakpoint: 700,
                options: {
                  chart: {
                    width: '100%',
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
              }, 
              {
                breakpoint: 1024,
                options: {
                  chart: {
                    width: '100%',
                  },
                  legend: {
                    
                    position: 'bottom'
                  }
                }
              }
              ]
        
          
  };
  // const series = [{
  //   data: [31, 40, 28, 51, 42, 109, 100]
  // }]
  
    return (
      <ReactApexChart
      options={options}
      series={options.series}
      type="polarArea"
      height={330}
    />
    )
}