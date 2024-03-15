<template>
  <div class="admin">
    <div class="users">
      <table>
        <tr v-for="item in $store.state.user" :key="item.id">
          <td>{{ item.user_id }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.pp_url }}</td>
          <td>{{ item.userType }}</td>
          <td>{{ item.userStatus }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
      </table>
    </div>
    <div class="follows">
      <table>
        <tr v-for="item in $store.state.follow" :key="item.id">
          <td>{{ item.follow_id }}</td>
          <td>{{ item.follower_id }}</td>
          <td>{{ item.following_id }}</td>
        </tr>
      </table>
    </div>
    <div class="posts">
      <table>
        <tr v-for="item in $store.state.post" :key="item.id">
          <td>{{ item.post_id }}</td>
          <td>{{ item.post_url }}</td>
          <td>{{ item.caption }}</td>
          <td>{{ item.user_id }}</td>
        </tr>
      </table>
    </div>
    <div class="post_likes">
      <table>
        <tr v-for="item in $store.state.like" :key="item.id">
          <td>{{ item.like_id }}</td>
          <td>{{ item.post_id }}</td>
          <td>{{ item.user_id }}</td>
        </tr>
      </table>
    </div>
    <div class="comments">
      <table>
        <tr v-for="item in $store.state.comment" :key="item.id">
          <td>{{ item.comment_id }}</td>
          <td>{{ item.comment_text }}</td>
          <td>{{ item.post_id }}</td>
          <td>{{ item.user_id }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
    getFollows() {
      this.$store.dispatch("getFollows");
    },
    getPost() {
      this.$store.dispatch("getPost");
    },
    getLike() {
      this.$store.dispatch("getLike");
    },
    getComment() {
      this.$store.dispatch("getComment");
    },
  },
  mounted() {
    this.getUsers;
    this.getFollows;
    this.getPost;
    this.getLike;
    this.getComment;
  },
};
</script>
<style scoped></style>
