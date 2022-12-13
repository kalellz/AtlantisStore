import connectToDatabase from "../../../services/dbConnect.js";
import { ObjectId } from "mongodb";

export default async function search(req, res) {
    try {
        const id = req.body.id
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('products')
        const products = await collection.find({}).toArray()
        if(id){
            const product = await collection.find({_id: ObjectId(id)}).toArray()
            return res.status(200).send(product)
        } else
        return res.status(200).send(products)
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
