<template>
  <div class="chose">
    <h2>Выберите тест</h2>
    <p>Обновлено 29 июня 2023 г. Добавлен интерактивный поиск вопросов, темы тестирования открываются по клику</p>
    <p>JavaScript: легкий-35, средний-39, сложный-67 вопрос/ответов</p>
    <div class="box">
      <router-link to="/javascript-light"  class="javascriptLink">
        <img src="../assets/book-bookmark.svg" alt="MiddleTest" class="item-image"/>
        <p class="text">Средний</p>
        <p class="text">JS</p>
      </router-link>

      <router-link to="/javascript-middle"  class="javascriptLink">
        <img src="../assets/book-bookmark.svg" alt="MiddleTest" class="item-image"/>
        <p class="text">Средний</p>
        <p class="text">JS</p>
      </router-link>

      <router-link to="/javascript-strong"  class="javascriptLink">
        <img src="../assets/book-bookmark.svg" alt="MiddleTest" class="item-image"/>
        <p class="text">Сложный</p>
        <p class="text">JS</p>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TestsChose'
}
</script>

<style scoped>
.chose {
  display: flex;
  flex-direction: column;
}
.box {
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
}

.javascriptLink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

.item-image {
  width: 120px;
}

.text {
  margin: 0 0 5px 0;
}

</style>
