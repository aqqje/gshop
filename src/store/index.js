/*
* Vuex核心管理对象Store
* */
import Vue from "vue"
import Vuex from "vuex"
import state from "./State"
import mutations from "./Mutations"
import actions from "./Actions"
import getters from "./Getters"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
