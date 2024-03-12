<template>
  <div class="container">
    <router-link to="/signup">
    <i class="fa-solid fa-user-plus"></i>
    Sign Up
    </router-link>
  </div>
</template>

<script></script>

<style scoped>
:root {
  --txt: hsl(180, 44%, 7%);
  --bg: hsl(180, 40%, 98%);
  --primary: hsl(180, 66%, 53%);
  --secondary: hsl(223, 65%, 71%);
  --accent: hsl(242, 93%, 62%);
}

.container {
  /*  */
  position: absolute;
  top: 0;
  right: 0;
    /*  */
    margin: 25px 25px 0;
  /*  */
  z-index: 10;
}

 a.router-link-exact-active {
  /*  */
  text-decoration: none;
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
