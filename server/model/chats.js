//
import { pool } from "../config/config.js";
import { config } from "dotenv";
config();

// ? const getChats = async () => {
// ? let [chats] = await pool.query(`
// ?   SELECT * FROM chats 
// ?   `);
// ? return chats;
// };

const getChat = async (chat_id) => {
  let [chat] = await pool.query(
    `
    SELECT * FROM chats WHERE chat_id=?
    `,
    [chat_id]
  );
  return chat;
};

const putChat = async (chat_name) => {
  let [newChat] = await pool.query(
    `
    INSERT INTO chats (chat_name) VALUES (?)
    `,[chat_name]
  );
  return newChat;
};

const deleteChat = async (chat_id) => {
  await pool.query(
    `
    DELETE FROM chats WHERE chat_id=?
    `,
    [chat_id]
  );
};
/*

*/
const getParticipants = async (chat_id) => {
  let [participants] = await pool.query(`
      SELECT * FROM chat_participants WHERE chat_id=?
      `,[chat_id]);
  return participants;
};

const putParticipant = async (user_id, chat_id) => {
  let [newParticipant] = await pool.query(
    `
INSERT INTO chat_participants (user_id,chat_id) VALUES (?,?)
`,
    [user_id,chat_id]
  );
  return newParticipant
};

const deleteParticipant = async (participant_id) => {
  await pool.query(
    `
      DELETE FROM chat_participants WHERE participant_id=? 
      `,[participant_id]
  );
};
/*

*/
const getMessages = async (chat_id) => {
  let [messages] = await pool.query(`
      SELECT * FROM messages WHERE chat_id=?
      `);
  return messages;
};

const putMessage = async (user_id,chat_id,message_text) => {
  let [message] = await pool.query(
    `
    INSERT INTO messages (user_id,chat_id,message_text) VALUES (?,?,?)
    `,
    [user_id,chat_id,message_text]
  );
  return message;
};

const deleteMessage = async (message_id) => {
  await pool.query(
    `
    DELETE FROM messages WHERE message_id=?
    `,
    [message_id]
  );
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

export {
  //
  getChats,
  getChat,
  putChat,
  deleteChat,
  resetChats,
  //
  getParticipants,
  putParticipant,
  deleteParticipant,
  resetParticipants,
  //
  getMessages,
  putMessage,
  deleteMessage,
  resetMessages,
};
