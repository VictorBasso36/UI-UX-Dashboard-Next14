"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentItem}>
        <Link href="/Dashboard/Home/">
          <Image src={"/taxidigital.png"} width={260} height={60} alt='Logo Taxi Digital'></Image>
          <p className={styles.description}>Explore seus dados com facilidade. Clique abaixo para acessar o painel completo. 📊</p>
          <button className={styles.mainButton}>
            <p>Vamos lá! </p>
          </button>
        </Link>
      </div>
    </main>
  )
}
