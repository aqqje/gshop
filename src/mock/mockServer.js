/*
* 使用mock js 提供的mock数据接口
* */


import Mock from "mockjs"
import data from "./data"

// 返回goods接口
Mock.mock("/goods", {code: 0, data: data.goods})
// 返回rating接口
Mock.mock("/rating", {code: 0, data: data.rating})
// 返回info接口
Mock.mock("/info", {code: 0, data: data.info})
