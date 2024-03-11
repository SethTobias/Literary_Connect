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
app.use("/A",userRouter)
app.use("/D",userRouter)
app.use("/TA",userRouter)
app.use("/TD",userRouter)
app.use("/review",userRouter)
app.use("/reported",userRouter)
app.use('/login',userRouter)
app.use('/editType',userRouter)
app.use('/report',userRouter)
app.use('/add',userRouter)
app.use('/delete',userRouter)
// app.use('/reset',userRouter)
//
app.use('/following',userRouter).get
app.use('/followers',userRouter).get
app.use('/follow',userRouter).post
app.use('/unfollow',userRouter).delete
// 
app.use('/',postRouter)
app.use('/add',postRouter)
app.use('/edit',postRouter)
app.use('/delete',postRouter)
//
app.use('/like',postRouter)
app.use('/like/add',postRouter)
app.use('/like/delete',postRouter)
// app.use('/reset',postRouter)


// 
app.use('/',commentRouter)
app.use('/add',commentRouter)
app.use('/edit',commentRouter)
app.use('/delete',commentRouter)
// app.use('/reset',commentRouter)

// 
app.use('/',chatRouter)
app.use('/',chatRouter)
app.use('/',chatRouter)
app.use('/add',chatRouter)
app.use('/delete',chatRouter)
// app.use('/reset',chatRouter)

// Hosting the instance of our server at the specific port number
app.listen (PORT, ()=> {
    console.log(
        `
        Server link:${serverLink}
        Port Number:${PORT}
        `)
});