import connectToDatabase from "./connectToDatabase";

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
        const db = await connectToDatabase('mongodb+srv://user:userdefault@cluster0.uox3zbh.mongodb.net/AtlantisStore?retryWrites=true&w=majority')
        const collection = db.collection('users')
        const response = await collection.findOne(user)
        if (!response)
            throw new Error('Usuario Não Encontrado')
        res.status(200).send(response)
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
