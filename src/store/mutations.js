import * as types from './mutation-types'

const mutations = {
  [types.SET_LJH](state, doing) {
    for(var i in doing){
      state.ljh[i]=doing[i]
    }
  }
}

export default mutations
