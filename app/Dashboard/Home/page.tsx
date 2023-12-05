"use client"
import { DashboardContext } from '../layoutProvider';
import styles from './Home.module.css'
import { Col, DatePicker, DatePickerProps, Space } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
import ptBR from 'antd/lib/locale/pt_BR'
import Chart1 from './chart1';

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
            <Chart1 />
          </div>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
        </div>
        <div className={styles.grid3}>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
        </div>
        <div className={styles.grid4}>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
          <div className={styles.chartBg}>
            <Chart1 />
          </div>
        </div>
      </div>
    </section>
  )
}
