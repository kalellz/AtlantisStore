import connectToDatabase from "../connectToDatabase";

export default async function create(req, res) {
    try {
        const product = {
            title: req.body.title,
            price: req.body.price,
            parcel: req.body.parcel
        }
        if (!product.title) {
            throw new Error('Insira um titulo')
        }
        if (!product.price) {
            throw new Error('Insira um preço')
        }
        if (!product.parcel) {
            throw new Error('Insira uma parcela')
        }
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = db.collection('products')
        const response = await collection
        const productExists = await collection.findOne({ title: product.title })
        if (productExists) {
            throw new Error('Produto já criado')
        } else {
            await collection.insertOne(product)
            const response = await collection.findOne(product)
            return res.status(200).send(response)
        }
    } catch (err) {
        return res.status(401).send({
            erro: err.message
        });
    }
}
