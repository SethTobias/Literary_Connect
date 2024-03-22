<template>
  <div class="about">
    <Sign v-if="notSign" />
    <h1>Get To Know Us More!</h1>
    <div class="about-container">
      <div class="about-us">
        <h2>About Us</h2>
        <p>Welcome to <span>Literary Connect</span>, a vibrant online community designed exclusively for avid readers like you. At <span>Literary Connect</span>, we believe in the power of literature to inspire, connect, and transform lives. Whether you're a passionate bibliophile, a casual reader looking for recommendations, or an aspiring writer seeking feedback, our platform offers a welcoming space to explore, engage, and share your love for books.</p>
      </div>
      <div class="mission">
        <h2>Our Mission</h2>
        <p>At <span>Literary Connect</span>, our mission is simple: to foster a thriving community of readers from all walks of life. We aim to create an inclusive environment where book lovers can come together to discover new titles, engage in meaningful discussions, and connect with like-minded individuals who share their passion for reading. Through our platform, we strive to promote literacy, spark curiosity, and celebrate the diverse voices and stories that enrich our world.</p>
      </div>
      <div class="inclusion">
        <h2>Our Commitment to Diversity and Inclusion</h2>
        <p>At <span>Literary Connect</span>, we celebrate the richness of diverse perspectives, experiences, and voices within our community. We are committed to creating a safe and inclusive space where everyone feels valued, respected, and empowered to share their unique stories and perspectives. We actively promote diversity in literature and strive to amplify marginalized voices that have historically been underrepresented in the literary world.</p>
      </div>
      <div class="involve">
        <h2>Get Involved</h2>
        <p>Ready to embark on your literary journey with <span>Literary Connect</span>? Join our growing community of readers today and start discovering, connecting, and sharing your love for books like never before. Whether you're a seasoned bookworm or just starting your reading adventure, there's a place for you here at <span>Literary Connect</span>.</p>
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
      default: true,
    },
  },
  computed: {
    getPosts() {
      this.$store.dispatch("getPosts");
    },
  },
  mounted() {
    this.getPosts;
  },
};
</script>


<style scoped>
.about {
  padding: 20px;
}

h1 {
  font-size: var(--fs-30);
  color: var(--txt);
}

h2 {
  font-size: var(--fs-25);
  color: var(--primary);
}

span {
  color: var(--secondary);
}

span {
   background-image: linear-gradient(to right, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

p {
  font-size: var(--fs-15);
  color: var(--txt);
}

</style>
