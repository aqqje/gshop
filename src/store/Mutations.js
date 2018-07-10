/*
* 基于 State 的数据操作
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_USER_INFO
} from "./Mutations-Types"
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_TYPES](state,{types}){
    state.types = types
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  }
}
