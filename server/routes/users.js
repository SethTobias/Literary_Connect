//
import userController from "../controller/users.js";
//
import verifyToken from "../middleware/authUser.js";

import jwt from "jsonwebtoken"
//
import express from "express";

import { config } from "dotenv";
config()

//
const router = express.Router();

//
router.route("/user").get(userController.getUsers);
router.route("/user/A").get(userController.getUsersAUN);
router.route("/user/D").get(userController.getUsersDUN);
router.route("/user/TA").get(userController.getUsersTypeA);
router.route("/user/TD").get(userController.getUsersTypeD);
router.route("/user/review").get(userController.getReview);
router.route("/user/reported").get(userController.getReported);
// router.route("/user/:id").get(userController.getUserIDParam);
// router.route("/user/:username").get(userController.getUserIDBody);
//
router.route("/user/add").post(userController.putUser);
//
router.route("/user/login").get(userController.login);

router.route("/user/edit").patch(userController.editUser);
router.route("/user/editType").patch(userController.editUserType);
router.route("/user/report").patch(userController.report);
router.route("/user/delete").delete(verifyToken,userController.deleteUser);
//
router.route("user/follow").get(userController.getFollows);
router.route("user/following").get(userController.getFollowing);
router.route("user/followers").get(userController.getFollowers);
router.route("user/follow").get(userController.follow);
router.route("user/unfollow").get(userController.unfollow);



// router.route("/reset").delete(userController.resetUsers);
// router.route("/reset").delete(userController.resetFollows);

export default router;