

"use client"
import styles from './Home.module.css'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

export default function Teste() {
  return (
    <section className={styles.main}>
      <div className={styles.DataFilter}>
        <RangePicker />
      </div>
      <div className={styles.ChartsHere}>
          Charts Here
      </div>
    </section>
  )
}
