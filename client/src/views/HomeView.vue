<template>
  <div class="home">
    <div class="home-container">
      <div
        class="home-card"
        v-for="item in $store.state.posts"
        :key="item.id"
        style="margin: 25px auto"
      >
        <div class="card-header">
          <div class="pp"><img :src="item.pp_url" alt="" /></div>
          <div>
            <p>
              <span>{{ item.username }}</span>
            </p>
            <p>Posted {{ item.created_at }}</p>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div class="card-body" :style="{ backgroundImage: `url(${getPostBackground(item)})` }">
          <div class="card-indicators">
            <h3>{{ item.caption }}</h3>
            <!-- <i class="fa-solid fa-circle-arrow-left"></i>
            <i class="fa-solid fa-circle-arrow-right"></i> -->
          </div>
        </div>
        <div class="card-footer">
          <div class="post-dash">
            <div>
              <i class="fa-regular fa-heart" @load="getLike(item.post_id)">{{
                $store.state.like.length
              }}</i>
              <!-- <i class="fa-solid fa-heart"></i>   -->
            </div>
            <div>
              <i class="fa-regular fa-paper-plane"></i>
              <!-- <i class="fa-solid fa-paper-plane"></i> -->
            </div>
            <i class="fa-solid fa-box-archive"></i>
          </div>
          <div class="dash-data">
            <div class="comment-view">
              <div class="comment-icon">
                <i class="fa-regular fa-comment"></i>
                <!-- <i class="fa-solid fa-comment"></i> -->
                <i class="fa-regular fa-user"></i>
                <!-- <i class="fa-solid fa-user"></i> -->
              </div>
              <div class="comments-btn" @click="openModal">View Comments</div>
              <div class="comments-container" v-if="isModalOpen">
                <div @click="closeModal">Close</div>
              </div>
            </div>
            <div class="post-comment">
              <div class="comment-icon">
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-plus"></i>
              </div>
              <input type="text" placeholder="Add a Comment" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-dash">
      <router-link to="/signup">
        <i class="fa-solid fa-user-plus"></i>
        Sign Up
      </router-link>
      <h3>Signed in as...</h3>
      <div class="dash-user">
        <div class="user-chip">
          <img
            :src="user?.pp_url || 'https://i.ibb.co/zXNbtq4/Default-user.jpg'"
            alt=""
          />
          <div class="user-info">
            <div class="user-name">
              <p>{{ user?.username || "Unknown User" }}</p>
              <p>
                {{ user?.firstName || "Unknown" }}
                {{ user?.lastName || "User" }}
              </p>
            </div>
            <i class="fa-solid fa-right-left" @click="logoutUser"></i>
          </div>
        </div>
      </div>
      <h3>Suggestions...</h3>
      <div class="dash-suggestion">
        <div
          class="suggestion-chip"
          v-for="(item, index) in $store.state.users.slice(0, 1)"
          :key="index"
        >
          <img :src="item.pp_url" alt="" />
          <div class="suggestion-info">
            <div class="user-name">
              <p>{{ item.username }}</p>
              <p>{{ item.firstName }} {{ item.lastName }}</p>
            </div>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <h3>Catch up with...</h3>
      <div class="dash-catch">
        <div
          class="catch-chip"
          v-for="(item, index) in $store.state.users.slice(0, 1)"
          :key="index"
        >
          <img :src="item.pp_url" alt="" />
          <div class="catch-info">
            <div class="user-name">
              <p>{{ item.username }}</p>
              <p>{{ item.firstName }} {{ item.lastName }}</p>
            </div>
            <i class="fa-solid fa-feather-pointed"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from "../components/SignUp.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    Sign,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  props: {
    notSign: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getPosts() {
      this.$store.dispatch("getPosts");
    },

    getUsers() {
      this.$store.dispatch("getUsers");
    },
    ...mapState(["user"]),
    getPostBackground() {
      return (post) => {
        if (post && post.post_url) {
          return post.post_url;
        } else {
          return '';
        }
      };
    },
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    ...mapActions(["logout"]),
    async logoutUser() {
      try {
        this.logout();
        this.$router.push("/");
      } catch (error) {
        console.error("Failed to logout:", error);
      }
    },
  },
  mounted() {
    this.getPosts;
    this.getUsers;
    console.log("Logged in user:", this.user);
  },
};
</script>
<style scoped>
:root {
  /*  */
  --txt: hsl(180, 44%, 7%);
  --bg: hsl(180, 40%, 98%);
  --primary: hsl(180, 66%, 53%);
  --secondary: hsl(223, 65%, 71%);
  --accent: hsl(242, 93%, 62%);
  /*  */
  --typography: "Eagle Lake", serif;
  --fs-30: 3rem;
  --fs-25: 2.5rem;
  --fs-20: 2rem;
  --fs-15: 1.5rem;
  --fs-10: 1rem;
}
.home {
  /*  */
  display: grid;
  grid: "post dash" 100% / 2fr 1fr;
  /*  */
  align-items: center;
}

.pp img {
  height: 50px;
  width: 50px;
  border-radius: 25px;
}

.home-container {
  /*  */
  grid-area: post;
  /*  */
  /* background-color: black; */
  /*  */
  /* overflow-y: auto; */
  /*  */
  /* height: 650px; */
  /*  */
  /* margin: auto; */
  /*  */
  display: flex;
  flex-direction: column;
  place-content: space-around center;
}

/* ::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: var(--secondary);
  border: 2px solid var(--txt);
}
::-webkit-scrollbar-track:hover {
  background: var(--primary);
}
::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary);
} */

.comments-container {
  width: 400px;
  height: 300px;
  background-color: hsl(180, 44%, 7%, 25%);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.home-card {
  /*  */
  width: 500px;
  height: 600px;
  /*  */
  margin: 0 auto;
  /*  */
  display: grid;
  grid:
    "header" 0.5fr
    "body" 3fr
    "footer" 1.25fr/ 100%;
  /*  */
  background-color: var(--primary);
}

.card-header {
  /*  */
  display: grid;
  grid: "p h i" 1fr / 1fr 8fr 1fr;
  align-items: center;
  /*  */
  background-color: var(--secondary);
  border: 1px var(--txt) solid;
}

.card-header .pp {
  /*  */
  grid-area: p;
  height: 50px;
  width: 50px;
  border-radius: 25px;
}
.card-header div {
  /*  */
  grid-area: h;
}
.card-header div p span {
  /*  */
  font-size: 1.5rem;
}
.card-header div p {
  /*  */
  font-size: 0.8rem;
}
.card-header i {
  /*  */
  grid-area: i;
  /*  */
  scale: 2;
}

.card-body {
  display: grid;
  grid: 1fr/1fr;
  align-items: center;
  background-size: cover;
  background-position: center;
}

.card-body .card-indicators {
  grid-area: 1/1/2/2;
  z-index: 2;
  display: flex;
  place-content: center space-between;
  text-align: center;
  margin: auto;
  font-size: 35px;
}
.card-footer {
  display: flex;
  flex-direction: column;
  place-content: space-evenly;
  background-color: var(--secondary);
  border: 1px var(--txt) solid;
}
.card-footer .post-dash {
  display: flex;
  place-content: center space-evenly;
}
.card-footer .dash-data .comment-view {
  display: flex;
  place-content: center;
}
.card-footer .dash-data .comment-view .comment-icon {
  display: grid;
  grid: 1fr 1fr 1fr / 1fr 1fr 1fr;
  gap: 5px 5px;
}
.card-footer .dash-data .comment-view .comment-icon .fa-user {
  grid-area: 2/1/4/3;
}
.card-footer .dash-data .comment-view .comment-icon .fa-comment {
  grid-area: 1/2/3/4;
}
.card-footer .dash-data .post-comment {
  display: flex;
  place-content: center;
}
.card-footer .dash-data .post-comment .comment-icon {
  display: grid;
  grid: 1fr / 1fr;
  align-items: center;
}
.card-footer .dash-data .post-comment .comment-icon .fa-comment {
  grid-area: 1/2/1/2;
  scale: 1.3;
}
.card-footer .dash-data .post-comment .comment-icon .fa-plus {
  grid-area: 1/2/1/2;
  z-index: 2;
  color: white;
}
.card-footer .dash-data .post-comment input {
  width: 80%;
}

.home-dash {
  /*  */
  grid-area: dash;
  /*  */
  /* background-color: gold; */
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
}

.dash-user,
.dash-suggestion,
.dash-catch {
  background-color: grey;
  width: 280px;
  height: 100px;
  margin: auto;
  border-radius: 25px;
}

.user-chip,
.suggestion-chip,
.catch-chip {
  display: flex;
  width: 280px;
  height: 100px;
}
.user-info,
.suggestion-info,
.catch-info {
  display: flex;
  place-content: center space-evenly;
  width: 250px;
  margin: auto;
}

:is(.user-info, .suggestion-info, .catch-info) i {
  margin: auto 0;
  scale: 2;
}
:is(.user-chip, .suggestion-chip, .catch-chip) img {
  width: auto;
  height: 75px;
  margin: auto;
  border-radius: 100%;
}

.comment-container {
  z-index: 2;
  /* display: none; */
}
</style>
