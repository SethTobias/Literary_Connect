//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*

*/
const getPosts = async () => {
  let [posts] = await pool.query(`
    SELECT * FROM posts
    `);
  return posts;
};
const getUserPosts = async () => {
  let [posts] = await pool.query(`
    SELECT *,COUNT(*) FROM posts WHERE (user_id=?)
    `);
  return posts;
};
const getPost = async (post_id) => {
  let [post] = await pool.query(
    `
    SELECT * FROM posts WHERE post_id=?
    `,
    [post_id]
  );
  return post;
};
const putPost = async (user_id,content,caption) => {
  let [post] = await pool.query(
    `
    INSERT INTO posts (user_id,content,caption) VALUES (?,?,?)
    `,
    [user_id,content,caption]
  );
  return post
};
const editPost = async (content,caption,post_id) => {
  let [alteredPost] = await pool.query(
    `
    UPDATE SET content=?,caption=? WHERE (post_id=?)
    `,
    [content,caption,post_id]
  );
  return alteredPost
};
const deletePost = async (post_id) => {
  await pool.query(
    `
    DELETE FROM posts WHERE (post_id=?)
    `,
    [post_id]
  );
};

/*

*/
const getLikes = async (post_id) => {
  let [likes] = await pool.query(`
      SELECT * FROM post_likes WHERE post_id=?
      `,[post_id]);
  return likes;
};
const putLike = async (user_id,post_id) => {
  let [like] = await pool.query(
    `
      INSERT INTO post_likes (user_id,post_id) VALUES (?,?)
      `,[user_id,post_id]
  );
  return like
};
const deleteLike = async (like_id) => {
  await pool.query(
    `
    DELETE FROM post_likes WHERE like_id=? 
    `,[like_id]
  );
};
/*
!!!!!! COME BACK TO
*/
const getShares = async () => {
  let [shares] = await pool.query(`
      SELECT * FROM shared_posts
      `);
  return shares;
};
const putShares = async () => {
  let [share] = await pool.query(
    `
    INSERT INTO shared_posts () VALUES ()
    `,
    []
  );
};
const deleteShares = async () => {
  await pool.query(
    `
    DELETE FROM shared_posts WHERE share_id=?
    `
  );
};
/*

*/
const resetPosts = async () => {
  await pool.query(
    `
      DELETE FROM posts
      `
  );
};

const resetLikes = async () => {
  await pool.query(
    `
      DELETE FROM post_likes
      `
  );
};
const resetShares = async () => {
  await pool.query(
    `
      DELETE FROM shared_posts
      `
  );
};

export {
  //
  getPosts,
  getUserPosts,
  getPost,
  putPost,
  editPost,
  deletePost,
  resetPosts,
  //
  getLikes,
  putLike,
  deleteLike,
  resetLikes,
  //
  getShares,
  putShares,
  deleteShares,
  resetShares,
};
