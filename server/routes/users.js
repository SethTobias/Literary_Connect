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
router.route("/user/:user_id").get(userController.getUserID);
router.route("/user/add").post(userController.putUser);
router.route("/user/login").post(userController.login);
router.route("/user/edit/:user_id").patch(userController.editUser);
router.route("/user/editType/:user_id").patch(userController.editUserType);
router.route("/user/admin/edit/:user_id").patch(userController.editUserAdmin);
router.route("/user/report").patch(userController.report);
router.route("/user/delete/:user_id").delete(verifyToken,userController.deleteUser);
//
router.route("/user/follows").get(userController.getFollows);
router.route("/user/following/:user_id").get(userController.getFollowing);
router.route("/user/followers/:user_id").get(userController.getFollowers);
router.route("/user/follow/:user_id").post(userController.follow);
router.route("/user/unfollow/:user_id").delete(userController.unfollow);



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