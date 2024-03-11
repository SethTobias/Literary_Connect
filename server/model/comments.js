//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();
/*

*/
// *
const getComments = async () => {
  let [comments] = await pool.query(`
    SELECT * FROM comments
    `);
  return comments;
};
const getComment = async (comment_id) => {
  let [comment] = await pool.query(
    `
    SELECT * FROM comments WHERE comment_id=?
    `,
    [comment_id]
  );
};
const putComment = async () => {
  let [newComment] = await pool.query(
    `
    INSERT INTO comments () VALUES (?)
    `,
    []
  );
  return newComment;
};
const editComment = async () => {
  let [alteredComment] = await pool.query(
    `
    UPDATE comments SET  WHERE comment_id
    `,
    []
  );
  return alteredComment;
};
const deleteComment = async (comment_id) => {
  await pool.query(
    `
    DELETE FROM comments WHERE comment_id=?
    `
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
