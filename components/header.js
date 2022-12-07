import header from '../styles/Header.module.scss'
import Link from 'next/link'
import storage from 'local-storage'
import Image from 'next/image'
import avatardefault from '../public/avatardefault.png'
import SetaUser from '../public/SetaUser.svg'
import configIcon from '../public/configIcon.png'
import exitIcon from '../public/exitIcon.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header(props) {
    const router = useRouter()
    const [user, setUser] = useState([])
    const [popupConfig, setPopupConfig] = useState(0)
    useEffect(() => {
        if (storage('usuario-logado')) {
            setUser(storage('usuario-logado'))
        }
        if (!storage('usuario-logado')) {
            setUser()
        }
    })
    return (
        <header className={header.mainheader}>
            {props.selected == 'Home' && <div className={header.header}>
                <h1 style={{ color: '#ED0842' }} className={header.headerlogo}>Atlantis Store</h1>
                <div className={header.headerlinks}>
                    <a href="/products">Products</a>
                </div>
            </div>}
            {props.selected == 'Products' && <div className={header.header}>
                <Link href="/" className={header.headerlogo}>Atlantis Store</Link>
                <div className={header.headerlinks}>
                    <a href="/products" style={{ color: '#ED0842' }}>Products</a>
                </div>
            </div>
            }
            {user
                ? <div style={{ display: "flex" }}>
                    <Image src={avatardefault} width={40} height={40} />
                    {popupConfig == 0
                        ? <Image src={SetaUser} width={10} height={10} className={header.setaUser} onClick={() => setPopupConfig(1)} />
                        : <Image src={SetaUser} width={10} height={10} className={header.setaUser} onClick={() => setPopupConfig(0)} />
                    }
                </div>
                : <div className={header.headerbuttons}>
                    <div className={header.headerbutton2}>
                        <Link href="/signup">
                            <button>
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                <span>Cadastre-se</span>
                            </button>
                        </Link>
                    </div>
                    <div className={header.headerbutton1}>
                        <Link href="/login"><button>Entrar agora</button></Link>
                    </div>
                </div>
            }
            {popupConfig == 0
                ? <div style={{ position: "absolute" }}></div>
                : <div className={header.popup}>
                    <Link href="/config">
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "7vw", margin: "1em" }}>
                            <Image src={configIcon} width={20} height={20} style={{ filter: "invert(1)", marginRight: "1em" }} />
                            Configurações
                        </div>
                    </Link>
                    <div style={{ cursor: "pointer", display: "flex", justifyContent: "flex-start", alignItems: "center", width: "7vw", margin: "1em" }}
                        onClick={() => {
                            storage.remove('usuario-logado')
                            router.push('/login');
                        }}>
                        <Image src={exitIcon} width={20} height={20} style={{ filter: "invert(1)", marginRight: "1em" }} />
                        Sair
                    </div>
                </div>
            }
        </header>)
}