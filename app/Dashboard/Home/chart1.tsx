"use client"
import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './chart1.module.css';
import { Pie, PieConfig } from '@ant-design/charts';
import { ApexOptions } from "apexcharts";
import ReactApexChart from 'react-apexcharts';

export default function Chart1() {
  const { dataCharts, loading } = DashboardContext();
  if(loading) return ''
  const Chamados_Telefone = dataCharts?.Chamados_Telefone || [];
  const Chamados_Whatsapp = dataCharts?.Chamados_Whatsapp || [];
  const sumChamados_Whatsapp = Chamados_Whatsapp.reduce((total, chamado) => total + chamado.nrQtde, 0);
  const sumChamados_Telefone = Chamados_Telefone.reduce((total, chamado) => total + chamado.nrQtde, 0);
  
  // console.log(`Total de Chamados_Whatsapp: ${sumChamados_Whatsapp}`);
  // console.log(`Total de Chamados_Telefone: ${sumChamados_Telefone}`);

  const totalChamados = sumChamados_Telefone | 0 + sumChamados_Whatsapp | 0;

  const percentualChamados_Telefone = ((sumChamados_Telefone / totalChamados) * 100).toFixed(2);
  const percentualChamados_Whatsapp = ((sumChamados_Whatsapp / totalChamados) * 100).toFixed(2);

  const windowWidth = window.innerWidth;
  const chartSize = windowWidth < 600 ? 180 : 250;
  const series = [
    Number(percentualChamados_Telefone),
    Number(percentualChamados_Whatsapp),
  ];

  const options: ApexOptions = {
    series: series,
    labels: ['Telefone', 'Whatsapp'],
    chart: {
      type: 'donut',
      width: '350px'
    },
    colors:['#5d596c','#7367f0'],
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'center', 
      fontSize: '15pt',
      fontFamily: 'var(--Public_Sans)!important',
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
  <>
    <div className={styles.contentDiv}>
      <div className={styles.grid}>
        <h2>{sumChamados_Telefone + sumChamados_Whatsapp}</h2>
        <p>Total geral de atendimentos</p>
        <div className={styles.iconsHere}>
          <div className={styles.contentDataIcon}>
            <div className={styles.Icon} style={{backgroundColor: '#e9e7fd'}}>
              {icons[1]}
            </div>
            <div className={styles.Text}>
              <h3>Telefone</h3>
              <p>{sumChamados_Telefone | 0}</p>
            </div>

          </div>
          <div className={styles.contentDataIcon}>
            <div className={styles.Icon} style={{backgroundColor: '#cfd3ec'}}>
              {icons[0]}
            </div>
            <div className={styles.Text}>
              <h3>Whatsapp</h3>
              <p>{sumChamados_Whatsapp| 0}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chartHere}>
        <ReactApexChart
          options={options}
          series={options.series}
          type="donut"
          height={320}
        />
      </div>
           
    </div>  
  </>
  )
}


const icons = [
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="800"
  fill="#5d596c"
  stroke="#5d596c"
  viewBox="0 0 32 32"
  >
    <path d="M26.576 5.363a14.818 14.818 0 00-10.511-4.354C7.856 1.009 1.2 7.664 1.2 15.874c0 2.732.737 5.291 2.022 7.491l-.038-.07-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h.006c8.209-.003 14.862-6.659 14.862-14.868a14.82 14.82 0 00-4.349-10.507h0zM16.062 28.228h-.005-.001c-2.319 0-4.489-.64-6.342-1.753l.056.031-.451-.267-4.675 1.227 1.247-4.559-.294-.467a12.23 12.23 0 01-1.889-6.565c0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353-5.53 12.353-12.353 12.353h0zm6.776-9.251c-.371-.186-2.197-1.083-2.537-1.208-.341-.124-.589-.185-.837.187-.246.371-.958 1.207-1.175 1.455-.216.249-.434.279-.805.094a10.23 10.23 0 01-2.997-1.852l.01.009a11.236 11.236 0 01-2.037-2.521l-.028-.052c-.216-.371-.023-.572.162-.757.167-.166.372-.434.557-.65.146-.179.271-.384.366-.604l.006-.017a.678.678 0 00-.033-.653l.002.003c-.094-.186-.836-2.014-1.145-2.758-.302-.724-.609-.625-.836-.637-.216-.01-.464-.012-.712-.012-.395.01-.746.188-.988.463l-.001.002a4.153 4.153 0 00-1.299 3.102v-.004a7.233 7.233 0 001.527 3.857l-.012-.015a16.693 16.693 0 006.251 5.564l.094.043c.548.248 1.25.513 1.968.74l.149.041a5.103 5.103 0 002.368.143l-.031.004a3.837 3.837 0 002.497-1.749l.009-.017a3.122 3.122 0 00.214-1.784l.003.019c-.092-.155-.34-.247-.712-.434z"></path>
  </svg>,
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        stroke="#826bf8"
        viewBox="0 0 24 24"
      >
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M14.33 15.94l1.33-1.33a2.202 2.202 0 013.13 0l1.56 1.56a2.198 2.198 0 010 3.13l-.71.72a3.3 3.3 0 01-3.82.63A28.93 28.93 0 013.35 8.19a3.29 3.29 0 01.64-3.82l.71-.72a2.22 2.22 0 013.13 0L9.4 5.22a2.22 2.22 0 010 3.13L8.07 9.68a30.081 30.081 0 002.89 3.36c1.04 1.04 2.156 2 3.34 2.87l.03.03zM18.21 8.84a3.939 3.939 0 00-3-3.05M22 7.51A8 8 0 0016.5 2"></path>
        </g>
      </svg>
]