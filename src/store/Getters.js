/*
* 基于 State 的计算属性
* */
export default {
  totalCount(state){
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice(state){
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count*food.price, 0)
  },
  positionSize(state){
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0 ? 1 : 0), 0)
  }
}
