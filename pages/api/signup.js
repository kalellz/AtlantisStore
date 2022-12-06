import connectToDatabase from "./connectToDatabase";

export default async function signup(req, res) {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            icon: null
        }
        if (!user.name) {
            throw new Error('Insira um nome')
        }
        if (!user.email) {
            throw new Error('Insira um email')
        }
        if (!user.password) {
            throw new Error('Insira uma senha')
        }
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('users')
        const userExists = await collection.findOne({ email: user.email })
        if (userExists) {
            throw new Error('Email ja está em uso')
        } else {
            await collection.insertOne(user)
            const response = await collection.findOne(user)
            return res.status(200).send(response)
        }
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
