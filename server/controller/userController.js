
//
import { userModel } from "../model/userModel.js";
import { config } from "dotenv";
config()


const userController = {
    getUsers: async (res,req) => {
        const allUsers = await userModel.getUsers();
        res.status(200).json(allUsers);
    }
};

//
export {userController};