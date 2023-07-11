<script>
export default {
  name: 'Table',
}
</script>
<template>
  <div class="table-box">
    <table>
      <tr>
        <th>N</th>
        <th>Вопрос</th>
        <th>Ответ</th>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>

<style scoped>
  .table-box {
    display: flex;
    box-sizing: border-box;
    overflow: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #FFB359;
    text-align: center;
  }
</style>