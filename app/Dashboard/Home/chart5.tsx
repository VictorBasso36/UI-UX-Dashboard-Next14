import React from 'react';
import { DashboardContext } from '../layoutProvider';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function Chart5() {
  const { dataCharts, loading } = DashboardContext();
  if(loading) return '';
  const ticketresumo = dataCharts?.ticketresumo || [];

  // Assuming 'data' is the array of objects from your API
  const labels = ['N Atribuido', 'S Resolução', 'Att Recentemente', 'Pendentes', 'Resolvido'];
  const series = labels.map(label => {
    return ticketresumo.reduce((total, item) => {
      if (label === 'N Atribuido') return total + item.dsNaoAtribuido;
      if (label === 'S Resolução') return total + item.dsSemResolucao;
      if (label === 'Att Recentemente') return total + item.dsAtualizado;
      if (label === 'Pendentes') return total + item.dsPendente;
      if (label === 'Resolvido') return total + item.dsResolvido;
      return total;
    }, 0);
  });

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
      formatter: function(seriesName: any, opts: any) {
        return `${opts.w.globals.series[opts.seriesIndex]} - ${seriesName}`;
      },    
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
