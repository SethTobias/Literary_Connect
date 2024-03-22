<template>
  <nav class="Navbar">
    <!-- <router-link to="/links">
        <i class="fa-solid fa-link"></i>
        <span class="collapse-txt" :style="dynamicText">Links</span>
      </router-link> -->
    <!-- <p @click="toggleStyles">
        <i class="fa-solid fa-comment-dots"></i>
        <i class="fa-regular fa-comment-dots"></i>
        <span class="collapse-txt" :style="dynamicText">Conversations</span>
      </p> -->
    <!-- <p  @click="toggleStyles">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-regular fa-heart"></i>
        <span class="collapse-txt"  :style="dynamicText">Notifications</span>
      </p> -->
    <!-- <router-link to="/interact">
        <i class="fa-solid fa-users"></i>
        <span class="collapse-txt" :style="dynamicText">Interact</span>
      </router-link> -->
    <div class="main-nav" :style="dynamicWidth">
      <!-- Logo -->
      <div id="logo">
        <router-link to="/home" active-class="active-link">
          <h1 class="collapse-txt" :style="dynamicText">Literary Connect</h1>
          <img
            src="https://i.ibb.co/f2FxRQ1/Logo-Light.png"
            alt="Website Logo"
            :style="dynamicLogo"
          />
        </router-link>
      </div>

      <!-- Home Link -->
      <router-link to="/home" class="router-home" active-class="active-link">
        <div class="home-icon">
          <i class="fa-solid fa-location-pin"></i>
          <i class="fa-solid fa-link" style="color: var(--bg)"></i>
        </div>
        <span class="collapse-txt" :style="dynamicText"> Home</span>
      </router-link>

      <!-- Search Link -->
      <p @click="toggleStyles">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="collapse-txt" :style="dynamicText"> Search</span>
      </p>

      <!-- About Link -->
      <router-link to="/about" active-class="active-link">
        <i class="fa-solid fa-eye"></i>
        <span class="collapse-txt" :style="dynamicText">About</span>
      </router-link>

      <!-- Profile Link -->
      <router-link to="/profile" active-class="active-link">
        <i class="fa-solid fa-id-badge"></i>
        <span class="collapse-txt" :style="dynamicText">My Profile</span>
      </router-link>

      <!-- Admin Link (if user is a curator) -->
      <router-link
        
        to="/admin"
        active-class="active-link"
      >
        <i class="fa-solid fa-gears"></i>
        <span class="collapse-txt" :style="dynamicText">Admin</span>
      </router-link>

      <!-- Sign In/Out Links -->
      <router-link to="/" v-if="!$store.state.user" active-class="active-link">
        <i class="fa-solid fa-right-to-bracket"></i>
        <span class="collapse-txt" :style="dynamicText">Sign In</span>
      </router-link>
      <p class="collapse-txt" :style="dynamicText" @click="logoutUser" v-else>
        Sign Out
      </p>
    </div>
    <div class="sub-nav" :style="dynamicIndex">
      <div class="content">
        <div class="input">
          <div class="search">
            <input
              type="text"
              v-model="searchTerm"
              @input="searchUsers"
              placeholder="Search users"
            />
          </div>
          <div class="filters">
            <button @click="selectedFilter = 'All'">All</button>
            <button @click="selectedFilter = 'Curator'">Curator</button>
            <button @click="selectedFilter = 'Reader'">Reader</button>
          </div>
        </div>
        <div class="user-container">
          <div
            class="user-card"
            style="width: 150px; display: flex; margin: 0 auto"
            v-for="user in filteredUsers"
            :key="user.id"
          >
            <img
              :src="item?.pp_url || 'https://i.ibb.co/zXNbtq4/Default-user.jpg'"
              alt=""
              style="width: 50px; height: auto"
            />
            <p style="width: 100px">{{ user && user.username }}</p>
          </div>
        </div>
        <p @click="toggleStyles" style="bottom: 0">Close</p>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dynamicWidth: {
        width: "25%",
      },
      dynamicLogo: {
        width: "auto",
      },
      dynamicText: {
        display: "",
      },
      isStylesApplied: true,
      searchTerm: "",
      selectedFilter: "All",
      isAuthenticated: this.$store.state.isAuthenticated,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    filteredUsers() {
      if (this.selectedFilter === "All") {
        return this.$store.state.users.filter((user) =>
          user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectedFilter === "Curator") {
        return this.$store.state.users.filter(
          (user) =>
            user.userType === "Curator" &&
            user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectedFilter === "Reader") {
        return this.$store.state.users.filter(
          (user) =>
            user.userType === "Reader" &&
            user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return [];
      }
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
    toggleStyles() {
      this.isStylesApplied = !this.isStylesApplied;
      this.dynamicWidth = this.isStylesApplied
        ? { width: "25%" }
        : { width: "5%" };
      this.dynamicIndex = this.isStylesApplied
        ? { "z-index": "-1" }
        : { "z-index": "1" };
      this.dynamicLogo = this.isStylesApplied
        ? { width: "auto" }
        : { width: "50px" };
      this.dynamicText = this.isStylesApplied
        ? { display: "" }
        : { display: "none" };
      this.searchTerm = "";
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
    searchUsers() {},
  },
  mounted() {
    this.getUsers;
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
.sub-nav {
  border: 2.5px var(--txt) solid;
  /*  */
  height: 99.32vh;
  background: var(--secondary);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 25%;

  margin: auto 0 auto auto;
}
.sub-nav .content {
  display: flex;
  flex-direction: column;
  place-content: center space-between;
  height: 99.32vh;
}

.sub-nav .content > p {
  justify-self: end;
}

.sub-nav .content .input {
  margin-top: 25px;
}
.sub-nav .content .user-container {
  overflow-y: scroll;
  margin: 0 auto;
  width: 250px;
}
.main-nav {
  /*  */
  background: var(--secondary);
  /*  */
  position: fixed;
  top: 0;
  left: 0;
  width: 25%;
  display: contents;
  /*  */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  /*  */
  border: 2.5px var(--txt) solid;
  /*  */
  height: 99.32vh;
}

.main-nav :is(a, p) {
  /*  */
  color: var(--txt);
  text-decoration: none;
  font-weight: bold;
}

.main-nav :is(p) {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.main-nav :is(i) {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.main-nav :is(i):active {
  color: var(--accent);
}

.main-nav a.router-link-exact-active {
  color: var(--accent);
}

.router-home {
  display: flex;
  place-content: center;
}

.home-icon {
  display: grid;
  grid: 1fr/ 1fr;
  place-items: center;
}
.home-icon .fa-link {
  grid-area: 1/1/2/2;
  z-index: 2;
  color: white;
}
.home-icon .fa-location-pin {
  grid-area: 1/1/2/2;
  scale: 1.5;
}

.main-nav :is(a, p) {
  /*  */
  color: var(--txt);
  text-decoration: none;
  font-weight: bold;
  font-size: var(--fs-15);
}

.sub-nav .content > p {
  justify-self: end;
  font-size: var(--fs-15);
}

.sub-nav .content .input {
  margin-top: 25px;
  font-size: var(--fs-15);
}

.sub-nav .content .user-container {
  overflow-y: scroll;
  margin: 0 auto;
  width: 250px;
}

.home-icon .fa-link,
.home-icon .fa-location-pin {
  grid-area: 1/1/2/2;
  scale: 1;
  font-size: var(--fs-15);
}

.main-nav .active-link :is(span, i) {
  color: var(--accent);
  font-weight: bold;
}
.main-nav .active-link {
  color: var(--accent);
  font-weight: bold;
}

@media (prefers-color-scheme: light) {
  :root {
    --txt: hsl(180, 44%, 7%);
    --bg: hsl(180, 40%, 98%);
    --primary: hsl(180, 66%, 53%);
    --secondary: hsl(223, 65%, 71%);
    --accent: hsl(242, 93%, 62%);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --txt: hsl(180, 44%, 93%);
    --bg: hsl(180, 40%, 2%);
    --primary: hsl(180, 66%, 47%);
    --secondary: hsl(223, 65%, 29%);
    --accent: hsl(242, 93%, 38%);
  }
}
</style>
