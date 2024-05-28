import { getGoodsList } from '@/api/shop'
const state = () => {
  return {
    goodsList: []
  }
}
const getters = {}
const actions = {
  async initGoodsList({ commit }) {
    const res = await getGoodsList()
    const data = res.data
    // console.log(data)
    commit('initGoodsList', data)
  }
}
const mutations = {
  async initGoodsList(state, data) {
    state.goodsList = data
  }
}
export default { namespaced: true, state, getters, mutations, actions }