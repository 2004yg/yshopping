const state = () => {
  return {
    items: []
  }
}
const getters = {
  totalPrice: (state) => {
    return state.items
      .reduce((total, item) => {
        return total + item.price * item.num
      }, 0)
      .toFixed(2)
  }
}
const mutations = {
  initShopCart(state, data) {
    state.items = data
  },
  add(state, item) {
    const goods = state.items.find((v) => {
      return v.id == item.id
    })
    if (goods != null) {
      goods.num++
    } else {
      const obj = {
        id: item.id,
        num: 1,
        price: item.price,
        sell_point: item.sell_point,
        name: item.name,
        image: item.image
      }
      state.items.push(obj)
    }
    localStorage.setItem('shopcart', JSON.stringify(state.items))
  },
  sub(state, item) {
    const goods = state.items.find((v) => {
      return v.id == item.id
    })
    if (goods.num > 1) {
      goods.num--
    } else {
      // state.items = state.items.filter((v) => v.id !== item.id)
      const index = state.items.findIndex((v) => {
        return v.id == goods.id
      })
      state.items.splice(index, 1)
    }
    localStorage.setItem('shopcart', JSON.stringify(state.items))
  }
}
const actions = {
  addToCart({ commit }, data) {
    commit('add', data)
  },
  delFromCart({ commit }, data) {
    commit('sub', data)
  }
}
export default { state, getters, mutations, actions, namespaced: true }
