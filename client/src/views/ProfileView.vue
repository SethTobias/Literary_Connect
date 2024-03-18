<template>
  <div id="profile">
    <Sign v-if="notSign" />
    <div class="profile-dash">
      <div class="profile-pp"></div>
      <div class="profile-info">
        <div class="profile-data">
          <p>
            <!-- {{ $store.state.userPost }} -->
          </p>
          <p>
            <!-- {{ $store.state.userFollowers }} -->
          </p>
          <p>
            <!-- {{ $store.state.userFollowers }} -->
          </p>
        </div>
        <div class="dropdown">
          <i class="fa-solid fa-gears" @click="toggleDropdown"></i>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }">
            <div class="dropdown-item" @click="openEditUser()">Edit User</div>
            <div class="editModal" :style="openEditUser">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="button" value="Submit" />
            </div>
            <div @click="deleteUser">Delete</div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-overview">
      <div class="overview-dash">
        <h3>User Post</h3>
        <div
          class="post-container"
          v-for="item in $store.state.userPost"
          :key="item.id"
        >
          <router-link
            :to="{ name: 'Single', params: { post_id: item.post_id } }"
          >
            <img :src="item.post_url" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sign from "../components/SignUp.vue";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
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
    // getUser() {
    //   this.$store.dispatch("getUser");
    // },
    // getFollowing() {
    //   this.$store.dispatch("getFollowing");
    // },
    // getFollower() {
    //   this.$store.dispatch("getFollower");
    // },
    // getUsers() {
    //   this.$store.dispatch("getUsers");
    // },
    // getFollows() {
    //   this.$store.dispatch("getFollows");
    // },
    // },
    // getPost() {
    //   this.$store.dispatch("getPost");
    // },
    // getLike() {
    //   this.$store.dispatch("getLike");
    // },
    // getComment() {
    //   this.$store.dispatch("getComment");
    // },
  },
  mounted() {
    // this.getUser();
    // this.getFollowing();
    // this.getFollower();
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openEditUser() {
      this.isModalOpen = false;
    },
  },
};
</script>
<style scoped></style>
