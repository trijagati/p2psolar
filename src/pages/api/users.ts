
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from './utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        console.log(name,email);
        // Basic validation
        if (!name || !email) {
            console.log(name,email)
            return res.status(400).json({ error: 'Name and email are required' });
        }

        try {
            const db = await connectToDatabase();
            const collection = db.collection('users');
            // console.log(collection);

            // Check if user with the same email already exists
            const existingUser = await collection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'User with this email already exists' });
            }

            // Insert new user
            // console.log("runn");
            const result = await collection.insertOne({ name, email }) as any; // Use type assertion to any
            // console.log("runn");
            // console.log(result);    
            const newUser = result.ops[0];
            
            return res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
        // Handle user retrieval logic
        const { email } = req.query;

        // Basic validation
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Email is required and must be a string' });
        }

        try {
            const db = await connectToDatabase();
            const collection = db.collection('users');

            // Find user by email
            const user = await collection.findOne({ email });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
}

// api/findUser.ts

