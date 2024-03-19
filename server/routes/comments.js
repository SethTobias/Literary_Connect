//
import commentController from "../controller/comments.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/comment/:post_id").get(commentController.getComments);
router.route("/comment/add/:post_id/:user_id").post(commentController.putComment);
router.route("/comment/edit/:comment_id").patch(commentController.editComment);
router.route("/comment/remove/:comment_id").delete(commentController.deleteComment);
// router.route("/reset").delete(commentController.resetComments);

export default router;