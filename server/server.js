// 
import express from "express";

import { config } from "dotenv";
config()

import bcrypt from "bcrypt";

import cors from "cors"

import cookieParser from "cookie-parser";

import jsonwebtoken from "jsonwebtoken";

import userRouter from "./routes/userRoutes.js"


// 
const PORT = process.env.PORT; 
const serverLink = `http://localhost:${PORT}`;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("views"));
app.use(cookieParser());

// 
app.use('/',userRouter)
app.use('/add',userRouter)
app.use('/delete',userRouter)
app.use('/reset',userRouter)

// Hosting the instance of our server at the specific port number
app.listen (PORT, ()=> {
    console.log(
        `
        Server link:${serverLink}
        Port Number:${PORT}
        `)
});