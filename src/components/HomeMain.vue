<script setup>

</script>

<template>
  <div class="home__info">
    <div class="home__info_box">
      <p class="home__title">
        Сайт  <span class="home__span">{</span> Тестирования <span class="home__span">}</span> для тех, кому нужны реальные навыки
      </p>
      <p class="home__text">Пройдите изучение тестов, чтобы получить реальный сертификат</p>
      <router-link class="home__link" to="/tests">Просмотреть тесты</router-link>
    </div>
    <div class="home__image_box">
      <img class="home__cpu_image" src="../assets/LayerCPU.svg" alt="cpu_logo"/>
    </div>
  </div>
</template>

<style>
.home__title {
  font-size: 36px;
}

.home__info {
  display: flex;
  background: rgb(255,255,255);
  background: linear-gradient(90deg,
    rgba(255,255,255,1) 0%,
    rgb(236, 242, 235) 100%,
    rgb(234, 242, 245) 100%
  );
  padding: 30px 0;
}

.home__text {
  font-size: 26px;
}

.home__info_box {
  flex-basis: 50%;
}

.home__image_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
}

.home__link {
  background: #F15525;
  color: #ffffff;
  padding: 10px 25px;
  border-radius:  10px;
}

.home__cpu_image {
  width: 80%;
}

.home__span {
  font-weight: bold;
  color: #F15525;
  font-size: 32px;
}

@media screen and (max-width: 778px) {
  .home__info {
    display: flex;
    flex-direction: column;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgb(234, 242, 245) 100%);
  }
  .home__info_box {
    padding: 50px 15px;
  }
  .home__cpu_image {
    width: 55%;
  }
}

@media screen and (max-width: 435px) {
  .home__title {
    font-size: 26px;
  }
  .home__span {
    font-size: 26px;
  }
  .home__text {
    font-size: 22px;
  }
}
</style>