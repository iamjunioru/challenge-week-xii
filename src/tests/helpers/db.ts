import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongo: MongoMemoryServer;

export async function connect() {
    mongo = await MongoMemoryServer.create();
    const url = mongo.getUri();

    await mongoose.connect(url);
}

export async function dropDB() {
    if (mongo) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongo.stop();
    }
}

export async function dropCollections() {
    if (mongo) {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
}
