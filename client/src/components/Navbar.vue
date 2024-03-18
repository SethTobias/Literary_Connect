<template>
  <nav class="Navbar">
    <div class="main-nav" :style="dynamicWidth">
      <div id="logo">
        <router-link to="/">
          <h1 class="collapse-txt" :style="dynamicText">Literary Connect</h1>

          <img
            src="https://i.ibb.co/f2FxRQ1/Logo-Light.png"
            alt="Website Logo"
            :style="dynamicLogo"
          />
          <!-- <img src="https://i.ibb.co/Z2ncByL/Logo-Dark.png" alt="Website Logo"> -->
        </router-link>
      </div>
      <router-link to="/" class="router-home">
        <div class="home-icon">
          <i class="fa-solid fa-location-pin"></i>
          <i class="fa-solid fa-link"></i>
        </div>
        <span class="collapse-txt" :style="dynamicText"> Home</span>
      </router-link>
      <p @click="toggleStyles">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="collapse-txt" :style="dynamicText"> Search</span>
      </p>
      <router-link to="/discover">
        <i class="fa-solid fa-eye"></i>
        <!-- <i class="fa-regular fa-eye"></i> -->
        <span class="collapse-txt" :style="dynamicText">Discover</span>
      </router-link>
      <!-- <router-link to="/links">
        <i class="fa-solid fa-link"></i>
        <span class="collapse-txt" :style="dynamicText">Links</span>
      </router-link> -->
      <p  @click="toggleStyles">
        <i class="fa-solid fa-comment-dots"></i>
        <!-- <i class="fa-regular fa-comment-dots"></i> -->
        <span class="collapse-txt"  :style="dynamicText">Conversations</span>
      </p>
      <!-- <p  @click="toggleStyles">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-regular fa-heart"></i>
        <span class="collapse-txt"  :style="dynamicText">Notifications</span>
      </p> -->
      <router-link to="/interact">
        <i class="fa-solid fa-users"></i>
        <span class="collapse-txt" :style="dynamicText">Interact</span>
      </router-link>
      <router-link to="/profile">
        <i class="fa-solid fa-id-badge"></i>
        <!-- <i class="fa-regular fa-id-badge"></i> -->
        <span class="collapse-txt" :style="dynamicText">My Profile</span>
      </router-link>
      <router-link to="/admin" :v-if="$store.state.userType==='Curator'">
        <i class="fa-solid fa-gears"></i>
        <span class="collapse-txt" :style="dynamicText">Admin</span>
      </router-link>
      <router-link to="/signin">
        <i class="fa-solid fa-right-to-bracket"></i>
        <span class="collapse-txt" :style="dynamicText">Sign In</span>
      </router-link>
    </div>
    <div class="sub-nav"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dynamicWidth: {
        width: "25%"
      },
        dynamicLogo: {
            width: "auto"

        },
        dynamicText: {
            display: ""

        },
      isStylesApplied: true,
    };
  },
  methods: {
    toggleStyles() {
      this.isStylesApplied = !this.isStylesApplied;
      this.dynamicWidth = this.isStylesApplied ? { width: "25%"} : { width: "5%"};
      this.dynamicLogo = this.isStylesApplied ? {width: "auto"} : {width: "50px"};
      this.dynamicText = this.isStylesApplied ? {display: ""} : {display: "none"};
    },
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
  z-index: -1;
}
.main-nav,
.sub-nav {
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



/* #logo img {

}

.main-nav .collapse-txt {
  display: none;
}  */

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
