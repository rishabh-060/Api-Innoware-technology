import dotenv from 'dotenv';
dotenv.config({path: './.env'});

import { dbConnect } from './config/connection.js';
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;


dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`INNOWARE SERVER RUNNING ON http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.log(`MONGO DB CONNECTION FAILED: ${err}`)
})