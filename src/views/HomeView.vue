<template>
  <div class="home">
    <TestsChose />
  </div>
</template>

<style scoped>
.home {
  padding: 0 50px 50px;
  max-width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 490px) {
  .home {
    padding: 0 7px 50px;
  }
}
</style>

<script>

import TestsChose from '@/components/TestsChose.vue';

export default {
  name: 'HomeView',
  components: {
    TestsChose
  }
}
</script>
