<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<template>
  <header>
    <router-link to="/">
      <img class="logo" src="../assets/gb-logo.png" alt="logo" />
    </router-link>
    <nav>
      <transition mode="out-in" name="burger__menu">
        <button @click="toggleMenu" class="main__menu_box_burger">&#9776;</button>
      </transition>
      <div class="main__menu_backdrop" v-if="isMenuOpen" @click="toggleMenu"/>
      <transition mode="out-in" name="burger__menu_links" >
        <menu class="main__menu_box_nav" v-if="isMenuOpen">
          <router-link to="/" @click="toggleMenu" class="main__menu_box_link">Главная</router-link>
          <router-link to="/tests" @click="toggleMenu" class="main__menu_box_link" >К тестам</router-link>
          <router-link to="/about" @click="toggleMenu" class="main__menu_box_link">О нас</router-link>
        </menu>
      </transition>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}
nav {
  display: flex;
  position: relative;
  background: #ffffff;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #22253B;
}

.main__menu_box {
  position: relative;
}

.main__menu_box_burger {
  display: block;
  position: absolute;
  color: #F15525;
  border: none;
  background: inherit;
  font-size: 26px;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
  right: 4px;
  top: -18px;
  z-index: 5;
}

.main__menu_box_nav {
  position: absolute;
  display: flex;
  gap: 20px;
  flex-direction: column;
  min-width: 150px;
  min-height: 89px;
  padding: 20px 0;
  right: 4px;
  top: 14px;
  border-radius: 10px 0 10px;
  margin: 0;
  background: #ffffff;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  z-index: 6;
}

.main__menu_box_link {
  color: #2c3e50;
}

.logo {
  width: 140px;
}

.main__menu_backdrop {
  position: fixed;
  background: #2c3e50;
  opacity: 0.7;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}
</style>