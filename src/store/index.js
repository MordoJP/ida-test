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
    products: JSON.parse(localStorage.getItem('products') || '[]')
  },
  mutations: {
    createProduct (state, payload) {
      const idx = Math.floor(Date.now() / 1000) + 'idx'
      const newProduct = new Product(
        payload.title,
        payload.description,
        payload.imageSrc,
        payload.price,
        idx
      )
      state.products.push(newProduct)
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    deleteProduct (state, payload) {
      const arrowProducts = state.products
      const idx = arrowProducts.findIndex(p => p.id === payload.id)
      // state.products.splice(idx, 1)
      arrowProducts.splice(idx, 1)
      localStorage.setItem('products', JSON.stringify(arrowProducts))
    }
  },
  actions: {
    createProduct ({ commit }, payload) {
      commit('createProduct', payload)
    },
    deleteProduct ({ commit }, payload) {
      commit('deleteProduct', payload)
    }
  },
  getters: {
    products: s => s.products
  }
})
