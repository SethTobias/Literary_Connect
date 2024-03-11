//
import commentController from "../controller/comments.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/comment").get(commentController.getComments);
router.route("/comment/add").post(commentController.putComment);
router.route("/comment/edit").patch(commentController.editComment);
router.route("/comment/delete").delete(commentController.deleteComment);
// router.route("/reset").delete(commentController.resetComments);

export default router;