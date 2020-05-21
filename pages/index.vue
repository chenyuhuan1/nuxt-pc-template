<template>
  <div class="container">
    <el-button type="" @click="add">test{{counter}}</el-button>
    <div>
      <logo />
      <h1 class="title">
        pc-nuxt
      </h1>
      <h2 class="subtitle">
        My fantabulous Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <el-tag type="success">标签二</el-tag>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { getQueryInfoDetail } from "@/assets/api/service.js";
export default {
  components: {
    Logo
  },
  data() {
    return {
      test: '',
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    } 
  },
  beforeMount() {
    getQueryInfoDetail(1, 10).then(res => {
      console.log(res);
    });
  },
  methods: {
    add() { 
      this.$store.commit('increment');
    }
  },
  
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
