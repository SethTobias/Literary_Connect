<template>
  <Navbar id="nav" />
  <router-view id="content" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
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

* {
  /*  */
  font-family: var(--typography);
  color: var(--txt);
}

#app {
  text-align: center;
  color: var(--txt);
  display: grid;
  grid-template: "nav content" 1fr/1fr 3fr;
}

#nav {
  grid-area: nav;
}

#content {
  grid-area: content;
}
::-webkit-scrollbar {
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
