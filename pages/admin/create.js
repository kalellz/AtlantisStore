import Head from 'next/head'
import Image from 'next/image'
import storage from 'local-storage'
import styles from '../../styles/Admin.module.scss'
import Header from '../../components/header'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { CreateProduct } from '../api/apis'

export default function Create() {
    const user = useRef(storage('usuario-logado'))
    const ref = useRef(null)
    const title = useRef(null)
    const price = useRef(null)
    const parcel = useRef(null)
    const [err, setErr] = useState('')
    const [disabled, setDisabled] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setDisabled(true)
            await CreateProduct(
                title.current.value,
                price.current.value,
                `${parcel.current.value}x de R$ ${((price.current.value / parcel.current.value).toFixed(2)).toString().replace(".", ",")}`)
            ref.current.continuousStart()
            setTimeout(() => {
                ref.current.complete();
                setDisabled(false)
                title.current.value = null
                price.current.value = null
                parcel.current.value = null
            }, 2400);
        } catch (err) {
            ref.current.complete();
            setDisabled(false);
            if (err.response.status === 401) {
                setErr(err.response.data.erro);
            }
            setTimeout(() => {
                setErr("");
            }, 3000);
        }
    }
    if (user.current) {
        if (!user.current.admin)
            return <div></div>
    }
    return (
        <div>
            <div className={styles.container} >
                <Head>
                    <title>Atlantis Store</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header selected='Create' />
                <main className={styles.main}>
                    <LoadingBar color='#ffffff' ref={ref} />
                    <section className={styles.maincontent}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h1 style={{ fontSize: "2em" }}>Olá <span style={{ color: "#ED0842" }}>ADMIN</span>!</h1>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.formCreate}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label>Title</label>
                                <input type="text" ref={title} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label>Price</label>
                                <input type="number" ref={price} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label>Max Parcel</label>
                                <input type="number" ref={parcel} />
                            </div>
                            <button type='submit' disabled={disabled}>Create Product</button>
                            {err && <h1 style={{ color: "#FF0000", textAlign: "center" }}>{err}</h1>}
                        </form>
                    </section>
                </main>
            </div>
        </div>
    )
}