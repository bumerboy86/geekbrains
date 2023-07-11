<template>
  <main id="main" >
    <Header />
    <router-view/>
    <Footer />
  </main>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 0 50px;
  position: relative;
  min-height: 90vh;
}
</style>
<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {Footer, Header}
})
</script>