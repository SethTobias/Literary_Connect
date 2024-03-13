<template>
  <div class="discover">
    <Sign v-if="notSign"/>
    <h1>Catch up on what's new!</h1>
    <div class="discover-container">
            <div class="discover-post">
              <div class="post-content">

          <p>I like you</p>
              </div>
        <div class="post-info">
          <p><span>Shares</span> <span>Comments</span></p>
        </div>
      </div>
            <div class="discover-post">
        <div class="post-info">
          <p><span>Shares</span> <span>Comments</span></p>
        </div>
      </div>
            <div class="discover-post">
        <div class="post-info">
          <p><span>Shares</span> <span>Comments</span></p>
        </div>
      </div>
            <div class="discover-post">
        <div class="post-info">
          <p><span>Shares</span> <span>Comments</span></p>
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

<style scoped>
 .discover-container {
  display: grid;
  grid: auto-flow 200px / repeat(3,1fr);  
  gap: 25px;
  place-items: center;
 }

 .discover-container .discover-post{
  display: grid;
  grid: 1fr / 1fr;
 }
 .discover-container .discover-post .post-content{
  grid-area: 1/1/2/2;
  background-color: red;
 }
 .discover-container .discover-post .post-content:hover{
  z-index: -2;
  filter: grayscale(.9);
  opacity: .6;
   /* display: none; */
 }
 .discover-container .discover-post .post-info{
   grid-area: 1/1/2/2;
   z-index: -1;
 }

 
</style>