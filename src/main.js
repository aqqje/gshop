// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import {Button} from 'mint-ui'
import "./mock/mockServer"
import VueLazyload from "vue-lazyload"
import loading from "./common/images/loading.gif"
// 注册全局组件
Vue.component(Button.name, Button) // <mt-botton>
Vue.config.productionTip = false
Vue.use(VueLazyload,{ //  内部自定义一个指定命 Lazy
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
