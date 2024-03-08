// 
import express from "express";

import { config } from "dotenv";
config()

import bcrypt from "bcrypt";

import cors from "cors"

import cookieParser from "cookie-parser";

import jsonwebtoken from "jsonwebtoken";

import userRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import commentRouter from "./routes/comments.js"
import chatRouter from "./routes/chats.js"


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
app.use('/',userRouter)
app.use('/add',userRouter)
app.use('/delete',userRouter)
app.use('/reset',userRouter)

// 
app.use('/',postRouter)
app.use('/',postRouter)
app.use('/',postRouter)

app.use('/add',postRouter)
app.use('/delete',postRouter)
app.use('/reset',postRouter)

// 
app.use('/',commentRouter)
app.use('/add',commentRouter)
app.use('/delete',commentRouter)
app.use('/reset',commentRouter)

// 
app.use('/',chatRouter)
app.use('/',chatRouter)
app.use('/',chatRouter)

app.use('/add',chatRouter)
app.use('/delete',chatRouter)
app.use('/reset',chatRouter)

// Hosting the instance of our server at the specific port number
app.listen (PORT, ()=> {
    console.log(
        `
        Server link:${serverLink}
        Port Number:${PORT}
        `)
});