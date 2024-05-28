import request from '@/utils/axios'
//1. 获取轮播图片,get请求，无参数
export function getImgs() {
  return request({
    url: '/imglist',
    method: 'get'
  })
}

//2. 获取商品，get请求，有参数
export function getGoodsList(data) {
  return request({
    url: '/goodslist?category_id=' + data,
    method: 'get'
  })
}

export function getGoodsInfo(id) {
  return request({
    url: '/goodsinfo?id=' + id,
    method: 'get'
  })
}

//3. 用户登录，post请求，有参数
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
//4.验证用户是否登录
export function isLogin() {
  return request({
    url: '/user',
    method: 'get'
  })
}
//5.获取分类信息
export function category() {
  return request({
    url: '/category',
    method: 'get'
  })
}
//6.新闻资讯
export function getNews() {
  return request({
    url: '/news/list',
    method: 'get'
  })
}
export function getNewsInfo(id) {
  return request({
    url: '/news/show?id=' + id,
    method: 'get'
  })
}
//输出三个方法
// export default {
//   getImgs,
//   goodsList,
//   login
// }
