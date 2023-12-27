import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.main}>
        <p>© 2023, Feito por <span><Link target='_blank' href="https://felipehdesign.com.br/">Felipe Henrique Design</Link></span></p> 
    </footer>
  )
}




