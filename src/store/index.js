import { createStore } from 'vuex'

export default createStore({
  state: {
    gameCode: localStorage.getItem('gameCode') || ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
