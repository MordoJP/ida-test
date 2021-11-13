import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// class Product {
//   constructor (id = null, title, description, imageSrc, price) {
//     this.id = id
//     this.title = title
//     this.description = description
//     this.imageSrc = imageSrc
//     this.price = price
//   }
// }

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
