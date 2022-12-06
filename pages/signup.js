import logup from '../styles/Logup.module.scss'
import Link from 'next/link'
import LoadingBar from 'react-top-loading-bar'
import { SignUpCall } from './api/apis.js'
import { useRef } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignUp() {
    const router = useRouter()
    const ref = useRef(null)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [err, setErr] = useState('')
    const [disabled, setDisabled] = useState(false)

    async function SignClick() {
        try {
            const userCreated = await SignUpCall(name, email, password)
            setDisabled(true)
            ref.current.continuousStart()
            setTimeout(() => {
                router.push('/login')
            }, 3000)
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
    return (
        <main className={logup.SignMain}>
            <LoadingBar color='#ffffff' ref={ref} />
            <div className={logup.SignButtonToSignup}>
                <Link href="/login">
                    <button className={logup.cta}>
                        <span className={logup.hoverunderlineanimation}>Login</span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </Link>
            </div>
            <section>
                <h1 className={logup.SignTitle}>Bem-vindo á Atlantis!</h1>
                <div className={logup.SignInfos}>
                    <div className={logup.SignInputs}>
                        <div className={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="input" value={name} onChange={e => setName(e.target.value)} />
                            <label className={logup.form__label}>Nome</label>
                        </div>
                        <div className={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <label className={logup.form__label}>Email</label>
                        </div>
                        <div className={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <label className={logup.form__label}>Senha</label>
                        </div>
                    </div>
                    <div className={logup.SignButton}>
                        <button id="send" onClick={SignClick} disabled={disabled}>
                            <span>Estou Pronto!</span><i></i>
                        </button>
                    </div>
                    {err && <h1 style={{color:"#FF0000"}}>{err}</h1>}
                </div>
            </section>
        </main>
    )
}