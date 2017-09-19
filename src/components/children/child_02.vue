<template>
  <div class="sub-contatiner2">
    <h2>兄弟组件_02</h2>
    <div>兄弟组件_01传递过来的数据</div>
    <div class="attention">积分: {{score}}</div>
    <div class="attention">价格: {{price}}</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'child_02',
    computed: mapGetters(['score', 'price'])
  }
</script>
