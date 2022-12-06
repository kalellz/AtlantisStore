import connectToDatabase from "./connectToDatabase";

export default async function signup(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            throw new Error('Insira um nome')
        }
        if (!email) {
            throw new Error('Insira um email')
        }
        if (!password) {
            throw new Error('Insira uma senha')
        }
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('logins')
        const userExists = await collection.findOne({ email: email })
        if (userExists) {
            throw new Error('Email ja está em uso')
        }
        await collection.insertOne({
            name,
            email,
            password
        })
        return res.status(200).json({
            name: name,
            email: email,
            password: password
        })
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
