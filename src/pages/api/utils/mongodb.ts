
import { MongoClient, Db } from 'mongodb';


const client = new MongoClient(process.env.MONGODB_URI ?? 'fallback_mongodb_uri');

export async function connectToDatabase(): Promise<Db> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('User');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
