<template>
  <div class="chose">
    <h2>Выберите тест</h2>
    <p>Обновлено 29 июня 2023 г. Добавлен интерактивный поиск вопросов, темы тестирования открываются по клику</p>
    <div class="box">
      <router-link to="/javascript-light"  class="javascriptLink">
        <img src="../assets/answer.svg" alt="lightTest" class="item-image"/>
        <p class="chose__text">Начальный</p>
        <p class="chose__text_secondary">JavaScript: легкий-35, вопрос-ответ</p>
      </router-link>

      <router-link to="/javascript-middle"  class="javascriptLink">
        <img src="../assets/answer.svg" alt="MiddleTest" class="item-image"/>
        <p class="chose__text">Средний</p>
        <p class="chose__text_secondary">JavaScript: средний-39, вопрос-ответ</p>
      </router-link>

      <router-link to="/javascript-strong"  class="javascriptLink">
        <img src="../assets/answer.svg" alt="MiddleTest" class="item-image"/>
        <p class="chose__text">Сложный</p>
        <p class="chose__text_secondary">JavaScript: сложный-67, вопрос-ответ</p>
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
  justify-content: space-between;
}

.javascriptLink {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #22253B;
  font-weight: bold;
  width: 270px;
  height: 254px;
  background: #EAF2F5;
  border-radius: 20px;
  margin:  0 auto;
  padding: 35px;
  align-items: center;
}

.item-image {
  width: 120px;
  margin-bottom: 18px;
}

.chose__text {
  margin: 0 0 5px 0;
}

.chose__text_secondary {
  font-weight: lighter;
  margin: 0
}

</style>
