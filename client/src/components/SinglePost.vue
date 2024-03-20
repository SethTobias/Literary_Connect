<template>
  <div id="single" v-for="item in $store.state.post" :key="item.post_id">
    <div class="single-img">
      <div class="single-indicators">
        <i class="fa-solid fa-circle-arrow-left"></i>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
    </div>
    <div class="single-info">
      <div class="info-header">
        <div></div>
        <div>
          <p>
            {{ item.username }}
          </p>
          <p>{{ item.created_at }}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div class="info-icon">
        <div>
          <i class="fa-regular fa-heart"></i>
          <!-- <i class="fa-solid fa-heart"></i>-->
          <p>n likes</p>
        </div>
        <div>
          <div>
            <i class="fa-regular fa-comment"></i>
            <!-- <i class="fa-solid fa-comment"></i> -->
          </div>
          <div>
            <i class="fa-regular fa-user"></i>
            <!-- <i class="fa-solid fa-user"></i> -->
          </div>
        </div>
        <div>
          <i class="fa-regular fa-paper-plane"></i>
          <!-- <i class="fa-solid fa-paper-plane"></i> -->
        </div>
        <i class="fa-solid fa-box-archive"></i>
      </div>
    </div>
    <div class="info-comment">
      <div class="comments-container">
        <div
          id="comment"
          v-for="comment in $store.state.comment"
          :key="comment.comment_id"
        >
          <div class="comment-pp">
            <img :src="item.user_pp" alt="" />
          </div>
          <p>
            {{ comment.username }}<span>{{ comment.created_at }}</span>
          </p>
          <p>{{ comment.comment_text }}</p>
        </div>
      </div>
      <div class="comment-input">
        <div class="comment-icon">
          <i class="fa-solid fa-comment"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
        <input type="text" placeholder="Add a Comment" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getPostId() {
      this.$store.dispatch("getPostId");
    },
    getComment() {
      this.$store.dispatch("getComment");
    },
  },
  mounted() {
    this.getPostId;
    this.getComment;
  },
};
</script>
<style scoped></style>
