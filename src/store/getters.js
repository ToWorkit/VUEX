// 此处和state相对应，用来传递state中的数据
export default {
  // 积分
  score (state) {
    return state.score
  },
  // 价格
  price (state) {
    if (state.score) {
      // 处理数据并传递
      return state.price
    }
  },
  // 独立区域的积分
  alone (state) {
    return state.alone
  }
}
