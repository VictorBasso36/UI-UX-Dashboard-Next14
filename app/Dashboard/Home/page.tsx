"use client"
import axios from 'axios';
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css'
import { DatePicker, DatePickerProps, } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
dayjs.locale('pt');
import ptBR from 'antd/lib/locale/pt_BR';
import dynamic from 'next/dynamic';

const Chart1 = dynamic(
  () => import('./chart1'),
  { ssr: false }
)
const Chart2 = dynamic(
  () => import('./chart2'),
  { ssr: false }
)

const Chart3 = dynamic(() => import('./chart3'),
{ ssr: false }
)

const Chart4 = dynamic(() => import('./chart4'),
{ ssr: false }
)


const Chart5 = dynamic(() => import('./chart5'),
{ ssr: false }
)


const Chart6 = dynamic(() => import('./chart6'),
{ ssr: false }
)


const Chart7 = dynamic(() => import('./chart7'),
{ ssr: false }
)

export default function Home() {
  const {setStart, start, end, setEnd, } = DashboardContext()


  const onChangeStart: DatePickerProps['onChange'] = (date, dateString) => {
    if (date && dateString) {
      setStart(date.toDate());
    }
  };
  
  const onChangeEnd: DatePickerProps['onChange'] = (date, dateString) => {
    if (date && dateString) {
      setEnd(date.toDate());
    }
  };

  const { loading } = DashboardContext();
  return (
    <section className={styles.main}>
      <div className={styles.DataFilter}>

      <DatePicker 
            allowClear={false} 
            format={'DD/MM/YYYY'} 
            defaultValue={dayjs(start)} 
            className={styles.startDate} 
            value={dayjs(start)} 
            onChange={onChangeStart} 
            placeholder='Data inicial' 
        />
        <DatePicker 
            allowClear={false} 
            format={'DD/MM/YYYY'} 
            defaultValue={dayjs(end)} 
            className={styles.endDate} 
            value={dayjs(end)} 
            onChange={onChangeEnd} 
            placeholder='Data final'
        />
        
      </div>
      <div className={styles.ChartsHere}>
        <div className={styles.grid1}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Atendimentos por período</h1>
              <p>Chamados Help Desk</p>
            </div>
            <div className={styles.chart1div}>
              <Chart1 />
            </div>
          </div>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Reinicialização de servidores</h1>
              <p>&nbsp;</p>
            </div>
            <div className={styles.chart1div}>
              <Chart2 />
            </div>
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Chamados por cliente</h1>
              {/* <p>Você pode ver os chamados por cliente</p> */}
            </div>
            <div style={{width: '100%'}} className={styles.chart3div}>
              <Chart3 />
            </div>
            
          </div>
        </div>
        <div className={styles.grid3}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Tempo de atendimento por ticket</h1>
            </div>
            <div>
              <Chart4 />
            </div>
          </div>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
              <h1 style={{textAlign: 'center'}}>Painel de Tickets</h1>
              <p style={{textAlign: 'center'}}>Veja os tickets e seus status</p>
            </div>
            <div className={styles.containarChart5}>
              <Chart5 />
            </div>
          </div>
        </div>
        <div className={styles.grid4}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Tickets por analista</h1>
            </div>
            <div className={styles.divend}>
              <Chart6 />
            </div>
          </div>
        </div>
        <div className={styles.grid4} style={{marginTop: '30px', marginBottom: '30px'}}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Tickets por analista</h1>
            </div>
            <div className={styles.divend}>
              <Chart7 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
