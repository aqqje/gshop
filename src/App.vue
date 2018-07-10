<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from "Vuex"
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqFoodTypes} from './api'
    export default {
      mounted(){
        // this.$store.dispatch("getTypes")
        this.getAddress()
        this.getUserInfo()

      },
      methods:{
        ...mapActions(["getAddress", "getUserInfo"])
      },
      components:{
        FooterGuide,
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
