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
      let {post_id} = req.params;
      const comments = await getComments(post_id);
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error in getComments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  putComment: async (req, res) => {
    let { user_id, post_id } = req.params
    let {  comment_text } = req.body;
    let comment = await putComment(user_id, post_id, comment_text);
    res.status(200).json(comment);
  },
  editComment: async (req, res) => {
    let { comment_id } = req.params
    
    let { comment_text } = req.body;
    const [comment] = await getComment(comment_id);
    comment_text ? (comment_text = comment_text) : ({ comment_text } = comment);
    let alteredComment = await editComment(comment_text, comment_id);
    res.status(200).json(alteredComment);
  },
  deleteComment: async (req, res) => {
    let {comment_id} = req.params;
    let comment = await deleteComment(comment_id);
    res.status(200).json(comment);
  },
  resetComments: async (req, res) => {
    await resetComments();
    res.status(200).json({ msg: "All Comments were deleted from the Database." });
  },
};

export default commentController;
