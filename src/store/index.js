import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
    total: 0,
  },
  mutations: {
    addToCart(state, selected){
      let object = selected.product;
      object.selectedOption = selected.option;
      object.cartID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      state.basket.push(object);
      state.total = state.total + parseFloat(selected.product.variants[0].price)
    },
    removeFromCart(state, key){
      console.log(key);
      state.total = state.total - state.basket[key].variants[0].price;
      state.basket.splice(key, 1)
    }
  },
  actions: {

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
