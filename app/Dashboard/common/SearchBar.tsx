"use client"
import Image from 'next/image'
import styles from './SearchBar.module.css'
import Link from 'next/link'
import { DashboardContext } from '../layoutProvider'

export default function SearchBar() {
    const {open, setOpen} = DashboardContext()

  return (
    <header className={styles.main}>
        <div className={styles.SearchContainer}>
            
            <div className={styles.SearchHere}>
                <div className={styles.HambMenu} onClick={() => setOpen(true)}>
                    {icons[0]}
                </div>
                <div className={styles.SearchIcon}>
                    {icons[1]}
                    <p>Search</p>
                </div>
            </div>
            <div className={styles.ItemsHere}>
                
            </div>
        </div>
    </header>
  )
}




const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      className="iconify iconify--tabler"
      fontSize="1.5rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        aria-hidden="true"
        className="iconify iconify--tabler"
        fontSize="1.625rem"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <circle cx="10" cy="10" r="7"></circle>
          <path d="M21 21l-6-6"></path>
        </g>
      </svg>
]
