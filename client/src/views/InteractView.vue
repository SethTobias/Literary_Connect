<template>
  <div class="interact">
    <Sign v-if="notSign"/>
    <h1>This is an interact page</h1>
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