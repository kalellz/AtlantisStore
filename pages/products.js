import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Products.module.scss'
import Header from '../components/header'
import Product from '../components/productsHigh'
import searchIcon from '../public/searchIcon.svg'
import Loading from '../components/loading'
import { SearchProducts } from './api/apis'
import { useEffect, useState } from 'react'

export default function Products() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  async function carregarTodosProdutos() {
    const resp = await SearchProducts();
    setProdutos(resp);
  }
  useEffect(() => {
    carregarTodosProdutos()
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Atlantis Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected='Products' />
      <main className={styles.main}>
        <section className={styles.maincontent}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ fontSize: "2em" }}>BUSCA DE <span style={{ color: "#ED0842" }}>PRODUTOS</span>!</h1>
          </div>
          <div className={styles.bigInput}>
            <input type="text" placeholder="Buscar Produtos" />
            <Image src={searchIcon} width={20} height={20} />
          </div>
          <div className={styles.filter}>
            <select className={styles.filterSelect}>
              <option disabled hidden selected value={0}>Filtros</option>
              <option value={1}>Tênis</option>
              <option value={2}>Camisetas</option>
              <option value={3}>Bonés</option>
              <option value={4}>Cojuntos</option>
              <option value={0}>Todas Categorias</option>
            </select>
          </div>
          {loading == false
            ? <div className={styles.mainProducts} >
              {produtos.map(item => (
                <Product title={item.title} price={item.price} parcel={item.parcel} image='https://images.tcdn.com.br/img/img_prod/703344/tenis_tesla_coil_x_lokal_black_tiffany_5965_1_98e0131613e465ddbf0499693893e990.jpeg' />
              ))}
            </div>
            : <Loading />}
        </section>
      </main>
    </div>
  )
}