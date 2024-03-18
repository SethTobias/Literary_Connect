<template>
  <div id="signup">
<Sign v-if="notSign"/>
      <div class="signup-form">
        <div class="signup-img">
          <h1>Unlock A World Of Literary Connections.</h1>
        </div>
        <div class="signup-input">
          <div class="signup-logo">
            <img src="https://i.ibb.co/HChwBLC/Logo.png" alt="Site Logo">
            <h1>Literary Connect</h1>
          </div>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import Sign from "../components/SignUp.vue"; 
export default {
  components: {
    Sign,
  },
  props: {
    notSign: {
      type: Boolean,
      default: false,
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
    height: 800px;
    width: 800px;
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
  }

  .signup-img {
    grid-area: img;
    /*  */
    background-image: url('https://i.ibb.co/F6zPWj8/BG-5.jpg');
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius:25px 0 0 25px;

    /*  */
    text-align: center;
  }

  .signup-input {
    grid-area: input;
    border-radius:0 25px  25px  0;
    background-color: var(--accent);
  }
  .signup-input img{
    width: 200px;
    margin: 0 auto;
    /* grid-area: input;
    border-radius:25px 0 0 25px;
    background-color: var(--accent); */
  }
  .signup-logo{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /*  */
    text-align: center;
  }
  .signup-input form{
    display: flex;
    flex-direction: column;
  }
</style>
