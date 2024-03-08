//
import { getPosts,getLikes,getShares,resetPosts,resetLikes,resetShares } from "../model/posts.js";
import { config } from "dotenv";
config();
const postController = {
  getPosts: async (req, res) => {
    try {
      const posts = await getPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error in getPosts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getLikes: async (req, res) => {
    try {
      const likes = await getLikes();
      res.status(200).json(likes);
    } catch (error) {
      console.error("Error in getLikes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getShares: async (req, res) => {
    try {
      const shares = await getShares();
      res.status(200).json(shares);
    } catch (error) {
      console.error("Error in getShares:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
    //
    resetPosts: async(req,res) => {
        try {
            let reset = resetPosts();
            res.status(200).json({msg:"All Posts were deleted from the Database."});
            return reset;
        } catch (error) {
            
        }
    },
    resetLikes: async(req,res) => {
        try {
            let reset = resetLikes();
            res.status(200).json({msg:"All Likes were deleted from the Database."});
            return reset;
        } catch (error) {
            
        }
    },
    resetShares: async(req,res) => {
        try {
            let reset = resetShares();
            res.status(200).json({msg:"All Shares were deleted from the Database."});
            return reset;
        } catch (error) {
            
        }
    }
};

export default postController;
