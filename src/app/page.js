import Image from 'next/image'
import styles from './page.module.css'
import { Poppins } from 'next/font/google'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
            ></Image>
        </div>
        <div className={styles.nav}>
          <a href="#">Les avantages</a>
          <a href="#">À propos</a>
          <a href="#">Process</a>
          <a href="#">FAQ</a>
          <button className={styles.headerCTA}>Réserver un call</button>
        <div>
        </div>
        </div>
      </div>
      <h1 className={styles.title}>
        Prévisualisez vos posts
      </h1>  
      <h2 className={styles.blueTitle}>
        à l'avance
      </h2>  
      <p>Visualisez vos posts de manière 100% personnalisée, en fonction de votre besoin et de vos objectifs</p>
      <button className={styles.cta}>Je créé mon premier post</button>
      <Image
        src="/demo.svg"
        alt="Picture of the author"
        width={1500}
        height={1500}
        className={styles.demo}
        ></Image>
    </main>
  )
}
