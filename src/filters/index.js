import Vue from "vue"
import Moment from "moment"

// 自定义过滤器

Vue.filter("date-format",(value, formatStr="YYYY-MM-DD HH:mm:ss") => {
  return Moment(value).format(formatStr)
})
