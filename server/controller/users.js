//
import {
  //
  getUsers,
  getUsersAUN,
  getUsersDUN,
  getUserID,
  getHash,
  getTypeASC,
  getTypeDESC,
  getStatusASC,
  getStatusDESC,
  getReaders,
  getWriters,
  getCurators,
  getUnderReview,
  getReported,
  getUser,
  getFollows,
  getFollowers,
  getFollowing,
  //
  putUser,
  follow,
  reportUser,
  //
  alterUserData,
  alterUserType,
  //
  deleteUser,
  unfollow,
  //
  resetUsers,
  resetFollows,
} from "../model/users.js";
import { config } from "dotenv";
config();
import bcrypt from "bcrypt";

const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error in getUsers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getFollows: async (req, res) => {
    try {
      const follows = await getFollows();
      res.status(200).json(follows);
    } catch (error) {
      console.error("Error in getFollows:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  putUser: async (req, res) => {
    try {
      let { firstName, lastName, username, email, password } = req.body;
      bcrypt.hash(password, 20, async (error, hash) => {
        if (error) {
          console.error("Error hashing password:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        try {
          let newUser = await putUser(
            firstName,
            lastName,
            username,
            email,
            hash
          );
          res.status(201).json(newUser);
        } catch (putUserError) {
          console.error("Error in putUser:", putUserError);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
    } catch (error) {
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not added.",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      let { username, password } = req.body;

      let deletedUser = deleteUser(username, password);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not deleted.",
      });
    }
  },
  //
  resetUsers: async (req, res) => {
    try {
      let reset = resetUsers();
      res
        .status(200)
        .json({ msg: "All Users were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
  resetFollows: async (req, res) => {
    try {
      let reset = resetFollows();
      res
        .status(200)
        .json({ msg: "All Follows were deleted from the Database." });
      return reset;
    } catch (error) {}
  },

  // const login = async (req, res) => {
  //     try {
  //         const { username, password } = req.body;

  //         // Retrieve hashed password from the database based on the username
  //         const hashedPassword = await getHash(username);

  //         // Compare the provided password with the hashed password
  //         bcrypt.compare(password, hashedPassword, (error, result) => {
  //             if (error) {
  //                 console.error("Error comparing passwords:", error);
  //                 res.status(500).json({ error: "Internal Server Error" });
  //                 return;
  //             }

  //             if (result) {
  //                 // Passwords match, proceed with login logic
  //                 res.status(200).json({ msg: "Login successful" });
  //             } else {
  //                 // Passwords do not match
  //                 res.status(401).json({ msg: "Incorrect password" });
  //             }
  //         });
  //     } catch (error) {
  //         console.error("An error occurred:", error);
  //         res.status(500).json({ error: "Internal Server Error" });
  //     }
  // }
};

export default userController;
