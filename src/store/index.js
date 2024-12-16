// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isRendered: false
  },
  mutations: {
    toggleRender(state) {
      state.isRendered = true;
    }
  }
});

export default store;
