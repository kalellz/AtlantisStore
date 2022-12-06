import axios from 'axios'

export async function LoginCall(email, password) {
    const r = await axios.post('/api/login', {
        email: email,
        password: password
    })
    return r.data
}
export async function SignUpCall(name, email, password) {
    const r = await axios.post('/api/signup', {
        name: name,
        email: email,
        password: password
    })
    return r
}


