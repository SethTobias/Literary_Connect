//
import commentController from "../controller/comments.js";

//
import express from "express";
import verifyToken from "../middleware/authUser.js";
import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/comment/:post_id").get(commentController.getComments);
router.route("/comment/add/:post_id/:user_id").post(commentController.putComment);
router.route("/comment/edit/:comment_id").patch(verifyToken,commentController.editComment);
router.route("/comment/remove/:comment_id").delete(verifyToken,commentController.deleteComment);
// router.route("/reset").delete(commentController.resetComments);

export default router;