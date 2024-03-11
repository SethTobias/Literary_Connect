<template>
    <div id="signin">
      <h1>Literary Connect</h1>
      <img src="https://i.ibb.co/HChwBLC/Logo.png" alt="site Logo" />
      <form class="signin-form">
        <div class="signin-txt">
          <p>Some Text</p>
        </div>
        <div class="signin-input">
          <input type="text" />
          <input type="text" />
          <input type="submit" />
        </div>
        <div class="signin-up">No account? Consider signing up!</div>
      </form>
    </div>
</template>

<script></script>

<style scoped>
:root {
  --txt: hsl(180, 44%, 93%);
  --bg: hsl(180, 40%, 2%);
  --primary: hsl(180, 66%, 47%);
  --secondary: hsl(223, 65%, 29%);
  --accent: hsl(242, 93%, 38%);
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
