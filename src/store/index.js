import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class Product {
  constructor (title, description, imageSrc, price, id = null) {
    this.title = title
    this.description = description
    this.imageSrc = imageSrc
    this.price = price
    this.id = id
  }
}

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    createProduct (state, payload) {
      const newProduct = new Product(
        payload.title,
        payload.description,
        payload.imageSrc,
        payload.price
      )
      state.products.push(newProduct)
      console.log(payload)
      console.log(state.products)
    }
  },
  actions: {
    createProduct ({ commit }, payload) {
      commit('createProduct', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    }
  },
  modules: {
  }
})
