import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
     methods: ["GET", "POST", "PUT", "OPTIONS"],
}))
app.use(express.json({limit: "1mb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import { userRouter } from "./routes/userRouter.js";
import { publicRouter } from "./routes/publicRouter.js";

app.get("/api", (req, res) => {
    return res.status(200).json({
        message: "Welcome to the Innoware API",
        status: "success"
    })
});

// route definition
app.use('/api/v1/users', userRouter);
app.use('/api/v1/public', publicRouter);


export { app }