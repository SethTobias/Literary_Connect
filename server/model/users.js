//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*
! Admin Functions: To be used by the Admin 
*/

const getUsers = async () => {
  let [users] = await pool.query(`
    SELECT * FROM users
    `);
  return users;
};

// const getUsersAUN = async () => {
//   let [users] = await pool.query(`
//     SELECT * FROM users ORDER BY username
//     `);
//   return users;
// };
// const getUsersDUN = async () => {
//   let [users] = await pool.query(`
//     SELECT * FROM users ORDER BY username DESC
//     `);
//   return users;
// };

const getUserID = async (user_id) => {
  const [userID] = await pool.query(
    `
    SELECT * FROM users WHERE user_id = ?
    `,
    [user_id]
  );
  return userID;
};

// const getTypeASC = async () => {
//   let [userType] = await pool.query(`
//     SELECT * FROM users ORDER BY userType ASC,username
//     `);
//   return userType;
// };
// const getTypeDESC = async () => {
//   let [userType] = await pool.query(`
//     SELECT * FROM users ORDER BY userType DESC,username
//     `);
//   return userType;
// };
// const getReaders = async () => {
//   let [readers] = await pool.query(`
//     SELECT * FROM users WHERE userType = "Reader" ORDER BY username
//     `);
//   return readers;
// };
// const getWriters = async () => {
//   let [writers] = await pool.query(`
//     SELECT * FROM users WHERE userType = "Writer" ORDER BY username
//     `);
//   return writers;
// };

// const getCurators = async () => {
//   let [curators] = await pool.query(`
//     SELECT * FROM users WHERE userType = "Curator" ORDER BY username
//     `);
//   return curators;
// };
// const getStatusASC = async () => {
//   let [status] = await pool.query(`
//     SELECT * FROM users ORDER BY userStatus,username ASC
//     `);
//   return status;
// };
// const getStatusDESC = async () => {
//   let [status] = await pool.query(`
//     SELECT * FROM users ORDER BY userStatus,username DESC
//     `);
//   return status;
// };
// const getUnderReview = async () => {
//   let [underReview] = await pool.query(`
//     SELECT * FROM users WHERE userStatus = "Under Review"
//     `);
//   return underReview;
// };
// const getReported = async () => {
//   let [reported] = await pool.query(`
//     SELECT * FROM users WHERE userStatus = "Reported"
//     `);
//   return reported;
// };

const getHash = async (username) => {
  let hash = await pool.query(
    `
    SELECT password FROM users WHERE username = ?
    `,
    [username]
  );
  return hash;
};

// *
const resetUsers = async () => {
  await pool.query(
    `
    DELETE FROM users
    `
  );
};
// *
const resetFollows = async () => {
  await pool.query(
    `
    DELETE FROM follows
    `
  );
};

/*
! User Functions: To be used by the user 
*/
//  * Log in - Add JWT
const getUser = async (username) => {
  const [users] = await pool.query(
    `
    SELECT * FROM users WHERE username = ?
    `,
    [username]
  );
  return users;
};

const checkUsers = async (username,email) => {
  const [users] = await pool.query(
    `
    SELECT * FROM users WHERE username = ? AND email=?
    `,
    [username,email]
  );
  return users;
};

// * Sign Up
const putUser = async (firstName, lastName, username, email, password) => {
  const [newUser] = await pool.query(
    `
    INSERT INTO users ( firstName,lastName,username,email,password) VALUES (?,?,?,?,?) 
    `,
    [firstName, lastName, username, email, password]
  );
  return newUser;
};

// *
const alterUserData = async (
  firstName,
  lastName,
  email,
  newUsername,
  newPassword,
  user_id
) => {
  const alteredUser = await pool.query(
    `
    UPDATE users SET firstName=?,lastName=?,email=?,username=?,password=? WHERE (user_id = ?)
    `,
    [firstName, lastName, email, newUsername, newPassword, user_id]
  );
  return alteredUser;
};

const alterUserAdmin = async (userStatus,userType, user_id) => {
  const alteredStatus = await pool.query(
    `
    UPDATE users SET userStatus=?,userType=? WHERE (user_id = ?)
    `,
    [userStatus,userType, user_id]
  );
  return alteredStatus;
};

const alterUserType = async (userType, user_id) => {
  const alteredStatus = await pool.query(
    `
    UPDATE users SET userType=?,userStatus="Under Review" WHERE (user_id = ?)
    `,
    [userType, user_id]
  );
  return alteredStatus;
};

const reportUser = async (user_id) => {
  const reportedUser = await pool.query(
    `
    UPDATE users SET userStatus="Reported" WHERE (user_id = ?)
    `,
    [user_id]
  );
  return reportedUser;
};
//  *
const deleteUser = async (user_id) => {
  await pool.query(
    ` 
    DELETE FROM users WHERE (user_id = ?)
    `,
    [user_id]
  );
};
/*

*/
const getFollows = async () => {
  let [follows] = await pool.query(`
    SELECT * FROM follows
    `);
  return follows;
};

const getFollowers = async (following_id) => {
  let [followers] = await pool.query(
    `
    SELECT follower_id FROM follows WHERE following_id = ?
    `,
    [following_id]
  );
  return followers;
};
const getFollowing = async (follower_id) => {
  let [following] = await pool.query(
    `
    SELECT following_id FROM follows WHERE follower_id = ?
    `,
    [follower_id]
  );
  return following;
};
const follow = async (follower_id, following_id) => {
  let newFollower = await pool.query(
    `
    INSERT INTO follows (follower_id,following_id) VALUES(?,?)
    `,
    [follower_id, following_id]
  );
  return newFollower;
};

const unfollow = async (follower_id, following_id) => {
  let unfollow = await pool.query(
    `
    DELETE FROM follows WHERE follower_id =? AND following_id =?
    `,
    [follower_id, following_id]
  );
  return unfollow;
};
// !Exporting of Functions
export {
  //
  // getUsersAUN,
  // getUsersDUN,

  getUsers,
  getUserID,
  getHash,
  getUser,
  getFollows,
  getFollowers,
  getFollowing,

  // getTypeASC,
  // getTypeDESC,
  // getStatusASC,
  // getStatusDESC,
  // getReaders,
  // getWriters,
  // getCurators,
  // getUnderReview,
  // getReported,
  
  //
  checkUsers,
  //
  putUser,
  follow,
  reportUser,
  //
  alterUserAdmin,
  alterUserData,
  alterUserType,
  //
  deleteUser,
  unfollow,
  //
  resetUsers,
  resetFollows,
};
