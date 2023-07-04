<template>
  <div class="strongHome">
    <StrongTest />
  </div>
</template>

<style scoped>
.strongHome {
  padding: 0 50px 50px;
  max-width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 490px) {
  .strongHome {
    padding: 0 7px 50px;
  }
}
</style>

<script>
import StrongTest from '@/components/StrongTest.vue';

export default {
  name: 'TestPage',
  components: {
    StrongTest
  }
}
</script>
