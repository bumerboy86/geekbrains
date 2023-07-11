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
        <button @click="toggleMenu" class="main__menu_box_burger" v-if="!isMenuOpen">&#9776;</button>
      </transition>
      <transition name="expand" >
        <div class="main__menu_box_nav" :class="{ 'menu-open': isMenuOpen }" v-if="isMenuOpen">
          <button @click="toggleMenu" class="main__menu_exit" v-if="isMenuOpen">x</button>
          <router-link to="/" @click="toggleMenu" class="main__menu_box_link">Главная</router-link>
          <router-link to="/tests" @click="toggleMenu" class="main__menu_box_link" >К тестам</router-link>
          <router-link to="/about" @click="toggleMenu" class="main__menu_box_link">О нас</router-link>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style>
  .expand-enter-from {
    opacity: 0;
    transform: translateX(3000px);
  }
  .expand-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .expand-enter-active {
    transition: all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .expand-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .expand-leave-to {
    opacity: 0;
    transform: translateX(3000px);
  }
  .expand-leave-active {
    transition: all 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

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
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 80px 0;
  margin: 0;
  background: #ffffff;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  z-index: 6;
  overflow: hidden;
}
.main__menu_exit {
  position: absolute;
  color: #8E8E8E;
  font-size: 30px;
  font-weight: bolder;
  top: 25px;
  right: 50px;
  border: none;
  background: inherit;
  z-index: 7;
}

.main__menu_box_link {
  color: #2c3e50;
}

.logo {
  width: 140px;
}
</style>