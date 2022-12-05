import styles from '../styles/Highlights.module.scss'

export default function Products(props){
    return(
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={props.image} />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <h3>Por <span style={{ color: "#ED0842" }}>R${props.price},00</span></h3>
            </div>
            <div>
                <h4>ou {props.parcel}</h4>
            </div>
            <button>Abrir Anuncio</button>
        </div>
    )
}