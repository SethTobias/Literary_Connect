//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

/*

*/ 
const getChats = async () => {
  let [chats] = await pool.query(`
    SELECT * FROM chats
    `);
    return chats;
};


/*

*/ 
const getParticipants = async () => {
    let [participants] = await pool.query(`
      SELECT * FROM chat_participants
      `);
      return participants;
  };

/*

*/ 
const getMessages = async () => {
    let [messages] = await pool.query(`
      SELECT * FROM messages
      `);
      return messages;
  };
/*

*/ 
const resetChats = async () => {
    await pool.query(
      `
      DELETE FROM chats
      `
    );
  };
const resetParticipants = async () => {
    await pool.query(
      `
      DELETE FROM chat_participants
      `
    );
  };
const resetMessages = async () => {
    await pool.query(
      `
      DELETE FROM messages
      `
    );
  };

export {getChats,getParticipants,getMessages,resetChats,resetParticipants,resetMessages};