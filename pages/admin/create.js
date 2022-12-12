import Head from 'next/head'
import Image from 'next/image'
import storage from 'local-storage'
import styles from '../../styles/Admin.module.scss'
import Header from '../../components/header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Create() {
    const [user, setUser] = useState([])
    useEffect(() => {
        setUser(storage('usuario-logado'))
    })
    if (!user.admin)
        return <div></div>
    return (
        <div>
            <div className={styles.container} >
                <Head>
                    <title>Atlantis Store</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header selected='Create' />
                <main className={styles.main}>
                    <section className={styles.maincontent}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h1 style={{ fontSize: "2em" }}>Olá <span style={{ color: "#ED0842" }}>ADMIN</span>!</h1>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}