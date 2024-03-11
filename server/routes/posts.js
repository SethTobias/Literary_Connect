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
router.route("/post/add").post(postController.putPost);
router.route("/post/edit").post(postController.editPost);
router.route("/post/delete").delete(postController.deletePost);

// router.route("/reset").delete(postController.resetPosts);

router.route("post/like").get(postController.getLikes);
router.route("post/like/add").post(postController.putLike);
router.route("post/like/delete").delete(postController.deleteLike);

// router.route("reset").delete(postController.resetLikes);

router.route("post/share").get(postController.getShares);
// router.route("/post/add").post(postController.putPost);
// router.route("/post/delete").delete(postController.deletePost);

// router.route("/reset").delete(postController.resetShares);

export default router;