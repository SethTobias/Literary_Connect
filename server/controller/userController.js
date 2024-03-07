
//
import {  getUsers,getUsersAUN,getUsersDUN,getUser,getHash,putUser,deleteUser,resetUsers } from "../model/userModel.js"
import { config } from "dotenv";
config()
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
    putUser: async(req,res) => {
            try {
                let {firstName,lastName,email,userName,userPass} = req.body;
                bcrypt.hash(userPass, 20, async (error, hash) => {
                    if (error) {
                        console.error("Error hashing password:", error);
                        res.status(500).json({ error: "Internal Server Error" });
                        return;
                    }
                    try {
                        let newUser = await putUser(firstName, lastName, email, userName, hash);
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
    deleteUser: async(req,res) => {
        try {
            let {userName,userPass} = req.body;
          
                    let deletedUser = deleteUser(userName,userPass)
                    res.status(200).json(deletedUser)
        } catch (error) {
            res.json({
                status: res.status(400),
                msg: "An error occurred while processing your request. User was not deleted.",
              });
        }
    },
    resetUsers: async(req,res) => {
        try {
            let reset = resetUsers();
            res.status(200).json({msg:"All Users were deleted from the Database."});
            return reset;
        } catch (error) {
            
        }
    }


    // const login = async (req, res) => {
    //     try {
    //         const { userName, userPass } = req.body;
    
    //         // Retrieve hashed password from the database based on the username
    //         const hashedPassword = await getHash(userName);
    
    //         // Compare the provided password with the hashed password
    //         bcrypt.compare(userPass, hashedPassword, (error, result) => {
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