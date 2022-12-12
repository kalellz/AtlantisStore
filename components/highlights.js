import Product from "./productsHigh";
import styles from '../styles/Highlights.module.scss';
import { SearchProducts } from '../pages/api/apis.js'
import { useEffect, useState } from 'react'

export default function Highlights() {
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
        <div className={styles.main}>
            {produtos.slice(0, 4).map(item => (
                <Product title={item.title} price={item.price} parcel={item.parcel} image='https://images.tcdn.com.br/img/img_prod/703344/tenis_tesla_coil_x_lokal_black_tiffany_5965_1_98e0131613e465ddbf0499693893e990.jpeg' />
            ))}
        </div>
    )
}