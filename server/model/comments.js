//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*

*/ 
const getComments = async () => {
  let [comments] = await pool.query(`
    SELECT * FROM comments
    `);
    return comments;
};
/*

*/ 
const resetComments = async () => {
    await pool.query(
      `
      DELETE FROM comments
      `
    );
  };

export {getComments,resetComments};