<template>
  <div class="container">
    <h1>Hello World</h1>
    <div>
      <!-- 两个兄弟组件 -->
      <child></child>
      <child2></child2>
    </div>
  </div>
</template>
<script>
  import child from './children/child.vue'
  import child2 from './children/child_02.vue'
  export default {
    name: 'helloWorld',
    components: {child, child2}
  }
</script>
