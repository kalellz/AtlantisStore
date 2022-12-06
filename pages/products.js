import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atlantis Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected='Products' />
      <main className={styles.main}>
      </main>
    </div>
  )
}