
"use client"
import '../globals.css'
import Image from 'next/image'
import styles from './layout.module.css'
import Navigation from './common/Navigation'
import SearchBar from './common/SearchBar'
import Footer from './common/Footer'
import { DashboardProvider } from './layoutProvider'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
dayjs.locale('pt');



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider
    theme={{
      token: {

        colorPrimary: '#fbdc00',
        fontFamily: 'var(--Public_Sans)'
        
      },
    }}
    locale={ptBR}
  >
      <DashboardProvider>
        
        <main className={styles.main}>
            <Navigation />
            <div className={styles.contentItem}>
                <div className={styles.contentContainer}>
                  <SearchBar />
                  <div className={styles.DashboardHere}>
                    {children}
                  </div>
                  <Footer />
                </div>
            </div>
        </main>
      </DashboardProvider>
    </ConfigProvider>
  )
}
