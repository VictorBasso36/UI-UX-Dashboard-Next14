import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
dayjs.locale('pt');
import ptBR from 'antd/lib/locale/pt_BR'
import './globals.css'

import { ConfigProvider } from 'antd'

const public_sans = Public_Sans({ subsets: ['latin'],weight: ['100', '200', '300','400', '500', '600', '700', '800', '900'], variable: '--Public_Sans' })

export const metadata: Metadata = {
  title: 'Dashboard Taxi Digital - A evolução do táxi.',
  description: 'Dashboard Taxi Digital - A evolução do táxi.',
  icons: {
    icon: '/favicon.ico',
  },
}

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
      <html lang="pt-br">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1" />
        <body className={public_sans.className}>{children}</body>
      </html>
    </ConfigProvider>

  )
}
