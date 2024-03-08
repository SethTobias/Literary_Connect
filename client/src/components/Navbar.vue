<template>
  <nav class="Navbar">
    <div id="logo">
      <router-link to="/">
        <h1>Literary Connect</h1>

        <img src="https://i.ibb.co/f2FxRQ1/Logo-Light.png" alt="Website Logo" />
        <!-- <img src="https://i.ibb.co/Z2ncByL/Logo-Dark.png" alt="Website Logo"> -->
      </router-link>
    </div>
    <router-link to="/">
    <div class="route-home">
      <div class="home-icon">
       <i class="fa-solid fa-location-pin"></i>
        <i class="fa-solid fa-link"></i>
      </div>
      Home
      </div> 
    </router-link>
    <p>
      <i class="fa-solid fa-magnifying-glass"></i>
      Search
      
      </p>
    <router-link to="/discover">
    <i class="fa-solid fa-eye"></i>
    <!-- <i class="fa-regular fa-eye"></i> -->
    Discover
    </router-link>
    <router-link to="/links">
    <i class="fa-solid fa-link"></i>
    Links
    </router-link>
    <p>
      <i class="fa-solid fa-comment-dots"></i>
      <!-- <i class="fa-regular fa-comment-dots"></i> -->
      Conversations
      </p>
    <p>
      <i class="fa-solid fa-heart"></i>
      <!-- <i class="fa-regular fa-heart"></i> -->
    Notifications
    </p>
    <router-link to="/interact">
    <i class="fa-solid fa-users"></i>
    Interact
    </router-link>
    <router-link to="/profile">
    <i class="fa-solid fa-id-badge"></i>
    <!-- <i class="fa-regular fa-id-badge"></i> -->
    My Profile
    </router-link>
    <router-link to="/settings">
    <i class="fa-solid fa-gears"></i>
    Settings
    </router-link>
  </nav>
</template>

<script>
// export default {
//   name: 'Navbar',
// }
</script>

<style scoped>
:root {
  --txt: hsl(180, 44%, 7%);
  --bg: hsl(180, 40%, 98%);
  --primary: hsl(180, 66%, 53%);
  --secondary: hsl(223, 65%, 71%);
  --accent: hsl(242, 93%, 62%);
}

nav {
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

nav :is(a, p) {
  /*  */
  color: var(--txt);
  text-decoration: none;
  font-weight: bold;
}

nav :is(p) {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

nav :is(i) {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

nav :is(i):active {
  color: var(--accent);
}

nav a.router-link-exact-active {
  color: var(--accent);
}

#logo {
  
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
