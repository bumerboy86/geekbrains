<template>
  <div class="middleHome">
    <MiddleTest />
  </div>
</template>

<style scoped>
.middleHome {
  padding: 0 50px 50px;
  max-width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 490px) {
  .middleHome {
    padding: 0 7px 50px;
  }
}
</style>

<script>
import MiddleTest from '@/components/MiddleTest.vue';

export default {
  name: 'TestPageMiddle',
  components: {
    MiddleTest
  }
}
</script>
