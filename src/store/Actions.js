/*
* 基于 Mutations| Mutations-Types 的函数
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATING,
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART_LIST,
  RECEIVE_SEARCH_SHOPS
} from "./Mutations-Types"

import {
  reqFoodTypes,
  reqAddress,
  reqShops,
  reqLogout,
  reqUserInfo,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchShops
} from "../api"
export default {
  // 异步获取地址
  async getAddress({commit, state}){
    const geohash = state.latitude + "," + state.longitude
    // 发送ajax异步请求
    const result = await reqAddress(geohash)
    // 提交Mutations
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取商品种类
  async getTypes({commit}){
    // 发送异步请求
    const result = await reqFoodTypes()
    if(result.code === 0){
      const types = result.data
      commit(RECEIVE_TYPES, {types})
    }
  },
  // 异步获取商店列表
  async getShops({commit, state}){
    const {latitude, longitude} = state
    const result = await reqShops(latitude, longitude)
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步接收登录用户信息
  recordUserInfo({commit}, userInfo){
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步接收用户信息
  async getUserInfo({commit}){
    const result  = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步退出登录
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
// 异步获取商家评价列表
  async getShopRatings({commit}, callBack) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATING, {ratings})
      // 数据更新了通知下，组件
      callBack && callBack()
    }
  },
// 异步获取商家商品列表
  async getShopGoods({commit}, callBack) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了通知下，组件
      callBack && callBack()
    }
  },

  // 同步更新food.count的值
  updataFoodCount({commit},{isAdd, food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 清空购物车
  clearCart({commit}){
    commit(CLEAR_CART_LIST)
  },
  // 异步请求搜索数据
  async searchShops({commit, state}, keyword, callBack){
    const geohash = state.latitude + "," + state.longitude
    const result = await reqSearchShops(geohash, keyword)
    if(result.code===0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
      callBack && callBack()
    }
  }

}
