// actions 自动触发 mutations
// 手动触发在child.vue组件中

import * as types from './types.js'
export default {
  // 获取积分
  getScore({commit, state}, obj) {
    commit(types.GETSCORE, obj)
  },
  // 获取价格
  getPrice({commit, state}, obj) {
    commit(types.GETPRICE, obj)
  },
  // 处理独立区域的积分(实际目的是为了演示参数的传递及处理)
  operateScore({commit, state}, obj) {
    commit(types.OPERATESCORE, obj)
  }
}
