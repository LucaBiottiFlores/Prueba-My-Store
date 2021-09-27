import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { shoppingCarModule } from './modules/shoppingCar'
import { productsModule } from './modules/products'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    shoppingCar: shoppingCarModule,
    products: productsModule
  }
})
