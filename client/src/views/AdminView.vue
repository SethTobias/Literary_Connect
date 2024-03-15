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
          <td>Edit</td>
          <td @click="deleteUser">Delete</td>
          <div class="user-modal">
            <!-- To add User Modal To Edit Data Into database-->
          </div>
        </tr>
        <tr @click="addUser">
          Add New User
        </tr>
      </table>
    </div>
    <div class="follows">
      <table>
        <tr v-for="item in $store.state.follow" :key="item.id">
          <td>{{ item.follow_id }}</td>
          <td>{{ item.follower_id }}</td>
          <td>{{ item.following_id }}</td>
          <td @click="unfollow">Delete</td>
          <div class="follow-modal">
            <!-- To add User Modal To Edit Data Into database-->
          </div>
        </tr>
        <tr @click="follow">
          Add New Follower
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
          <td>Edit</td>
          <td @click="deletePost">Delete</td>
          <div class="post-modal">
            <!-- To add Post Modal To Edit Data Into database-->
          </div>
        </tr>
        <tr @click="addPost">
          Add New Post
        </tr>
      </table>
    </div>
    <div class="post_likes">
      <table>
        <tr v-for="item in $store.state.like" :key="item.id">
          <td>{{ item.like_id }}</td>
          <td>{{ item.post_id }}</td>
          <td>{{ item.user_id }}</td>
          <td>Edit</td>
          <td @click="deleteLike">Delete</td>
          <div class="like-modal">
            <!-- To add Like Modal To Edit Data Into database-->
          </div>
        </tr>
        <tr @click="addLike">
          Add New Like
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
          <td>Edit</td>
          <td @click="deleteComment">Delete</td>
          <div class="comment-modal">
            <!-- To add Comment Modal To Edit Data Into database-->
          </div>
        </tr>
        <tr @click="addComment">
          Add New Comment
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
  methods: {
    addUser() {
      this.$store.dispatch("addUser", this.$data);
    },
    addPost() {
      this.$store.dispatch("addPost", this.$data);
    },
    addComment() {
      this.$store.dispatch("addComment", this.$data);
    },
    addLike() {
      this.$store.dispatch("addLike", this.$data);
    },
    follow() {
      this.$store.dispatch("follow", this.$data);
    },

    updateUser(user_id) {
      let alteredUser = {
        user_id: user_id,
        firstName: this.prodName,
        lastName: this.quantity,
        username: this.username,
        email: this.email,
        password: this.password,
        pp_url: this.pp_url,
      };
    },
    updatePost(post_id) {
      let alteredPost = {
        post_id: post_id,
        user_id: user_id,
        post_url: this.post_url,
        caption: this.caption,
      };
      this.$store.dispatch("updatePost", alteredPost);
      window.location.reload();
    },
    updateComment(comment_id) {
      let alteredComment = {
        comment_id: comment_id,
    comment_text: this.comment_text,
    post_id: post_id,
    user_id: user_id,
      };
      this.$store.dispatch("updateComment", alteredComment);
      window.location.reload();
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.data);
    },
    unfollow() {
      this.$store.dispatch("unfollow", this.data);
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.data);
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.data);
    },
    deleteLike() {
      this.$store.dispatch("deleteLike", this.data);
    },
  },
  },
  mounted() {
    this.getUsers;
    this.getFollows;
    this.getPost;
    this.getLike;
    this.getComment;
  },
  }
</script>
<style scoped></style>
