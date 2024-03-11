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
const getChat = async (chat_id) => {
  let [chat] = await pool.query(
    `
    SELECT * FROM chats WHERE chat_id=?
    `,
    [chat_id]
  );
  return chat;
};
const putChat = async () => {
  let [newChat] = await pool.query(
    `
    INSERT INTO chats () VALUES (?)
    `,
    []
  );
  return newChat;
};
const editChat = async () => {
  let [alteredChat] = await pool.query(
    `
    UPDATE chats SET WHERE chat_id
    `,
    []
  );
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
const getParticipants = async () => {
  let [participants] = await pool.query(`
      SELECT * FROM chat_participants
      `);
  return participants;
};
const getParticipant = async (user_id, chat_id) => {
  let [participant] = await pool.query(
    `
      SELECT * FROM chat_participants WHERE user_id=? AND chat_id=?
      `,
    [user_id, chat_id]
  );
  return participant;
};
const putParticipant = async (user_id, chat_id) => {
  let [newParticipant] = await pool.query(
    `
INSERT INTO chat_participants (user_id,chat_id) VALUES (?,?)
`,
    [user_id, chat_id]
  );
};
const deleteParticipant = async () => {
  await pool.query(
    `
      DELETE FROM chat_participants WHERE participant_id=?
      `
  );
};
/*

*/
const getMessages = async () => {
  let [messages] = await pool.query(`
      SELECT * FROM messages
      `);
  return messages;
};
const putMessage = async () => {
  let [message] = await pool.query(
    `
    INSERT INTO messages () VALUES ()
    `,
    []
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
  editChat,
  deleteChat,
  resetChats,
  //
  getParticipants,
  getParticipant,
  putParticipant,
  resetParticipants,
  //
  getMessages,
  putMessage,
  deleteMessage,
  resetMessages,
};
