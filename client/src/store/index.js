import { createStore } from "vuex";
import axios from "axios";
let api_url = "https://literary-connect.onrender.com";  
export default createStore({
  state: {
    user: null,
    token: null,
    users: [],
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
    // Log In/Out
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUser(state) {
      state.user = null;
    },
    clearToken(state) {
      state.token = null;
    },
    // 
    setUsers(state, data) {
      state.users = data;
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
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post(api_url + '/user/login', {
          username,
          password,
        });
        const { user , token } = response.data;
        console.log(user,token)
        commit('setUser', user[0]);
        localStorage.setItem('token', token);
        commit('setToken', token);
        return { success: true };
      } catch (error) {
        console.error('Login failed:', error);
        return { success: false, error: error.response.data.msg };
      }
    },
    async logout({ commit }) {
      try {
        commit('clearUser');
        localStorage.removeItem('token')
        commit('clearToken');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
    async getUserID({ commit }, user_id) {
      try {
        const { data } = await axios.post(api_url + "/user/" + user_id);
        commit("setUser", data);
      } catch (error) {
        console.error("Error: Failed to retrieve user from Database.", error);
      }
    },

    async getFollows({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/follows");
        console.log(data);
        commit("setFollows", data);
      } catch (error) {
        console.error("Error: Unable to retrieve Follows from database", error);
      }
    },
    async getFollowings({ commit }, user_id) {
      try {
        const { data } = await axios.get(
          api_url + "/user/following/" + user_id
        );
        console.log(data);
        commit("setFollowing", data);
      } catch (error) {
        console.error(
          "Error: Unable to retrieve followings from database",
          error
        );
      }
    },
    async getFollowers({ commit }, user_id) {
      try {
        const { data } = await axios.get(api_url + "/user/follower/" + user_id);
        console.log(data);
        commit("setFollower", data);
      } catch (error) {
        console.error(
          "Error: Unable to retrieve followers from database",
          error
        );
      }
    },
    async getPosts({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/post");
        commit("setPosts", data);
        console.log(data);
      } catch (error) {
        console.error("Error: Unable to retrieve Posts from database", error);
        commit("setPosts", []);
      }
    },
    async getPost({ commit }, post_id) {
      try {
        const { data } = await axios.get(api_url + "/post/" + post_id);
        console.log(data);
        commit("setPost", data);
      } catch (error) {
        console.error("Error: Unable to retrieve Post from database", error);
      }
    },
    async getUserPost({ commit }, user_id) {
      try {
        const { data } = await axios.get(api_url + "/post/" + user_id);
        console.log(data);
        commit("setUserPost", data);
      } catch (error) {
        console.error(
          "Error: Unable to retrieve users Post from database",
          error
        );
      }
    },
    async getLike({ commit }, post_id) {
      try {
        const { data } = await axios.get(api_url + "/post/like/" + post_id);
        console.log(data);
        commit("setLike", data);
      } catch (error) {
        console.error("Error: Unable to retrieve Like from database", error);
      }
    },
    async getComments({ commit }, post_id) {
      try {
        const { data } = await axios.get(api_url + "/comment/" + post_id);
        console.log(data);
        commit("setComments", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Comment from database");
      }
    },
    //
    async addUser({ commit }, newUser) {
      try {
        const { data } = await axios.post(api_url + "/user/add", newUser);
        console.log("New user added:", data);
        dispatch("getUsers");
        window.location.reload();
      } catch (error) {
        console.error(
          "Error: Failed to add a new user to the Database.",
          error
        );
      }
    },
    async follow({ commit }, follower_id) {
      try {
        const { data } = await axios.post(
          api_url + "/user/follow" + follower_id
        );
        console.log("New follow added:", data);
        window.location.reload();
      } catch (error) {
        console.error(
          "Error: Failed to add a new follow to the Database.",
          error
        );
      }
    },
    async addPost({ commit }, newPost) {
      try {
        const { data } = await axios.post(api_url + "/post/add", newPost);
        console.log("New post added:", data);
        window.location.reload();
      } catch (error) {
        console.error("Error: adding new post into the Database.", error);
        // Handle the error as needed
      }
    },
    async addComment({ commit }, newComment) {
      try {
        const { data } = await axios.post(
          api_url + "/post/comment/add",
          newComment
        );
        console.log("New comment added:", data);
        window.location.reload();
      } catch (error) {
        console.error("Error: adding a new comment into the Database.", error);
      }
    },
    async addLike({ commit }, newLike) {
      try {
        const { data } = await axios.post(api_url + "/post/like/add", newLike);
        console.log("New like added:", data);
        window.location.reload();
      } catch (error) {
        console.error("Error: adding a new like to the Database", error);
      }
    },

    async updateUser({ commit }, alteredUser) {
      await axios.patch(
        api_url + "/user/edit/" + alteredUser.user_id,
        alteredUser
      );
      commit("updateUser", alteredUser);
      window.location.reload();
    },
    async updatePost({ commit }, alteredPost) {
      await axios.patch(
        api_url + "/post/edit/" + alteredPost.post_id,
        alteredPost
      );
      commit("updatePost", alteredPost);
      window.location.reload();
    },
    async updateComment({ commit }, alteredComment) {
      await axios.patch(
        api_url + "/post/comment/edit/" + alteredComment.comment_id,
        alteredComment
      );
      commit("updateComment", alteredComment);
      window.location.reload();
    },

    deleteUser(user_id) {
      this.$store
        .dispatch("deleteUser", user_id)
        .then(() => {
          console.log("User deleted successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((error) => {
          console.error("Error: deleting user from the Database", error);
        });
    },
    unfollow(follower_id) {
      this.$store
        .dispatch("unfollow", follower_id)
        .then(() => {
          console.log("Unfollowed successfully");
        })
        .catch((error) => {
          console.error("Error: unfollowing the specified user.", error);
        });
    },
    deletePost(post_id) {
      this.$store
        .dispatch("deletePost", post_id)
        .then(() => {
          console.log("Post deleted successfully");
        })
        .catch((error) => {
          console.error("Error: deleting post from the Database", error);
        });
    },
    deleteLike(like_id) {
      this.$store
        .dispatch("deleteLike", like_id)
        .then(() => {
          console.log("Like deleted successfully");
        })
        .catch((error) => {
          console.error("Error: deleting like from the Database.", error);
        });
    },
    deleteComment(comment_id) {
      this.$store
        .dispatch("deleteComment", comment_id)
        .then(() => {
          console.log("Comment deleted successfully");
        })
        .catch((error) => {
          console.error("Error: deleting comment from the Database", error);
        });
    },
  },
  modules: {},
});
