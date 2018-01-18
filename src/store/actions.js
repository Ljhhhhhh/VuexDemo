import * as types from './mutation-types'

export const setCountNum = function ({commit}, num) {
  commit(types.SET_COUNT_NUM, num)
}