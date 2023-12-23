"use client"
import React from 'react';
import { DashboardContext } from '../layoutProvider';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


export default function Chart5() {
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
      type: 'donut',
      width: '100%'
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
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
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