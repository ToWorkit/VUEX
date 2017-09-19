<template>
  <div class="sub-contatiner2">
    <h2>兄弟组件_02</h2>
    <div>兄弟组件_01传递过来的数据</div>
    <div class="attention">积分: {{score}}</div>
    <div class="attention">价格: {{price}}</div>
    <div>
      <h2>独立区域(积分作为参数使用，不改变原来的积分数据)</h2>
      <p>对积分做处理并显示且不影响原来的积分数据</p>
      <h3>{{alone}}</h3>
      <button @click='$store.dispatch("operateScore", score)'>显示处理后的积分</button>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'child_02',
    methods: mapActions(['operateScore']),
    computed: mapGetters(['score', 'price', 'alone'])
  }
</script>
