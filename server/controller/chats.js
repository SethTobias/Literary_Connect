//
import {
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
} from "../model/chats.js";
import { config } from "dotenv";
config();
/*
!!!!!! COME BACK TO
*/
const chatController = {
  getChats: async (req, res) => {
    try {
      const chats = await getChats();
      res.status(200).json(chats);
    } catch (error) {
      console.error("Error in getChats:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getParticipants: async (req, res) => {
    try {
      const participants = await getParticipants();
      res.status(200).json(participants);
    } catch (error) {
      console.error("Error in getParticipants:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getMessages: async (req, res) => {
    try {
      const messages = await getMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error in getMessages:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  
  //
  resetChats: async (req, res) => {
    try {
      let reset = resetChats();
      res
        .status(200)
        .json({ msg: "All Chat Chats were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
  resetParticipants: async (req, res) => {
    try {
      let reset = resetParticipants();
      res
        .status(200)
        .json({ msg: "All Chat Participants were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
  resetMessages: async (req, res) => {
    try {
      let reset = resetMessages();
      res
        .status(200)
        .json({ msg: "All Chat Messages were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
};

export default chatController;
