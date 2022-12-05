import styles from '../styles/Categories.module.scss'
import Link from 'next/link'
export default function Categorias(){
    return(
        <div className={styles.main}>
            <Link href="/" className={styles.links}>Tênis</Link>
            <Link href="/" className={styles.links}>Camisetas</Link>
            <Link href="/" className={styles.links}>Bonés</Link>
            <Link href="/" className={styles.links}>Conjuntos</Link>
            <Link href="/" className={styles.links}>Todas as Categorias</Link>
        </div>
    )
}