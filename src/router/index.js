// import { useStore } from 'vuex'
import { isLogin } from '@/api/shop'

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import GoodsList from '@/components/GoodsList.vue'
import ShopCart from '@/components/ShopCart.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import category from '@/components/category.vue'
import Mine from '@/components/mine.vue'
import goods from '@/components/goods.vue'
import NewsInfo from '@/components/NewsInfo.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: '主页'
  },
  {
    path: '/goodslist',
    component: GoodsList,
    name: '商品列表'
  },
  {
    path: '/shopcart',
    component: ShopCart,
    name: '购物车'
  },
  {
    path: '/login',
    component: login,
    name: '登录'
  },
  {
    path: '/register',
    component: register,
    name: '注册'
  },
  {
    path: '/category',
    component: category,
    name: '商品分类'
  },
  {
    path: '/mine',
    component: Mine,
    name: '我的'
  },
  {
    path: '/goods/:id/:image',
    component: goods,
    name: '商品详情'
  },
  {
    path: '/newsInfo/:id',
    component: NewsInfo,
    name: '新闻详情'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  // const store = useStore()
  // store.dispatch('check')
  if (to.path == '/login' || to.path == '/register') {
    next()
  } else {
    const res = await isLogin()
    if (res.code == 1) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
