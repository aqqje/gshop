<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="types.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(types, index) in typesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(type, index) in types" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+type.image_url">
              </div>
              <span>{{type.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div v-else><img src="./images/back/msite_back.svg"></div>
    </nav>

    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import {mapState} from "Vuex"
  import HeaderTop from "../../components/HeaderTop/HeaderTop"
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import ShopList from '../../components/ShopList/ShopList'
    export default {
        data() {
          return {
            baseImgUrl: 'https://fuss10.elemecdn.com'
          }
        },
        mounted(){

          // 发送异步请求获取商品分类信息
          this.$store.dispatch("getTypes")
          // 发送异步请求获取商店信息
          this.$store.dispatch("getShops")

        },
        name: "Msite",
        components:{
          HeaderTop,
          ShopList,
        },
        computed:{
          ...mapState(["address", "types"]),

          // 通过 types 一维数组，计算出一个 typesArr 二维数组
          typesArr(){
            const {types} = this
            // 准备一个二维数组
            const arr = []
            // 准备一个小数组（长度为8）
            let minArr = []
            types.forEach(t => {
              // 判断 minArr 长度超8 minArr 重新赋值
              if(minArr.length === 8){
                minArr = []
              }
              // 将小数组放入二维数组中
              if(minArr.length === 0){
                arr.push(minArr)
              }
              minArr.push(t)
            })
            return arr
          }
        },
        watch:{
          types(value){
            this.$nextTick(()=>{ // $nextTick 必须执行在数据更新之后，一旦界面更新，立即调用 | setTimeout 也可以使用
              new Swiper('.swiper-container', {
                loop: true, // 可循环
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
              })
            })
          }
        },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    overflow hidden
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
