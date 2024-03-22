<template>
  <div class="container">
      <router-link to="/signup" class="link">
      <i class="fa-solid fa-user-plus"></i>
      Sign Up
    </router-link>

    <router-link to="/contact" class="link">Contact</router-link>
  </div>
</template>

<script></script>

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

.link {
  text-decoration: none;
  color: var(--txt); 
  font-family: var(--typography); 
  font-size: var(--fs-15); 
  padding: 5px 10px; 
  margin-right: 15px; 
  border-radius: 5px; 
  background-color: var(--bg); 
  transition: background-color 0.3s ease; 
}

.link i {
  margin-right: 5px; 
}

.link:hover {
  background-color: var(--primary); 
  color: white; 
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
