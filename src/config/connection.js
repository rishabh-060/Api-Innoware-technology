import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

export const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`INNOWARE DB CONNECTED ✅ on HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("INNOWARE DB CONNECTION ERROR: ", error);
        process.exit(1)
    }
}