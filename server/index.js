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
app.use('/:user_id',userRouter)
app.use('/add',userRouter)
app.use('/login',userRouter)
app.use('/edit/:user_id',userRouter)
app.use('/editType/:user_id',userRouter)
app.use('admin/edit/:user_id',userRouter)
app.use('/report',userRouter)
app.use('/delete/:user_id',userRouter)
//
app.use('/follows',userRouter).get
app.use('/following/:user_id',userRouter).get
app.use('/followers/:user_id',userRouter).get
app.use('/follow/:user_id',userRouter).post
app.use('/unfollow/:user_id',userRouter).delete
// 
app.use('/',postRouter)
app.use('/:post_id',postRouter)
app.use('/:user_id',postRouter)
app.use('/add/:user_id',postRouter)
app.use('/edit/:post_id',postRouter)
app.use('/delete/:post_id',postRouter)
app.use('/like/add/:post_id/:user_id',postRouter)
app.use('/like/delete/:like_id',postRouter)

// 
app.use('/:post_id',commentRouter)
app.use('/add/:post_id/:user_id',commentRouter)
app.use('/edit/:comment_id',commentRouter)
app.use('/delete/:comment_id',commentRouter)
// app.use('/reset',commentRouter)

// 
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