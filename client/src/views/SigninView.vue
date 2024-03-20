<template>
  <div id="signin">
    <Sign v-if="notSign" />
    <h1 style="font-size: var(--fs-30)">Literary Connect</h1>
    <div style="display: flex; place-content: center">
      <img
        src="https://i.ibb.co/HChwBLC/Logo.png"
        alt="site Logo"
        style="scale: 0.8; margin: -40px 0 -20px 0; padding: 0"
      />
      <div class="signin-input">
        <form class="signin-input">
          <input type="text" v-model="username" placeholder="Username" />
          <input type="text" v-model="password" placeholder="Password" />
          <button type="submit" @click.prevent="loginUser">Sign In:</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>

    <div class="signin-form">
      <div class="signin-txt">
        <p
          style="
            margin: auto;
            font-size: var(--fs-15);
            background-color: var(--secondary);
            width: 900px;
            border-radius: 25px;
            box-shadow: var(--accent) 10px 10px 5px;
            margin-bottom: 25px;
          "
        >
          Join our vibrant community of readers and writers. Sign in to unlock
          exclusive content, connect with fellow book lovers, and dive into
          captivating discussions. Your next literary adventure awaits!
        </p>
      </div>

      <router-link to="/signup" class="signin-up"
        >No account? Consider signing up!</router-link
      >
    </div>
  </div>
</template>

<script>
import Sign from "../components/SignUp.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  components: {
    Sign,
  },
  props: {
    notSign: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["login"]),
    async loginUser() {
      const { username, password } = this;

      const { success, error } = await this.login({ username, password });
      if (!success) {
        this.errorMessage = error;
      } else {
        console.log("Success");
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
:root {
  --txt: hsl(180, 44%, 93%);
  --bg: hsl(180, 40%, 2%);
  --primary: hsl(180, 66%, 47%);
  --secondary: hsl(223, 65%, 29%);
  --accent: hsl(242, 93%, 38%);

  --fs-30: 3rem;
  --fs-25: 2.5rem;
  --fs-20: 2rem;
  --fs-15: 1.5rem;
  --fs-10: 1rem;
}

* {
  color: var(--txt);
}

#signin {
  /*  */
  height: 700px;
  width: 500px;
  /*  */
  margin: auto;
  border-radius: 25px;
  /*  */
  background-image: url("https://i.ibb.co/Bzh0B30/BG-1.jpg");
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /*  */
  text-align: center;
}

#signin :is(h1, img) {
  justify-self: start;
}
#signin h1 {
  font-size: 3rem;
}
#signin img {
  /*  */
  height: auto;
  width: 200px;
  /*  */
  margin: 0 auto;
}
.signin-txt,
.signin-up {
  font-size: 2rem;
}

.signin-up {
  justify-self: end;
}

:is(.sigin-form),
:is(.signin-input) {
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}

.signin-input input {
  /*  */
  width: 250px;
  /*  */
  margin: 5px auto;
}
</style>
