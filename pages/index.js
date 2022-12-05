import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Categorias from '../components/categories'
import Highlights from '../components/highlights'

export default function Home() {
  return (
    <div className={styles.container} >
      <div>

      </div>
      <Head>
        <title>Atlantis Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected='Home' />
      <main className={styles.main}>
        <section className={styles.maincontent}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>SEJA <span style={{ color: "#ED0842" }}>BEM VINDO</span>!</h1>
          </div>
          <div>
            <h5 style={{ marginLeft: "1em" }}>Categorias</h5>
            <div>
              <Categorias />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
            <h5 style={{ marginLeft: "1em" }}>Produtos em destaque</h5>
            <div>
              <Highlights />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
