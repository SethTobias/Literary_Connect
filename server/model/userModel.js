//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

class userModel {
  async getUsers() {
    const [users] = await pool.query(
      `
            SELECT * FROM user
            `
    );
    return users;
  }
}

export { userModel };
