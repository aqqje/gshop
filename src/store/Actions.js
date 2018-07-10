/*
* 基于 Mutations| Mutations-Types 的函数
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES,
  RECEIVE_USER_INFO
} from "./Mutations-Types"
import {
  reqFoodTypes,
  reqAddress,
  reqShops,
  reqUserInfo
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
  }
}
