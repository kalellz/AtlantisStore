import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'

export default function Products(){
    return(
        <div className={styles.container}>
      <Head>
        <title>Atlantis Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected='Products'/>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    )
}