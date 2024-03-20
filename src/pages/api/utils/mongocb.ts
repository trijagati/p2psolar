
import { MongoClient, Db } from 'mongodb';

const uri = 'your_mongodb_atlas_uri';
const client = new MongoClient(uri);

export async function connectToDatabase(): Promise<Db> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('your_database_name');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
