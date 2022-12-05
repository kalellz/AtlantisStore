import logup from '../styles/Logup.module.scss'
import Link from 'next/link'

export default function SignUp(){
    return(
        <main className={logup.SignMain}>
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
                            <input placeholder="Name" className={logup.form__field} type="input" />
                            <label className={logup.form__label}>Nome</label>
                        </div>
                        <div class={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="input" />
                            <label className={logup.form__label}>Sobrenome</label>
                        </div>
                        <div class={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="email" />
                            <label className={logup.form__label}>Email</label>
                        </div>
                        <div class={logup.form__group}>
                            <input placeholder="Name" className={logup.form__field} type="password" />
                            <label className={logup.form__label}>Senha</label>
                        </div>
                    </div>
                    <div className={logup.SignButton}>
                        <button id="send">
                            <span>Estou Pronto!</span><i></i>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}