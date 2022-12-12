import connectToDatabase from "../../services/dbConnect.js";

export default async function login(req, res) {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        if (!user.email) {
            throw new Error('Insira um email')
        }
        if (!user.password) {
            throw new Error('Insira uma senha')
        }
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('users')
        const response = await collection.findOne(user)
        if (!response)
            throw new Error('Senha Ou Email Incorretos')
        res.status(200).send(response)
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
