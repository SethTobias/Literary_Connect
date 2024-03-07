// 
import {config} from "dotenv";
config();
import mysql from "mysql2";

// 
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.db,
    port: process.env.mysqlPort,
    password: process.env.password,
    uri: process.env.uri,
      // Allow waiting for connections when the connection limit is reached
  waitForConnections: true,
  // Maximum number of connections in the pool
  connectionLimit: 10,
  // Maximum number of connection requests the pool will queue before returning an error
  queueLimit: 0
}).promise()

//
export { pool };