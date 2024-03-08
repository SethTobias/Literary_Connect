//
import userController from "../controller/users.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/user").get(userController.getUsers);
router.route("/follow").get(userController.getFollows);
//
router.route("/user/add").post(userController.putUser);
router.route("/user/delete").delete(userController.deleteUser);

router.route("/reset").delete(userController.resetUsers);
router.route("/reset").delete(userController.resetFollows);

export default router;