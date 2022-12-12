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
    return r.data
}
export async function CreateProduct(title, price, parcel) {
    const r = await axios.post('/api/product/createProduct', {
        title: title,
        price: price,
        parcel: parcel
    })
    return r.data
}
export async function SearchProducts() {
    const r = await axios.get('/api/product/searchProducts')
    return r.data
}