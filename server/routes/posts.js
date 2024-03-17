//
import postController from "../controller/posts.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/post").get(postController.getPosts);
router.route("/post/:post_id").get(postController.getPost);
router.route("/post/:user_id").get(postController.getUserPosts);
router.route("/post/add/:user_id").post(postController.putPost);
router.route("/post/edit/:post_id").post(postController.editPost);
router.route("/post/delete/:post_id").delete(postController.deletePost);

// router.route("/reset").delete(postController.resetPosts);

router.route("post/like/:post_id").get(postController.getLikes);
router.route("post/like/add/:post_id/:user_id").post(postController.putLike);
router.route("post/like/delete/:like_id").delete(postController.deleteLike);

// router.route("reset").delete(postController.resetLikes);

router.route("post/share").get(postController.getShares);
// router.route("/post/add").post(postController.putPost);
// router.route("/post/delete").delete(postController.deletePost);

// router.route("/reset").delete(postController.resetShares);

export default router;