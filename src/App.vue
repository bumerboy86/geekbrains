<template>
  <main id="main" >
    <nav>
      <router-link to="/">
        <img class="logo" src="./assets/gb-logo.png" alt="logo" />
      </router-link>
      <router-link to="/">Главная</router-link>
      <router-link to="/about" >О нас</router-link>
    </nav>
    <router-view/>
    <footer>&copy; 2023 Все права защищены.</footer>
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
  border: 1px solid #2c3e50;
  padding: 50px 0;
}
nav {
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #22253B;
}

.logo {
  width: 140px;
}

main {
  position: relative;
  min-height: 100vh;
}

footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 0;
  color: #8E8E8E;
}
</style>
<script setup>
</script>