import connectToDatabase from "../../../services/dbConnect.js";

export default async function search(req, res) {
    try {
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('products')
        const products = await collection.find({}).toArray()
        return res.status(200).send(products)
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
