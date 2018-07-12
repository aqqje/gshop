/*
* 基于 State 的数据操作
* */
import Vue from "vue"
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATING,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
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
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATING](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      Vue.set(food, "count", 1) // 让新属性也有数据绑定
      // 将 food 添加到 shopCart 中
      state.shopCart.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count--
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  }
}
