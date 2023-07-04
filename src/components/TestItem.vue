<script>
export default {
  name: "TestItem",
  props: {
    test_data: {
      type: Object,
      default () {
        return {}
      }
    },
    index_data: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
}
</script>

<template>
    <tr class="test-item">
      <th>{{index_data}}</th>
      <th>{{test_data.question}}</th>
      <th>{{test_data.answer}}</th>
    </tr>
</template>

<style scoped>
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #ffffff;
  }
</style>