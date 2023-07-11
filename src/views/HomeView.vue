<template>
  <div class="home">
    <HomeMain />
    <HomeLessons />
  </div>
</template>

<style scoped>
.home {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>

<script>

import TestsChose from '@/components/TestsChose.vue';
import HomeMain from "@/components/HomeMain.vue";
import HomeLessons from "@/components/HomeLessons.vue";

export default {
  name: 'HomeView',
  components: {
    HomeLessons,
    HomeMain,
    TestsChose
  }
}
</script>
