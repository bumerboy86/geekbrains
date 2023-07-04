<template>
  <div class="wrappedBox">
    <p>Обновлено 23 июня 2023 год</p>
    <p>Средний уровень</p>
    <ul class="themeBox" @click="toggleList">Темы тестирования
      <li v-if="showList">Тестирование</li>
      <li v-if="showList">Регулярные выражения</li>
      <li v-if="showList">Синтаксис javascript</li>
      <li v-if="showList">Асинхронные запросы</li>
      <li v-if="showList">Работа с dom</li>
      <li v-if="showList">Объекты в javascript</li>
      <li v-if="showList">Работа с массивами</li>
      <li v-if="showList">Ооп в javascript</li>
      <li v-if="showList">Общее</li>
    </ul>
    <KeywordSearchInput @handleInput="sortByKeyword"/>
    <Table>
      <template v-slot:default>
          <test-item
              v-for="(test, index) in filteredTests"
              :key="test.id"
              :test_data="test"
              :index_data="index + 1"
          />
      </template>
    </Table>
  </div>
</template>

<script>
import TestItem from "@/components/TestItem.vue";
import {mapActions, mapGetters} from "vuex";
import Table from "@/components/Table.vue";
import KeywordSearchInput from "@/components/KeywordSearchInput.vue";

export default {
  name: 'MiddleTest',
  components: {Table, TestItem, KeywordSearchInput},
  data() {
    return {
      sortedTests: [],
      showList: false
    }
  },
  computed: {
    ...mapGetters([
        'MIDDLE_JS'
    ]),
    filteredTests() {
      if(this.sortedTests.length) {
        return this.sortedTests
      } else {
        return this.MIDDLE_JS
      }
    }
  },
  methods: {
    ...mapActions([
        'GET_MIDDLE_JS_TEST_FROM_API'
    ]),
    sortByKeyword(data) {
      const testsArray = [...this.MIDDLE_JS];
      const lowercaseData = data.toLowerCase();
      this.sortedTests = testsArray.filter(item => item.question.toLowerCase().includes(lowercaseData));
    },
    toggleList() {
      this.showList = !this.showList;
    }
  },

  mounted() {
    this.GET_MIDDLE_JS_TEST_FROM_API();
  }
}
</script>

<style scoped>
.themeBox {
  background: #2c3e50;
  color: #ffffff;
  text-align: start;
  padding: 20px 29px;
  cursor: pointer;
}
.wrappedBox {
  background: #42b983;
  border-radius: 10px;
  padding-top: 20px;
}
</style>
