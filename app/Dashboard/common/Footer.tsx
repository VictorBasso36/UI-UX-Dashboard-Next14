import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.main}>
        <p>© 2023, Feito por <span><Link href="google.com">Felipe Henrique Design</Link></span></p> 
    </footer>
  )
}




