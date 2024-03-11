//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();
/*

*/
// *
const getComments = async (post_id) => {
  let [comments] = await pool.query(
    `
    SELECT * FROM comments WHERE post_id=?
    `,
    [post_id]
  );
  return comments;
};
const getComment = async (comment_id) => {
  let [comment] = await pool.query(
    `
    SELECT * FROM comments WHERE comment_id=?
    `,
    [comment_id]
  );
  return comment;
};
const putComment = async (user_id, post_id, comment_text) => {
  let [newComment] = await pool.query(
    `
    INSERT INTO comments (user_id,post_id,comment_text) VALUES (?,?,?)
    `,
    [user_id, post_id, comment_text]
  );
  return newComment;
};
const editComment = async (comment_text, comment_id) => {
  let [alteredComment] = await pool.query(
    `
    UPDATE comments SET comment_text=? WHERE comment_id=?
    `,
    [comment_text, comment_id]
  );
  return alteredComment;
};
const deleteComment = async (comment_id) => {
  await pool.query(
    `
    DELETE FROM comments WHERE comment_id=?
    `,
    [comment_id]
  );
};
// *
const resetComments = async () => {
  await pool.query(
    `
      DELETE FROM comments
      `
  );
};

export {
  getComments,
  getComment,
  putComment,
  editComment,
  deleteComment,
  resetComments,
};
