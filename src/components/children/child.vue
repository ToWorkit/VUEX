<template>
  <div class="sub-container">
    <h3>{{title}}</h3>
    <div>积分：{{score}}</div>
    <div>价格：{{price}}</div>
    <button @click="getPrice">会员价格</button>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'child',
    data () {
      return {
        title: '兄弟组件_01'
      }
    },
    created() {
      // 手动触发
      // 先获取积分
      this.$store.dispatch({type: 'getScore'})
    },
    methods: mapActions(['getPrice']),
    computed: mapGetters(['score', 'price'])
  }
</script>
