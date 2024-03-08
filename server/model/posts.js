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


/*

*/
const getLikes = async () => {
    let [likes] = await pool.query(`
      SELECT * FROM post_likes
      `);
      return likes;
  };

  /*

*/
const getShares = async () => {
    let [shares] = await pool.query(`
      SELECT * FROM shared_posts
      `);
      return shares;
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

export {getPosts,getLikes,getShares,resetPosts,resetLikes,resetShares};