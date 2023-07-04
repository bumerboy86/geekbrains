<template>
  <div class="about">
    <p class="aboutTitle">Добро пожаловать на страницу "О нас"!</p>
    <p class="aboutText">Мы рады приветствовать вас на портале GeekBrains! Мы предлагаем уникальную возможность подготовиться к сдаче тестов по JavaScript на трех уровнях сложности: легкие, средние и тяжелые.</p>
    <p class="aboutText">Cайт был успешно разработан с использованием Vue3, Vuex и TypeScript, а затем опубликован на GitHub Pages. Vue 3 - это последняя версия популярного фреймворка Vue.js, который предоставляет эффективные инструменты для создания современных и отзывчивых пользовательских интерфейсов.</p>
    <p class="aboutText">С уважением, разработчик</p>
    <a
        class="aboutLink"
        href="https://github.com/bumerboy86"
        target="_blank"
    >&laquo; Посетить страничку GitHub &raquo;
    </a>
    <div class="aboutIconsBox">
      <img class="aboutIcons" src="../assets/vuex.png" alt="vuex-ico"/>
      <img class="aboutIcons" src="../assets/Git_icon.svg" alt="github-ico"/>
      <img class="aboutIcons" src="../assets/typescript.svg" alt="typeScript-ico"/>
      <img class="aboutIcons" src="../assets/logo.png" alt="vite-ico"/>
    </div>
  </div>
</template>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 30px 50px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .aboutTitle {
    font-weight: 600;
    font-size: 20px;
  }
  .aboutText {
    text-align: initial;
  }
  .aboutIcons {
    width: 70px;
  }
  .aboutIconsBox {
    width: 100%;
    display: flex;
    padding-top: 20px;
    justify-content: space-around;
  }

  .aboutLink {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 450px) {
    .aboutIcons {
      width: 45px;
    }
  }
</style>
<script setup>
</script>