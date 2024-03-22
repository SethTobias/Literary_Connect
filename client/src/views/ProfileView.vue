<template>
  <div id="profile">
    <Sign v-if="notSign" />
    <div class="profile-dash">
      <form @submit.prevent="editUser">
        <div class="edit-input">
          <div class="profile-pp">
            <img
              :src="user?.pp_url || 'https://i.ibb.co/zXNbtq4/Default-user.jpg'"
              alt="Profile Picture"
              style="width: 100px; height:100px; border-radius: 100%;"
            /> 
          </div>
          <input
            type="text"
            v-model="pp_url"
            :placeholder="
              user?.pp_url || 'https://i.ibb.co/zXNbtq4/Default-user.jpg'
            "
          />
          <input
            type="text"
            v-model="firstName"
            :placeholder="user?.firstName || 'First Name'"
          />
          <input
            type="text"
            v-model="lastName"
            :placeholder="user?.lastName || 'Last Name'"
          />
          <input
            type="text"
            v-model="username"
            :placeholder="user?.username || 'Username'"
          />
          <input
            type="email"
            v-model="email"
            :placeholder="user?.email || 'Email'"
          />
          <input type="password" v-model="password" placeholder="Password" />
          <input type="submit" value="Update Profile" />
        </div>
      </form>
    </div>
    <div class="profile-overview">
      <div class="overview-dash">
        <h3>User Posts:</h3>
        <div class="post-container">
          <div v-for="item in post" :key="item.id">
            <p>
              {{ item.caption}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Sign from "../components/SignUp.vue";
export default {
  data() {
    return {
      isDropdownOpen: false,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      pp_url: "",
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
    ...mapState(["user"]),
    getPosts() {
      this.$store.dispatch("getPosts");
    },
    getPostBackground() {
      return (post) => {
        if (post && post.post_url) {
          return post.post_url;
        } else {
          return "";
        }
      };
    },
  },
  mounted() {
    console.log("Logged in user:", this.user);
    this.getPosts;
  },

  methods: {
    async editUser() {
      try {
        const editedUserData = {
          firstName: this.firstName || this.user.firstName,
          lastName: this.lastName || this.user.lastName,
          username: this.username || this.user.username,
          email: this.email || this.user.email,
          password: this.password || this.user.password,
          pp_url: this.pp_url || this.user.pp_url,
        };
        await this.$store.dispatch("editUser", {
          user_id: this.user.user_id,
          ...editedUserData,
        });
        this.$router.push("/profile");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },

    // ...mapActions(["getUserPosts"]),
  },
};
</script>
<style scoped>
.profile-dash {
  width: 500px;
  height: 400px;
  margin: auto;
}
.edit-input {
  display: flex;
  flex-direction: column;
  place-content: center space-evenly;
  height: 400px;
}
</style>
