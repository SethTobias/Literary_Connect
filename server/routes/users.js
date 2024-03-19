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
router.route("/user/:user_id").get(verifyToken,userController.getUserID);
router.route("/user/add").post(userController.putUser);
router.route("/user/login").post(userController.login);
router.route("/user/edit/:user_id").patch(verifyToken,userController.editUser);
router.route("/user/editType/:user_id").patch(verifyToken,userController.editUserType);
router.route("/user/admin/edit/:user_id").patch(verifyToken,userController.editUserAdmin);
router.route("/user/report").patch(verifyToken,userController.report);
router.route("/user/delete/:user_id").delete(verifyToken,userController.deleteUser);
//
router.route("/user/follows").get(userController.getFollows);
router.route("/user/following/:user_id").get(userController.getFollowing);
router.route("/user/followers/:user_id").get(userController.getFollowers);
router.route("/user/follow/:follower_id").post(verifyToken,userController.follow);
router.route("/user/unfollow/:follower_id").delete(verifyToken,userController.unfollow);



// router.route("/reset").delete(userController.resetUsers);
// router.route("/reset").delete(userController.resetFollows);


// {
//   "follower_id":9
// }
// {
//   "following_id":1
// }
// {
//   "username": "Therebybeach",
//     "password": "1234S"
// 

export default router;