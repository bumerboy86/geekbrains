<template>
  <div class="chose">
    <h2>Выберите тест</h2>
    <p>Обновлено 29 июня 2023 г. Добавлен интерактивный поиск вопросов, темы тестирования открываются по клику</p>
    <p>JavaScript: легкий-35, средний-39, сложный-67 вопрос/ответов</p>
    <div class="box">
      <a class="javascriptLink" href="/geekbrains/javascript-light" >
        <img src="../assets/book-bookmark.svg" alt="LightTest" class="item-image"/>
        <p class="text">Начальный</p>
        <p class="text">JS</p>
      </a>
      <a href="/geekbrains/javascript-middle" class="javascriptLink">
        <img src="../assets/book-bookmark.svg" alt="MiddleTest" class="item-image"/>
        <p class="text">Средний</p>
        <p class="text">JS</p>
      </a>
      <a href="/geekbrains/javascript-strong" class="javascriptLink">
        <img src="../assets/book-bookmark.svg" alt="StrongTest" class="item-image"/>
        <p class="text">Сложный</p>
        <p class="text">JS</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestsChose'
}
</script>

<style scoped>
.box {
  display: flex;
  gap: 20px;
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

.box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

</style>
