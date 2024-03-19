//
import {
  getPosts,
  getUserPosts,
  getPost,
  putPost,
  editPost,
  deletePost,
  resetPosts,
  //
  getLikes,
  putLike,
  deleteLike,
  resetLikes,
  //
  // getShares,
  // putShares,
  // deleteShares,
  // resetShares,
} from "../model/posts.js";
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
  getUserPosts: async (req, res) => {
    let { user_id } = req.params;
    let posts = await getUserPosts(user_id);
    res.status(200).json(posts);
  },
  getPost: async (req, res) => {
    let { post_id } = req.params;
    let post = await getPost(post_id);
    res.status(200).json(post);
  },
  putPost: async (req, res) => {
    let { user_id } = req.params
    let { post_url, caption } = req.body;

    let post = await putPost(user_id, post_url, caption);
    res.status(201).json(post);
  },
  editPost: async (req, res) => {
    let { post_id } = req.params
    let { caption  } = req.body;
    const [post] = await getPost(post_id);
    caption ? (caption = caption) : ({ caption } = post);
    let alteredPost = await editPost(caption, post_id);
    res.status(200).json(alteredPost);
  },
  deletePost: async (req, res) => {
    let { post_id } = req.params;
    let post = await deletePost(post_id);
    res.status(200).json(post);
  },
  // ?
  getLikes: async (req, res) => {
    try {
      const likes = await getLikes(post_id);
      res.status(200).json(likes);
    } catch (error) {
      console.error("Error in getLikes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getPostLikes: async (req, res) => {
    try {
      let {post_id} = req.params;
      console.log(post_id)
      const likes = await getPostLikes(post_id);
      console.log(likes)
      res.status(200).json(likes);
    } catch (error) {
      console.error("Error in getLikes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  putLike: async (req, res) => {
    let { user_id, post_id } = req.params;
    let like = putLike(user_id, post_id);
    res.status(200).json(like);
  },
  deleteLike: async (req, res) => {
    let { like_id } = req.body;
    let like = await deleteLike(like_id);
    res.status(200).json(like);
  },
  /*
!!!!!! COME BACK TO
*/
  // ?
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
  resetPosts: async (req, res) => {
    try {
      let reset = resetPosts();
      res
        .status(200)
        .json({ msg: "All Posts were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
  resetLikes: async (req, res) => {
    try {
      let reset = resetLikes();
      res
        .status(200)
        .json({ msg: "All Likes were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
  resetShares: async (req, res) => {
    try {
      let reset = resetShares();
      res
        .status(200)
        .json({ msg: "All Shares were deleted from the Database." });
      return reset;
    } catch (error) {}
  },
};

export default postController;
