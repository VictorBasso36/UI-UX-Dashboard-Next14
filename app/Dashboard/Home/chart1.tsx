import React, { useContext } from 'react';
import { DashboardContext } from '../layoutProvider';
import styles from './chart1.module.css';
import dayjs from 'dayjs';
import { Line, Pie, PieConfig } from '@ant-design/charts';
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

export default function Chart1() {
  const { start, end } = DashboardContext();
  const data = [
    {
      type: 'Telefone',
      value: 53,
    },
    {
      type: 'Whatsapp',
      value: 47,
    },
  ];
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    legend: false,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}%',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: undefined,
    color:['#5d596c','#7367f0'],
  };
  return (
  <>
    <div className={styles.contentDiv}>
      <div className={styles.grid}>
        <h2>159</h2>
        <p>Total geral de atendimento</p>
        <div className={styles.iconsHere}>
          <div className={styles.contentDataIcon}>
            <div className={styles.Icon}>
              {icons[0]}
            </div>
            <div className={styles.Text}>
              <h3>Telefone</h3>
              <p>47</p>
            </div>

          </div>
          <div className={styles.contentDataIcon}>
            <div className={styles.Icon}>
              {icons[0]}
            </div>
            <div className={styles.Text}>
              <h3>Whatsapp</h3>
              <p>53</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chartHere}>
        <Pie {...config} /> 
      </div>
           
    </div>  
  </>
  )
}


const icons = [
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  aria-hidden="true"
  className="iconify iconify--tabler"
  fontSize="1.125rem"
  viewBox="0 0 24 24"
>
  <g
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
  >
    <path d="M12 3v9h9"></path>
    <circle cx="12" cy="12" r="9"></circle>
  </g>
</svg>
]