//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*

*/
const getUsers = async () => {
  let [users] = await pool.query(`
    SELECT * FROM users
    `);
  return users;
};

const getUsersAUN = async () => {
  let [users] = await pool.query(`
    SELECT * FROM users ORDER BY username ASC
    `);
  return users;
};

const getUsersDUN = async () => {
  let [users] = await pool.query(`
    SELECT * FROM users ORDER BY username DESC
    `);
  return users;
};

const getUser = async (username, password) => {
  const [users] = await pool.query(
    `
    SELECT * FROM users WHERE username = ? AND password = ?
    `,
    [username, password]
  );
  return users;
};

/*

*/
const getFollows = async () => {
  let [follows] = await pool.query(`
    SELECT * FROM follows
    `);
  return follows;
};

/*

*/
const putUser = async (firstName, lastName,username, email,  password) => {
  const [newUser] = await pool.query(
    `
    INSERT INTO users ( firstName,lastName,username,email,password) VALUES (?,?,?,?,?) 
    `,
    [firstName, lastName, username,email,  password]
  );
  return newUser;
};

const getHash = async (username) => {
  let hash = await pool.query(
    `
    SELECT password FROM users WHERE username = ?
    `,
    [username]
  );
  return hash;
};
/*

*/
const alterUserData = async (
  firstName,
  lastName,
  email,
  newUsername,
  newPassword,
  username
) => {
  const alteredUser = await pool.query(
    `
    UPDATE users SET firstName=?,lastName=?,email=?,username=?,password=? WHERE (username = ?)
    `,
    [firstName, lastName, email, newUsername, newPassword, username]
  );
  return alteredUser;
};
/*

*/
const deleteUser = async (username, password) => {
  await pool.query(
    ` 
    DELETE FROM users WHERE (username = ?)
    `,
    [username, password]
  );
};

const resetUsers = async () => {
  await pool.query(
    `
    DELETE FROM users
    `
  );
};
const resetFollows = async () => {
  await pool.query(
    `
    DELETE FROM follows
    `
  );
};

//

export {
  //
  getUsers,
  getUsersAUN,
  getUsersDUN,
  getFollows,
  getUser,
  getHash,

  //
  putUser,
  //
  deleteUser,
  //
  resetUsers,
  resetFollows
};
