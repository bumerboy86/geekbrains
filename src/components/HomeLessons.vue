<script setup>
</script>

<template>
    <p class="home__lessons_title">Какие приемущества вы получите:</p>
    <div class="home__lessons_box">
      <div class="home__lessons_image_box">
        <img class="home__lessons_image" src="../assets/layerGroup.svg" alt="cpu_logo"/>
      </div>
      <div class="home__lessons_links_box">
        <div class="home__lessons_links">
          <p class="home__lessons_text_color">Повышение знаний</p>
          <p class="home__lessons_text_color">Понимание</p>
          <p class="home__lessons_text_color">Самооценка</p>
          <p class="home__lessons_text_color">Подготовка к тестам</p>
          <p class="home__lessons_text_color">Улучшение навыков</p>
          <p class="home__lessons_text_color">Усвоение</p>
          <p class="home__lessons_text_color">Отслеживание прогресса</p>
        </div>
        <p class="home__lessons_text">Это необходимый минимум для современного разработчика</p>
      </div>
    </div>
</template>

<style>
.home__lessons_title {
  font-size: 36px;
}

.home__lessons_text {
  font-size: 26px;
}

.home__lessons_box {
  display: flex;
  background: #EAF2F5;
  width: 100%;
  min-height: 200px;
  padding: 40px 0;
}

.home__lessons_links_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
}

.home__lessons_image_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
}

.home__lessons_image {
  width: 80%;
}

.home__lessons_text_color {
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 44px;
  background: #5096FF;
  font-size: 20px;
  margin: 0;
}

.home__lessons_text_color:nth-child(2) {
  background: #FFB359;
}

.home__lessons_text_color:nth-child(3) {
  background: #FF6F50;
}

.home__lessons_text_color:nth-child(4) {
  background: #4BD071;
}

.home__lessons_text_color:nth-child(5) {
  background: #50C0FF;
}

.home__lessons_text_color:nth-child(6) {
  background: #4B77B9;
}

.home__lessons_text_color:last-child {
  background: #AF93FF;
}

.home__lessons_links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 850px) {
  .home__lessons_text_color {
    font-size: 16px;
    padding: 11px 20px;
  }
}
@media screen and (max-width: 778px) {
  .home__lessons_box {
    flex-direction: column-reverse;
  }
  .home__lessons_image {
    width: 55%;
  }
  .home__lessons_links {
    padding: 0 16px;
  }
}

@media screen and (max-width: 435px) {
  .home__lessons_title {
    font-size: 24px;
  }
  .home__lessons_text {
    font-size: 22px;
  }
}
</style>