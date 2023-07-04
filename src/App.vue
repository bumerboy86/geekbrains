<template>
  <main>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <footer>&copy; 2023 Website. All rights reserved.</footer>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a {
  color: #42b983;
}

main {
  position: relative;
  min-height: 100vh;
}

footer {
  position: absolute;
  background: #42b983;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 0;
}
</style>
