<script>
export default {
  name: "KeywordSearch",
  props: {
    placeholderText: {
      type: String,
      default: 'Поиск по ключевому слову',
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      userInput: ''
    };
  },
  mounted() {
    this.$emit('handleInput', this.userInput);
  },
  methods: {
    handleInput(event) {
      this.$emit('handleInput', this.userInput);
    },
  },
}
</script>

<template>
  <input class="inputKeyword" v-model="userInput" @input="handleInput" :placeholder="placeholderText">
</template>

<style scoped>
  .inputKeyword {
    width: 80%;
    border: none;
    outline: 0;
    offset: 0;
    color: #2c3e50;
    font-size: 18px;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px 15px;
  }
</style>