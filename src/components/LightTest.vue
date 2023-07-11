<template>
  <div class="wrappedBox">
    <p>Обновлено 26 июня 2023 год</p>
    <p>Начальный уровень</p>
    <ul class="themeBox" @click="toggleList">Темы тестирования
      <li v-if="showList">Особенности javascript и организация кода</li>
      <li v-if="showList">Циклы</li>
      <li v-if="showList">Условные операторы</li>
      <li v-if="showList">Функции и функциональные выражения</li>
      <li v-if="showList">Основы синтаксиса</li>
      <li v-if="showList">Строки</li>
      <li v-if="showList">Массивы</li>
      <li v-if="showList">Ооп</li>
      <li v-if="showList">Dom селекторы jquery</li>
      <li v-if="showList">Знакомство с функциональными выражениями. принципы работы функций.</li>
      <li v-if="showList">Переменные и типы данных</li>
      <li v-if="showList">Стандартные операторы</li>
      <li v-if="showList">Операторы сравнения</li>
      <li v-if="showList">Логические операторы</li>
      <li v-if="showList">Взаимодействие с пользователем</li>
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
import KeywordSearch from "@/components/KeywordSearchInput.vue";
import KeywordSearchInput from "@/components/KeywordSearchInput.vue";

export default {
  name: 'LightTest',
  components: {KeywordSearchInput, KeywordSearch, Table, TestItem},
  data() {
    return {
      sortedTests: [],
      showList: false
    }
  },
  computed: {
    ...mapGetters([
        'LIGHT_JS'
    ]),
    filteredTests() {
      if(this.sortedTests.length) {
        return this.sortedTests
      } else {
        return this.LIGHT_JS
      }
    }
  },
  methods: {
      ...mapActions([
          'GET_LIGHT_JS_TEST_FROM_API'
      ]),
    sortByKeyword(data) {
      const testsArray = [...this.LIGHT_JS];
      const lowercaseData = data.toLowerCase();
      this.sortedTests = testsArray.filter(item => item.question.toLowerCase().includes(lowercaseData));
    },
    toggleList() {
      this.showList = !this.showList;
    }
  },
  mounted() {
    this.GET_LIGHT_JS_TEST_FROM_API();
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
