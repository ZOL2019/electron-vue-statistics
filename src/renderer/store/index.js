import Vue from 'vue'
import Vuex from 'vuex'

// 去掉 createSharedMutations LocalStore
// import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { createPersistedState } from 'vuex-electron'
// 引用 createPersistedState LocalStore
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState()
    // 去掉 createSharedMutations 引用
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
