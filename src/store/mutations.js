// mutations 处理 actions
// 状态更改 处理数据

import * as types from './types'
import Vue from 'vue'
export default {
  // 获取积分
  [types.GETSCORE](state) {
    console.log(state)
    let apiScore = '/static/score.json'
    // 请求数据
    Vue.http.get(apiScore).then((scoreResult) => {
      // 数据
      let scoreDate = scoreResult.body.data[0].score
      // 更新 state 中的  score
      state.score = scoreDate
    })
  },
  // 获取价格
  // obj 为测试参数数据
  [types.GETPRICE](state, obj) {

    // 可以拿到参数就可以对参数做处理
    // 测试从child传来的参数
    console.log(obj)

    if (state.score) {
      let apiPrice = '/static/price.json'
      console.log(state)
      Vue.http.get(apiPrice).then((priceResult) => {
        // 优惠
        let coupon = priceResult.body.data[0].price
        // 更新价格
        // 做出相应处理
        if (state.price > 100) {
          state.price -= coupon
        } else {
          alert('不能再减了')
        }
      })
    }
  },
  // 独立区域的积分
  // 实际目的是为了演示参数的传递及处理
  [types.OPERATESCORE](state, obj) {
    // 积分参数
    console.log(obj)
    state.alone += obj
  }
}
