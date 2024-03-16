<template>
  <div id="comment" v-for="item in $store.state.comment" :key="item.comment_id">
   <div class="comment-pp">
    <img :src="item.user_pp" alt="">
   </div>
   <p>{{item.username}}<span>{{item.created_at}}</span></p>
   <p>{{item.comment_text}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    getComment() {
      this.$store.dispatch("getComment");
    },
  },
  mounted() {
    this.getComment;
  },
};
</script>
<style scoped></style>
