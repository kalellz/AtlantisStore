import { MongoClient, Db } from 'mongodb'
import url from 'url'

export default async function connectToDatabase(uri) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const dbName = url.parse(uri).pathname.substring(1)

    const db = client.db(dbName)

    return db
}