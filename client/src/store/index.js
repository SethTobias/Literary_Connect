import { createStore } from "vuex";
import axios from "axios";
let api_url = "https://literary-connect.onrender.com";
export default createStore({
  state: {
    users: [],
    loggedIn: [],
    follows: [],
    followings: [],
    followers: [],
    posts: [],
    post: [],
    userPosts: [],
    like: [],
    comments: [],
  },
  getters: {},
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setUser(state, data) {
      state.loggedIn = data;
    },
    setFollows(state, data) {
      state.follows = data;
    },
    setFollowing(state, data) {
      state.followings = data;
    },
    setFollower(state, data) {
      state.followers = data;
    },
    setPosts(state, data) {
      state.posts = data;
    },
    setPost(state, data) {
      state.post = data;
    },
    setUserPosts(state, data) {
      state.userPosts = data;
    },
    setLike(state, data) {
      state.like = data;
    },
    setComment(state, data) {
      state.comments = data;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user");
        commit("setUsers", data);
        console.log(data);
      } catch (error) {
        console.error("Error: Unable to retrieve Users from database", error);
        commit("setUsers", []);
      }
    },
    async getUser({ commit }) {
      try {
        const { data } = await axios.post(api_url + "/user/:user_id");
        commit("setUserID", data);
      } catch (error) {
        console.error(
          "Error: Failed to retrieve user from Database.",
          error
        );
      }
    },
    async getUserID({ commit }) {
      try {
        const { data } = await axios.post(api_url + "/user/:");
        commit("setUser", data);
      } catch (error) {
        console.error(
          "Error: Failed to log in.Unable to retrieve User from database",
          error
        );
      }
    },

  async getFollows({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/user/follows");
      console.log(data);
      commit("setFollows", data);
    } catch (error) {
      console.log("Error: Unable to retrieve Follows from database");
    }
  },
  async getFollowings({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/user/following/:user_id");
      console.log(data);
      commit("setFollowing", data);
    } catch (error) {
      console.log("Error: Unable to retrieve following from database");
    }
  },
  async getFollowers({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/user/follower/:user_id");
      console.log(data);
      commit("setFollower", data);
    } catch (error) {
      console.log("Error: Unable to retrieve follower from database");
    }
  },
  async getPosts({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/post");
      commit("setPosts", data);
      console.log(data);  
    } catch (error) {
      console.error("Error: Unable to retrieve Posts from database");
      commit("setPosts", []);
    }
  },
  async getPost({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/post/:post_id");
      console.log(data);
      commit("setPost", data);
    } catch (error) {
      console.log("Error: Unable to retrieve Post from database");
    }
  },
  async getUserPost({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/post/:user_id");
      console.log(data);
      commit("setUserPost", data);
    } catch (error) {
      console.log("Error: Unable to retrieve users Post from database");
    }
  },
  async getLike({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/post/like/:post_id");
      console.log(data);
      commit("setLike", data);
    } catch (error) {
      console.log("Error: Unable to retrieve Like from database");
    }
  },
  async getComments({ commit }) {
    try {
      const { data } = await axios.get(api_url + "/comment/:post_id");
      console.log(data);
      commit("setComments", data);
    } catch (error) {
      console.log("Error: Unable to retrieve Comment from database");
    }
  },
  //
  async addUser({ commit }, newUser) {
    const { data } = axios.post(api_url + "/user/add", newUser);
    window.location.reload();
  },
  async follow({ commit }, follower_id) {
    const { data } = axios.post(api_url + "/user/follow", follower_id);
    window.location.reload();
  },
  async addPost({ commit }, newPost) {
    const { data } = axios.post(api_url + "/post/add", newPost);
    window.location.reload();
  },
  async addComment({ commit }, newComment) {
    const { data } = axios.post(api_url + "/post/comment/add", newComment);
    window.location.reload();
  },
  async addLike({ commit }, newLike) {
    const { data } = axios.post(api_url + "/post/like/add", newLike);
    window.location.reload();
  },

  async updateUser({ commit }, alteredUser) {
    await axios.patch(baseUrl + "/user/edit/" + alteredUser.id, alteredUser);
    window.location.reload();
  },
  async updatePost({ commit }, alteredPost) {
    await axios.patch(baseUrl + "/post/edit/" + alteredPost.id, alteredPost);
    window.location.reload();
  },
  async updateComment({ commit }, alteredComment) {
    await axios.patch(
      baseUrl + "/post/comment/edit/" + alteredComment.id,
      alteredComment
    );
    window.location.reload();
  },

  deleteUser(user_id) {
    this.$store.dispatch("deleteUser", user_id);
    window.location.reload();
  },
  unfollow(follower_id) {
    this.$store.dispatch("unfollow", follower_id);
    window.location.reload();
  },
  deletePost(post_id) {
    this.$store.dispatch("deletePost", post_id);
    window.location.reload();
  },
  deleteLike(like_id) {
    this.$store.dispatch("deleteLike", like_id);
    window.location.reload();
  },
  deleteComment(comment_id) {
    this.$store.dispatch("deleteComment", comment_id);
    window.location.reload();
  },
},
  modules: {},
});
