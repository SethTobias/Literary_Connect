<template>
  <div class="settings">
    <Sign v-if="notSign"/>
    <h1>This is an settings page</h1>
  </div>
</template>
<script>
import Sign from "../components/Sign.vue"; 
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