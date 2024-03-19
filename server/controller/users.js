//
import {
  //
  getUsers,
  getUserID,
  getHash,
  // getUnderReview,
  // getReported,
  getUser,
  getFollows,
  getFollowers,
  getFollowing,
  //
  putUser,
  follow,
  reportUser,
  //
  alterUserAdmin,
  alterUserData,
  alterUserType,
  //
  deleteUser,
  unfollow,
  //
  resetUsers,
  resetFollows,
  checkUsers,
} from "../model/users.js";
import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import bcrypt from "bcrypt";

const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await getUsers();
      res.status(200).json(users);
      // if (error) throw error;
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error in Retrieving Users from the Database." });
    }
  },
  // getUsersAUN: async (req, res) => {
  //   try {
  //     const users = await getUsersAUN();
  //     res.status(200).json(users);
  //     // if (error) throw error;
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users from the Database." });
  //   }
  // },
  // getUsersDUN: async (req, res) => {
  //   try {
  //     // if (error) throw error;
  //     const users = await getUsersDUN();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users type from the Database" });
  //   }
  // },
  // getUsersTypeA: async (req, res) => {
  //   try {
  //     // if (error) throw error;
  //     const users = await getTypeASC();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users type from the Database." });
  //   }
  // },
  // getUsersTypeD: async (req, res) => {
  //   try {
  //     // if (error) throw error;
  //     const users = await getTypeDESC();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users type from the Database." });
  //   }
  // }, // ?Can come back if you find it necessary to implement additional type functions. Also with user status functions.
  // getReview: async (req, res) => {
  //   try {
  //     // if (error) throw error;
  //     const users = await getUnderReview();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users from the Database." });
  //   }
  // },
  // getReported: async (req, res) => {
  //   try {
  //     // if (error) throw error;
  //     const users = await getReported();
  //     res.status(200).json(users);
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ error: "Error in Retrieving Users from the Database." });
  //   }
  // },
  getUserID: async (req, res) => {
    try {
      let { user_id } = req.params;
      const user = await getUserID(user_id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error: `Error in Retrieving User with user_id:${user_id} from the Database.`,
      });
    }
  },

  registerUser: async (req, res) => {
    try {
      const { firstName, lastName, username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await checkUsers(username, email);
      // If user already exists, return error
      if (!existingUser) {
        return res.status(400).json({
          msg: "The username or email has already been registered to the database.",
        });
      }
      // Hash the password
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          console.error("Error hashing password:", error);
          return res.status(500).json({
            error:
              "Internal Server Error. When attempting to hash user's password.",
          });
        }
        try {
          // Add the user to the database
          const newUser = await putUser(
            firstName,
            lastName,
            username,
            email,
            hash
          );
          const token = jwt.sign(
            { username: newUser.username },
            process.env.SECRET_KEY,
            {
              expiresIn: "2h",
            }
          );
          return res.status(201).json({user: newUser,token});
        } catch (error) {
          console.error("Error in putUser:", error);
          return res.status(500).json({
            error:
              "Failed to add user to the database as this username or email has already been used.",
          });
        }
      });
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
      return res.status(400).json({
        msg: "An error occurred while processing your request. User was not added.",
      });
    }
  },
  editUser: async (req, res) => {
    try {
      const { user_id } = req.params;
      let { firstName, lastName, email, username, password, pp_url } = req.body;
      console.log(firstName, lastName, email, username, password, pp_url);

      // Fetch the existing user from the database
      const [user] = await getUserID(user_id);
      // Update user fields if provided in the request body
      firstName ? (firstName = firstName) : ({ firstName } = user);
      lastName ? (lastName = lastName) : ({ lastName } = user);
      email ? (email = email) : ({ email } = user);
      username ? (username = username) : ({ username } = user);

      password
        ? (password = password)
        : ({ password = bcrypt.hash(password, 10) } = user);

      pp_url ? (pp_url = pp_url) : ({ pp_url } = user);

      // Update the user in the database
      const alteredUser = await alterUserData(
        firstName,
        lastName,
        email,
        username,
        password,
        pp_url,
        user_id
      );

      // Respond with the updated user in JSON format
      res.status(200).json(alteredUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  editUserAdmin: async (req, res) => {
    let { user_id } = req.params;
    let { userStatus, userType } = req.body;
    const [user] = await getUserID(user_id);
    userStatus ? (userStatus = userStatus) : ({ userStatus } = user);
    userType ? (userType = userType) : ({ userType } = user);
    // Update the existing user in the database
    const alteredUser = await alterUserAdmin(userStatus, userType, user_id);
    // Respond with the updated user in JSON format
    res.status(200).json(alteredUser);
  },

  editUserType: async (req, res) => {
    let { user_id } = req.params;
    let { userType } = req.body;
    const [user] = await getUser(user_id);
    userType ? (userType = userType) : ({ userType } = user);
    // Update the existing user in the database
    const alteredUser = await alterUserType(userType, user_id);
    // Respond with the updated user in JSON format
    res.status(200).json(alteredUser);
  },
  report: async (req, res) => {
    let { user_id } = req.body;
    // Update the existing user in the database
    const alteredUser = await reportUser(user_id);
    // Respond with the updated user in JSON format
    res.status(200).json(alteredUser);
  },
  deleteUser: async (req, res) => {
    try {
      let { user_id } = req.params;
      let deletedUser = await deleteUser(user_id);
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

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Retrieve hashed password from the database based on the username
      let user = await getUser(username);
      let [[hashedPassword]] = await getHash(username);

      if (!hashedPassword) {
        return res.status(401).json({ msg: "User not found" });
      }

      let userPassword = hashedPassword.password;

      // Compare the provided password with the hashed password
      const result = await bcrypt.compare(password, userPassword);
      if (result) {
        const token = jwt.sign({ username }, process.env.SECRET_KEY, {
          expiresIn: "2h",
        });
        const cookieOptions = {
          maxAge: 7200000,
          httpOnly: true,
        };
        res.cookie("jwt_token", token, cookieOptions);
        // Passwords match, proceed with login logic
        res.status(200).json({ msg: "Login successful", user, token });
        console.log(token);
      } else {
        // Passwords do not match
        res.status(401).json({ msg: "Incorrect password" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getFollows: async (req, res) => {
    try {
      const follows = await getFollows();
      console.log(follows);
      res.status(200).json(follows);
    } catch (error) {
      console.error("Error in getFollows:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getFollowing: async (req, res) => {
    try {
      let { user_id } = req.params;
      const following = await getFollowing(user_id);
      res.status(200).json(following);
      // if (error) throw error;
    } catch (error) {
      res.status(400).json({ msg: "This user does not exist" });
    }
  },
  getFollowers: async (req, res) => {
    try {
      let { user_id } = req.params;
      const followers = await getFollowers(user_id);
      res.status(200).json(followers);
      // if (error) throw error;
    } catch (error) {
      res.status(400).json({ msg: "This user does not exist" });
    }
  },
  follow: async (req, res) => {
    let { follower_id } = req.params;
    let { following_id } = req.body;
    let followUser = await follow(follower_id, following_id);
    res.status(201).json(followUser);
  },
  unfollow: async (req, res) => {
    let { follower_id } = req.params;
    let { following_id } = req.body;
    let unfollowed = await unfollow(follower_id, following_id);
    res
      .status(200)
      .json({ msg: "The user was successfully unfollowed", res: unfollowed });
  },
};

export default userController;