//
import {
  getComments,
  getComment,
  putComment,
  editComment,
  deleteComment,
  resetComments,
} from "../model/comments.js";
import { config } from "dotenv";
config();
const commentController = {
  getComments: async (req, res) => {
    try {
      const comments = await getComments();
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error in getComments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  //
  resetComments: async (req, res) => {
    try {
      let reset = resetComments();
      res
        .status(200)
        .json({ msg: "All Comments were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
};

export default commentController;
