<template>
  <div class="links">
    <Sign v-if="notSign" />
    <h1>This is an links page</h1>
    <h2>This is an links page</h2>
    <h3>This is an links page</h3>
    <h4>This is an links page</h4>
    <h5>This is an links page</h5>
    <h6>This is an links page</h6>
  </div>
</template>
<script>
import Sign from "../components/SignUp.vue";
export default {
  components: {
    Sign,
  },
  props: {
    notSign: {
      type: Boolean,
      default: true,
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
  --fs-30: 3rem;
  --fs-25: 2.5rem;
  --fs-20: 2rem;
  --fs-15: 1.5rem;
  --fs-10: 1rem;
}
h1 {
  font-size: var(--fs-30);
}
h2 {
  font-size: var(--fs-25);
}
h3 {
  font-size: var(--fs-20);
}
h4 {
  font-size: var(--fs-15);
}
h5 {
  font-size: var(--fs-15);
}
h6 {
  font-size: var(--fs-10);
}
</style>
