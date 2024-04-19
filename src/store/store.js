// store.js (adaptado para Vue 2 y Vuex 3)
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contador: 5
  },
  mutations: {
    // Aquí puedes definir tus mutaciones si las necesitas
  },
  actions: {
    // Aquí puedes definir tus acciones si las necesitas
  },
  getters: {
    // Aquí puedes definir tus getters si los necesitas
  }
});

export default store;

