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
    products: JSON.parse(localStorage.getItem('products') || '[]'),
    displayedProducts: [],
    status: 'default'
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
      state.displayedProducts = state.products
    },

    deleteProduct (state, payload) {
      const arrowProducts = state.products
      const idx = arrowProducts.findIndex(p => p.id === payload.id)
      arrowProducts.splice(idx, 1)
      localStorage.setItem('products', JSON.stringify(arrowProducts))
      state.displayedProducts = state.products
    },

    sortProducts (state, payload) {
      state.status = payload.name
      switch (payload.name) {
        case 'min':
          state.displayedProducts = [...state.products].sort((a, b) => a.price - b.price)
          break
        case 'max':
          state.displayedProducts = [...state.products].sort((a, b) => b.price - a.price)
          break
        case 'name':
          state.displayedProducts = [...state.products].sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1
            }
            return 0
          })
          break
        case 'default':
          state.displayedProducts = state.products
          break
      }
    }
  },

  actions: {
    createProduct ({ commit }, payload) {
      commit('createProduct', payload)
    },

    deleteProduct ({ commit }, payload) {
      commit('deleteProduct', payload)
    },

    sortProducts ({ commit }, payload) {
      commit('sortProducts', payload)
    }
  },

  getters: {
    products: (state) => {
      if (state.status === 'default') {
        state.displayedProducts = state.products
      }
      return state.displayedProducts
    }
  }
})
