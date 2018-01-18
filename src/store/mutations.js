import * as types from './mutation-types'

const mutations = {
  [types.SET_LJH] (state, doing) {
    for (var i in doing) {
      state.ljh[i] = doing[i]
    }
  },
  [types.SET_COUNT_NUM] (state, num) {
    state.countNum = state.countNum + num
  }
}

export default mutations
