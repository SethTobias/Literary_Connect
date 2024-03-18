<template>
  <div class="interact">
    <Sign v-if="notSign" />
    <div class="preview-container"></div>
    <div class="post-creator">
      <div class="post-data">
        <input type="text" placeholder="Post Data" />
        <input type="text" placeholder="Post Caption" />
        <input type="text" placeholder="Post Type" />
        <!-- Drop Down -->
        <input type="button" />
      </div>
    </div>
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
  --typography: "Eagle Lake", serif;
  --fs-30: 3rem;
  --fs-25: 2.5rem;
  --fs-20: 2rem;
  --fs-15: 1.5rem;
  --fs-10: 1rem;
}
</style>
