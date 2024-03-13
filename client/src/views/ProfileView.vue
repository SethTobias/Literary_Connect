<template>
<!-- v-if="item in $store.state.user" -->
  <div id="profile">
  <Sign v-if="notSign"/>
    <div class="profile-dash">
      <div class="profile-pp"></div>
      <div class="profile-info">
        <div>
          <p></p>
          <p>Edit Profile</p>
        </div>
        <div class="profile-data">
          <p>n posts</p>
          <p>n bookmarks</p>
          <p>n bookmarked</p>
        </div>
        <div class="profile-bio">
          <p>Biography</p>
        </div>
      </div>
    </div>
    <div>WorkInProgress</div>
    <div class="profile-overview">
      <div class="overview-dash">
        <div>Your Posts</div>
        <div>Shelved</div>
        <div>Marks</div>
      </div>
      <div class="overview-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
      computed: {
    getUsers() {
      this.$store.dispatch("getUsers");
    },
    getUser() {
      this.$store.dispatch("getUser");
    },
    getReview() {
      this.$store.dispatch("getReview");
    },
    getReported() {
      this.$store.dispatch("getReported");
    },
    getFollows() {
      this.$store.dispatch("getFollows");
    },
    getFollowing() {
      this.$store.dispatch("getFollowing");
    },
    getFollower() {
      this.$store.dispatch("getFollower");
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
    this.getUser; // *
    this.getReview;
    this.getReported;
    this.getFollows; 
    this.getFollowing; // *
    this.getFollower; // *
    this.getPost; // *
    this.getLike;
    this.getComment;
  }
}
</script>
