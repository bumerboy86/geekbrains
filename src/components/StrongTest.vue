<template>
  <div class="wrappedBox">
    <p>Обновлено 16 июня 2023 год</p>
    <p>Сложный уровень</p>
    <ul class="themeBox" @click="toggleList">Темы тестирования
      <li v-if="showList">Особенности работы с числами</li>
      <li v-if="showList">Особенности работы со строками</li>
      <li v-if="showList">Введение в объекты</li>
      <li v-if="showList">Работа с массивами</li>
      <li v-if="showList">Дата и время</li>
      <li v-if="showList">Области видимости и замыкания</li>
      <li v-if="showList">Объекты (методы контекст преобразование)</li>
      <li v-if="showList">Использование settimeout и setinterval</li>
      <li v-if="showList">Работа с dom</li>
      <li v-if="showList">Работа с событиями</li>
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
  name: 'StrongTest',
  components: {KeywordSearchInput, Table, TestItem},
  data() {
    return {
      sortedTests: [],
      showList: false
    }
  },
  computed: {
    ...mapGetters([
        'STRONG_JS'
    ]),
    filteredTests() {
      if(this.sortedTests.length) {
        return this.sortedTests
      } else {
        return this.STRONG_JS
      }
    }
  },
  methods: {
      ...mapActions([
          'GET_STRONG_JS_TEST_FROM_API'
      ]),
    sortByKeyword(data) {
      const testsArray = [...this.STRONG_JS];
      const lowercaseData = data.toLowerCase();
      this.sortedTests = testsArray.filter(item => item.question.toLowerCase().includes(lowercaseData));
    },
    toggleList() {
        this.showList = !this.showList;
    }
  },
  mounted() {
    this.GET_STRONG_JS_TEST_FROM_API();
  }

}
</script>

<style scoped>
.themeBox {
  background: #50C0FF;
  color: #ffffff;
  text-align: start;
  padding: 20px 29px;
  cursor: pointer;
}
.wrappedBox {
  background: #EAF2F5;
  border-radius: 10px;
  padding-top: 20px;
}
</style>
