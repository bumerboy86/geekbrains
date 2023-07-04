<script >
import LightTest from '../components/LightTest.vue'


export default {
  name: 'TestPageLight',
  components: {
    LightTest
  }
}
</script>

<template>
  <div class="light">
    <light-test />
  </div>
</template>

<style scoped>
.light {
  padding: 0 50px 50px;
  max-width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 490px) {
  .light {
    padding: 0 7px 50px;
  }
}
</style>