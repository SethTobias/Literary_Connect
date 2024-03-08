//
import chatController from "../controller/chats.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/chat").get(chatController.getChats);
// router.route("/chat/add").post(chatController.putChat);
// router.route("/chat/delete").delete(chatController.deleteChat);

router.route("/reset").delete(chatController.resetChats);
//
router.route("/part").get(chatController.getParticipants);
// router.route("/chat/add").post(chatController.putChat);
// router.route("/chat/delete").delete(chatController.deleteChat);

router.route("/reset").delete(chatController.resetParticipants);
//
router.route("/messages").get(chatController.getMessages);
// router.route("/chat/add").post(chatController.putChat);
// router.route("/chat/delete").delete(chatController.deleteChat);

router.route("/reset").delete(chatController.resetMessages);

export default router;