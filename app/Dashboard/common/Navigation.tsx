"use client"
import Image from 'next/image'
import styles from './Navigation.module.css'
import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import { DashboardContext } from '../layoutProvider'

export default function Navigation() {
  const searchParams = usePathname()
  const {open, setOpen} = DashboardContext()

  return (
    <main className={styles.main} style={{marginLeft: open ? '0px' : '-260px'}}>
      <div className={styles.contentItem}>
        <div className={styles.CloseItem} onClick={() => setOpen(false)}>
          {icons[0]}
        </div>
        <div className={styles.headerNavbar}>
            <Link href="/Dashboard/Home">
                <Image className={styles.mainLogo} src="/taxidigital.png" width={220} height={50} alt={''}></Image>
            </Link>
        </div>
        <div className={styles.Links}>  
            <Link href="/Dashboard/Home">
                <div className={`${styles.ItemContainer} ${searchParams === "/Dashboard/Home" ? styles.ItemContainerSelected : ''}`}>
                    <p>{icons[1]} Dashboard</p>
                </div>
            </Link>
        </div>
      </div>
    </main>
  )
}




const icons = [
    <svg
    key={0}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    aria-hidden="true"
    className="iconify iconify--tabler"
    fontSize="1.25rem"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18 6L6 18M6 6l12 12"
    ></path>
  </svg>,
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      className="iconify iconify--tabler"
      fontSize="1.375rem"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M19 8.71l-5.333-4.148a2.666 2.666 0 00-3.274 0L5.059 8.71a2.665 2.665 0 00-1.029 2.105v7.2a2 2 0 002 2h12a2 2 0 002-2v-7.2c0-.823-.38-1.6-1.03-2.105M16 15c-2.21 1.333-5.792 1.333-8 0"></path>
      </g>
    </svg>
]
