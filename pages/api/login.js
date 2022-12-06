import connectToDatabase from "./connectToDatabase";

export default async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email) {
            throw new Error('Insira um email')
        }
        if (!password) {
            throw new Error('Insira uma senha')
        }
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('logins')
        const resposta = await collection.find({ email: `${email}`, password: `${password}` }).count()
        if (resposta == 0)
            throw new Error('Usuario Não Encontrado')
        res.status(200).send()
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
