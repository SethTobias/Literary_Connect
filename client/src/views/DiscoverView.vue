<template>
  <div class="discover">
    <Sign v-if="notSign"/>
    <h1>Catch up on what's new !</h1>
    <div class="discover-container">
      <div class="discover-post">
        <div class="post-info">
          <p><span>Shares</span><span>Comments</span></p>
        </div>
      </div>
    </div>
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
