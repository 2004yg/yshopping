import { createStore } from 'vuex'
import { isLogin } from '@/api/shop'
import shopcart from './modules/shopcart.js'
import goodslist from './modules/goodslist.js'

const store = createStore({
  //1.响应式数据
  state() {
    return {
      state: -1
    }
  },
  //2.类似计算属性
  getters: {},
  //3.异步方法调用
  actions: {
    // increment({ commit }, data) {
    //   commit('increase', data)
    // }
    check({ commit }) {
      commit('check')
    }
  },
  //4.同步方法调用
  mutations: {
    // increase(state, data) {
    //   state.count += data
    // },
    async check(state) {
      const res = await isLogin()
      console.log(res)
      console.log(state.state)
    }
  },
  
  //5.可以工程化组织数据
    modules: { goodslist, shopcart }
})

export default store

