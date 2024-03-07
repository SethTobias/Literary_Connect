
//
import userController from "../controller/userController.js";

//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/user").get(userController.getUsers);
router.route("/user/add").post(userController.putUser);
router.route("/user/delete").delete(userController.deleteUser);
router.route("/user/reset").delete(userController.resetUsers);

export default router;