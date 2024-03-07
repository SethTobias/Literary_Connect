//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*

*/ 
const getUsers = async () => {
  let [users] = await pool.query(`
    SELECT * FROM user
    `);
    return users;
};

const getUsersAUN = async () => {
  let [users] = await pool.query(`
    SELECT * FROM user ORDER BY userName ASC
    `);
    return users;
};

const getUsersDUN = async () => {
  let [users] = await pool.query(`
    SELECT * FROM user ORDER BY userName DESC
    `);
    return users;
};
/*

*/ 
const getUser = async (userProfile, userPass) => {
  const [user] = await pool.query(
    `
    SELECT * FROM user WHERE userName = ? AND userPass = ?
    `,
    [userProfile,userPass]
  );
  return user;
};
/*

*/
const putUser = async(firstName,lastName,email,userName,userPass) => {
  const [newUser] = await pool.query(
    `
    INSERT INTO user ( firstName,lastName,email,userName,userPass) VALUES (?,?,?,?,?) 
    `,
    [firstName,lastName,email,userName,userPass]
  );
  return newUser;
};

const getHash = async(userName) => {
  let hash = await pool.query(
    `
    SELECT userPass FROM user 
    `,[userPass]
    );
return hash;
}
/*

*/ 
const alterUserData = async(firstName,lastName,email,newUserName, newUserPass,userName) => {
  const alteredUser = await pool.query(
    `
    UPDATE user SET firstName=?,lastName=?,email=?,userName=?,userPass=? WHERE (userName = ?)
    `,
    [firstName,lastName,email,newUserName,newUserPass,userName]
  );
  return alteredUser;

};
/*

*/ 
const deleteUser = async (userName, userPass) => {
  await pool.query(
    ` 
    DELETE FROM user WHERE (userName = ?)
    `,
    [userName, userPass]
  );
};

const resetUsers = async() => {
  await pool.query(
    `
    DELETE FROM user
    `
  )};

//  


export { 
  //
  getUsers,getUsersAUN,getUsersDUN,getUser,getHash
  
  //
  ,putUser 
  //
  ,deleteUser
  ,resetUsers
};
