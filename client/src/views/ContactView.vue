<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us if you have any questions or feedback!</p>
    <div class="contact-form">
      <form action="https://formspree.io/f/mleqwzvw" method="POST">
        <input type="text" v-model="name" placeholder="Your Name" class="input-field" />
        <input type="email" v-model="email" placeholder="Your Email" class="input-field" />
        <textarea v-model="message" placeholder="Your Message" class="input-field textarea"></textarea>
        <button @click="submitForm" class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted!");
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
:root {
  /*  */
  --txt: hsl(180, 44%, 7%);
  --bg: hsl(180, 40%, 98%);
  --primary: hsl(180, 66%, 53%);
  --secondary: hsl(223, 65%, 71%);
  --accent: hsl(242, 93%, 62%);
  /*  */
  --typography: "Eagle Lake", serif;
  --fs-30: 3rem;
  --fs-25: 2.5rem;
  --fs-20: 2rem;
  --fs-15: 1.5rem;
  --fs-10: 1rem;
}
.contact-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.contact-page h1 {
  margin-bottom: 20px;
}

.contact-form {
  margin-top: 20px;
}

.input-field {
  display: block;
  width: calc(100% - 16px);
  margin: 0 auto 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.textarea {
  height: 150px;
}

.submit-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--primary);
  color: var(--txt);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: var(--accent);
  color: var(--bg);
}
</style>
