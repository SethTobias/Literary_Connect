<template>
  <nav class="Navbar">
    <div class="main-nav">
      <div id="logo">
        <router-link to="/">
          <h1 class="collapse-txt">Literary Connect</h1>

          <img
            src="https://i.ibb.co/f2FxRQ1/Logo-Light.png"
            alt="Website Logo"
          />
          <!-- <img src="https://i.ibb.co/Z2ncByL/Logo-Dark.png" alt="Website Logo"> -->
        </router-link>
      </div>
      <router-link to="/" class="router-home">
        <div class="home-icon">
          <i class="fa-solid fa-location-pin"></i>
          <i class="fa-solid fa-link"></i>
        </div>
        <span class="collapse-txt"> Home</span>
      </router-link>
      <p>
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="collapse-txt"> Search</span>
      </p>
      <router-link to="/discover">
        <i class="fa-solid fa-eye"></i>
        <!-- <i class="fa-regular fa-eye"></i> -->
        <span class="collapse-txt">Discover</span>
      </router-link>
      <router-link to="/links">
        <i class="fa-solid fa-link"></i>
        <span class="collapse-txt">Links</span>
      </router-link>
      <p>
        <i class="fa-solid fa-comment-dots"></i>
        <!-- <i class="fa-regular fa-comment-dots"></i> -->
        <span class="collapse-txt">Conversations</span>
      </p>
      <p>
        <i class="fa-solid fa-heart"></i>
        <!-- <i class="fa-regular fa-heart"></i> -->
        <span class="collapse-txt">Notifications</span>
      </p>
      <router-link to="/interact">
        <i class="fa-solid fa-users"></i>
        <span class="collapse-txt">Interact</span>
      </router-link>
      <router-link to="/profile">
        <i class="fa-solid fa-id-badge"></i>
        <!-- <i class="fa-regular fa-id-badge"></i> -->
        <span class="collapse-txt">My Profile</span>
      </router-link>
      <router-link to="/settings">
        <i class="fa-solid fa-gears"></i>
        <span class="collapse-txt">Settings</span>
      </router-link>
    </div>
    <div class="sub-nav"></div>
  </nav>
</template>

<script>
// export default {
//   name: 'Navbar',
// }
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
  --fs30: 30px;
  --fs25: 25px;
  --fs15: 15px;
  --fs10: 10px;
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

/* .main-nav {
  width: 5%;
}

#logo img {
  width: 50px;
  place-self: center;
}

.main-nav .collapse-txt {
  display: none;
} */

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
