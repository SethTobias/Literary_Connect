import { createStore } from "vuex";
import axios from "axios";
let api_url = "https://literary-connect.onrender.com";
export default createStore({
  state: {
    user: [],
    userReview: [],
    userReported: [],
    loggedIn: [],
    follow: [],
    following: [],
    follower: [],
    post: [],
    like: [],
    comment: [],
  },
  getters: {},
  mutations: {
    setUsers(state, data) {
      state.user = data;
    },
    setUser(state, data) {
      state.loggedIn = data;
    },
    setReview(state, data) {
      state.userReview = data;
    },
    setReported(state, data) {
      state.userReported = data;
    },
    setFollows(state, data) {
      state.follows = data;
    },
    setFollowing(state, data) {
      state.following = data;
    },
    setFollower(state, data) {
      state.follower = data;
    },
    setPost(state, data) {
      state.post = data;
    },
    setLike(state, data) {
      state.like = data;
    },
    setComment(state, data) {
      state.comment = data;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user");
        // console.log(data)
        commit("setUsers", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Users from database");
      }
    },
    async getUser({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/login");
        // console.log(data)
        commit("setUser", data);
      } catch (error) {
        console.log("Error: Unable to retrieve User from database");
      }
    },
    async getReview({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/review");
        console.log(data);
        commit("setReview", data);
      } catch (error) {
        console.log("Error: Unable to retrieve User from database");
      }
    },
    async getReported({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/reported");
        console.log(data);
        commit("setReported", data);
      } catch (error) {
        console.log("Error: Unable to retrieve User from database");
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
    async getFollowing({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/following");
        console.log(data);
        commit("setFollowing", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Following from database");
      }
    },
    async getFollower({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/user/follower");
        console.log(data);
        commit("setFollower", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Follower from database");
      }
    },
    async getPost({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/post");
        console.log(data);
        commit("setPost", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Post from database");
      }
    },
    async getLike({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/post/Like");
        console.log(data);
        commit("setLike", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Like from database");
      }
    },
    async getComment({ commit }) {
      try {
        const { data } = await axios.get(api_url + "/comment/:post_id");
        console.log(data);
        commit("setComment", data);
      } catch (error) {
        console.log("Error: Unable to retrieve Comment from database");
      }
    },
  },
  modules: {},
});
