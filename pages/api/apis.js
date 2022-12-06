import axios from 'axios'

export async function LoginCall(email, password) {
    const r = await axios.post('https://atlantis-store.vercel.app/api/login', {
        email: email,
        password: password
    })
    return r.data
}
export async function SignUpCall(name, email, password) {
    const r = await axios.post('https://atlantis-store.vercel.app/api/signup', {
        name: name,
        email: email,
        password: password
    })
    return r.data
}


