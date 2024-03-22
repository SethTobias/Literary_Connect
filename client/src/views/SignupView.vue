<template>
  <div id="signup">
    <Sign v-if="notSign" />
    <div class="signup-form">
      <div class="signup-img">
        <h1>Unlock A World Of Literary Connections.</h1>
      </div>
      <div class="signup-input">
        <div class="signup-logo">
          <img src="https://i.ibb.co/HChwBLC/Logo.png" alt="Site Logo" />
          <h1>Literary Connect</h1>
        </div>
        <form @submit.prevent="register">
          <div
            style="
              display: flex;
              flex-direction: column;
              place-content: center space-evenly;
              width: 250px;
              height: 350px;
              margin: 0 auto;
            "
          >
            <input type="text" v-model="firstName" placeholder="First Name" />
            <input type="text" v-model="lastName" placeholder="Last Name" />
            <input type="text" v-model="username" placeholder="Username" />
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from "../components/SignUp.vue";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
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
    async register() {
      try {
        await this.$store.dispatch('registerUser', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Error registering user:', error);
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
}

#signup {
  /*  */
  height: 700px;
  width: 700px;
  /*  */
  margin: auto;
  /*  */
  border-radius: 25px;
}

.signup-form {
  /*  */
  display: grid;
  grid-template-areas: "img input";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  height: 650px;
  width: 700px;
  margin: auto;
}

.signup-img {
  grid-area: img;
  /*  */
  background-image: url("https://i.ibb.co/F6zPWj8/BG-5.jpg");
  border-radius: 25px 0 0 25px;
  /*  */
  text-align: center;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-img h1 {
  background-image: linear-gradient(to right, var(--bg), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.signup-input {
  grid-area: input;
  border-radius: 0 25px 25px 0;
  background-color: var(--accent);
}
.signup-input img {
  width: 200px;
  margin: 0 auto;
  /* grid-area: input;
    border-radius:25px 0 0 25px;
    background-color: var(--accent); */
}
.signup-logo {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /*  */
  text-align: center;
}
.signup-input form {
  display: flex;
  flex-direction: column;
}
</style>
