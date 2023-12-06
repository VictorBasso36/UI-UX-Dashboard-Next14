"use client"
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css'
import { DatePicker, DatePickerProps, Space } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
import ptBR from 'antd/lib/locale/pt_BR'
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';

export default function Home() {

  const {setStart, start, end, setEnd, } = DashboardContext()
  const onChangeStart: DatePickerProps['onChange'] = (date, dateString) => {
    setStart(dayjs(dateString).toDate());
    console.log(dayjs(dateString).toDate())
  };
  const onChangeEnd: DatePickerProps['onChange'] = (date, dateString) => {
    setEnd(dayjs(dateString).toDate());
    console.log(dayjs(dateString).toDate())
  };
  return (
    <section className={styles.main}>
      <div className={styles.DataFilter}>

          <DatePicker allowClear={false} className={styles.startDate} value={dayjs(start)} onChange={onChangeStart} placeholder='Data inicial' />
          <DatePicker allowClear={false} className={styles.endDate} value={dayjs(end)} onChange={onChangeEnd} placeholder='Data final'/>
        
      </div>
      <div className={styles.ChartsHere}>
        <div className={styles.grid1}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Atendimento por período</h1>
              <p>Chamados Help Desk</p>
            </div>
            <div>
              <Chart1 />
            </div>
          </div>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Reinicialização de serviços</h1>
              <p>Veja por quantidade</p>
            </div>
            <div>
              <Chart2 />
            </div>
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Chamados por cliente</h1>
              <p>Você pode ver os chamados por cliente e por dia</p>
            </div>
            <div>
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
              <Chart1 />
            </div>
          </div>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Painel de Tickets</h1>
              <p>Veja os tickets e seus status</p>
            </div>
            <div>
              <Chart1 />
            </div>
          </div>
        </div>
        <div className={styles.grid4}>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Tickets por analista</h1>
            </div>
            <div>
              <Chart1 />
            </div>
          </div>
          <div className={styles.chartBg}>
            <div className={styles.cotainerTitle}> 
            <h1>Tickets por analista</h1>
            </div>
            <div>
              <Chart1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
