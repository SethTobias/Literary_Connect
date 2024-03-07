<template>
  <nav class="Navbar">
    <router-link to="/">Home</router-link>
    <p>Search</p>
    <router-link to="/discover">Discover</router-link>
    <router-link to="/links">Links</router-link>
    <p>Conversations</p>
    <p>Notifications</p>
    <router-link to="/interact">Interact</router-link>
    <router-link to="/profile">My Profile</router-link>
    <router-link to="/settings">Settings</router-link>
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
  padding: 25px 0;
  height: 100vh;
}

nav :is(a,p) {
  /*  */
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

nav :is(p) {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: var(--accent);
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
