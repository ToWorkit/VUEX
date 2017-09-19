// 此处和state相对应，用来传递state中的数据
// 可以看做是计算属性做二次处理

export default {
  // 积分
  score (state) {
    return state.score
  },
  // 价格
  price (state) {
    if (state.score) {
      // 处理数据并传递
      return state.price + 9
    }
  }
}
