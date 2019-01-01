import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  actions: {
    // 實際操作行為 , 第二個參數是 payload 載荷,相當於methods
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  mutations: {
    // 實際操作狀態 - 使用常數 (全部都大寫), 第二個參數是 payload 載荷
    // 不可以在這邊做非同步行為, 或是setTimeout,請在actions做完
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  getters: {
    // 相當於是 computed
    isLoading (state) {
      return state.isLoading
    }
  },
  modules: {

  }
})
