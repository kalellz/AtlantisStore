import { MongoClient, Db } from 'mongodb'
import url from 'url'

async function connectToDatabase(uri) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const dbName = url.parse(uri).pathname.substring(1)

    const db = client.db(dbName)

    return db
}
export default async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email) {
            throw new Error('Insira um email')
        }
        if (!password) {
            throw new Error('Insira uma senha')
        }
    {/* FAZER A FUNÇÃO DE LOGIN DPS */}
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
