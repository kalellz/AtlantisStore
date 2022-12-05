import styles from '../styles/Highlights.module.scss'

export default function Products(props){
    return(
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={props.image} />
            </div>
            <div >
                <h1>{props.title}</h1>
            </div>
            <div>
                <h2>Por <span style={{ color: "#ED0842" }}>R${props.price},00</span></h2>
            </div>
            <div>
                <h3>ou {props.parcel}</h3>
            </div>
            <button>Abrir Anuncio</button>
        </div>
    )
}