"use client"
import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './chart1.module.css';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from '@ant-design/charts';
import dynamic from 'next/dynamic';
import { Skeleton } from 'antd';


export default function Chart2() {
  const { dataCharts, loading } = DashboardContext();
  if(loading) return ''
  const reinicializacaoServidor = dataCharts?.Reinicializacao_Servidor || [];
      // Primeiro, agrupe os itens por dsDescricao
    const grouped = reinicializacaoServidor.reduce((acc: any, item: any) => {
      acc[item.dsDescricao] = (acc[item.dsDescricao] || 0) + item.nrQtde;
      return acc;
    }, {});

    // Em seguida, transforme o objeto agrupado de volta em um array
    const reducedItems = Object.entries(grouped).map(([dsDescricao, nrQtde]: any) => ({ dsDescricao, nrQtde }));

    // Para o total geral, você pode somar todos os nrQtde em reducedItems
    const totalGeral = reducedItems.reduce((sum: any, item: any) => sum + item.nrQtde, 0);
    const labels = reducedItems.map(item => item.dsDescricao);
    const series = reducedItems.map(item => item.nrQtde);
    
    const options: ApexOptions = {
      series: series,
      labels: labels,
              chart: {
                type: 'pie',
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
                show: false,
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


    return (
      <>
      <div className={styles.contentDiv}>
      <div className={styles.grid}>
        <h2>{totalGeral}</h2>
        <p>Total geral de reinicialização</p>
        <div className={styles.iconsHere}>
          {
            reducedItems.map((item, index) => {
              return (
                <div key={index} className={styles.contentDataIcon}>
                  <div className={styles.Icon} style={{backgroundColor: '#e9e7fd'}}>
                    {icons[0]}
                  </div>
                  <div className={styles.Text}>
                    <h3>{item.dsDescricao}</h3>
                    <p>{item.nrQtde}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.chartHere}>
        <ReactApexChart
        options={options}
        series={options.series}
        type="pie"
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
  fill="none"
  viewBox="0 0 24 24"
>
  <g>
    <path
      fill="#5d596c"
      d="M10 3.75a.75.75 0 000-1.5v1.5zm4-1.5a.75.75 0 000 1.5v-1.5zm-1 19.5a.75.75 0 000-1.5v1.5zm-9.828-1.922l.53-.53-.53.53zM20.828 4.172l-.53.53.53-.53zM21.25 13a.75.75 0 001.5 0h-1.5zM14 12.75a.75.75 0 000-1.5v1.5zm4-1.5a.75.75 0 000 1.5v-1.5zM2.75 13v-1h-1.5v1h1.5zm0-1v-1h-1.5v1h1.5zM13 20.25h-3v1.5h3v-1.5zM21.25 11v1h1.5v-1h-1.5zm-20 2c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5zM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5zm4-16.5c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5zM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5zM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5zM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5zm18.5 1v1h1.5v-1h-1.5zM2 12.75h12v-1.5H2v1.5zm16 0h4v-1.5h-4v1.5z"
    ></path>
    <path
      stroke="#5d596c"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2"
    ></path>
    <path
      fill="#5d596c"
      d="M15.584 17.5h-.75.75zm0 .5l-.488.57c.281.24.695.24.976 0l-.488-.57zm1.072.07a.75.75 0 00-.975-1.14l.975 1.14zm-1.168-1.14a.75.75 0 00-.976 1.14l.976-1.14zm4.901-.295a.75.75 0 101.222-.87l-1.222.87zm-1.884-2.385c-1.914 0-3.67 1.35-3.67 3.25h1.5c0-.861.857-1.75 2.17-1.75v-1.5zm-3.67 3.25v.5h1.5v-.5h-1.5zm1.237 1.07l.584-.5-.975-1.14-.585.5.976 1.14zm0-1.14l-.584-.5-.976 1.14.584.5.976-1.14zm5.539-1.665c-.666-.935-1.829-1.515-3.106-1.515v1.5c.836 0 1.524.38 1.884.885l1.222-.87zM18.495 21v.75V21zm2.92-2.5h.75-.75zm0-.5l.489-.57a.75.75 0 00-.976 0l.488.57zm-1.071-.07a.75.75 0 00.975 1.14l-.975-1.14zm1.168 1.14a.75.75 0 00.976-1.14l-.976 1.14zm-4.901.295a.75.75 0 10-1.222.87l1.222-.87zm1.884 2.385c1.914 0 3.67-1.35 3.67-3.25h-1.5c0 .861-.857 1.75-2.17 1.75v1.5zm3.67-3.25V18h-1.5v.5h1.5zm-1.237-1.07l-.584.5.975 1.14.585-.5-.976-1.14zm0 1.14l.584.5.976-1.14-.584-.5-.976 1.14zm-5.539 1.665c.666.935 1.829 1.515 3.106 1.515v-1.5c-.836 0-1.524-.38-1.884-.885l-1.222.87z"
    ></path>
  </g>
</svg>
]