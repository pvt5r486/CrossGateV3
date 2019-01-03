import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {

  },
  actions: {
    createdOrder (context, order) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      context.commit('LOADING', true, { root: true })
      return new Promise((resolve) => {
        axios.post(api, { data: order }).then(response => {
          if (response.data.success) {
            context.dispatch('cartModules/getCart', { root: true })
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
            context.commit('LOADING', false, { root: true })
            resolve()
          } else {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}` }, { root: true })
            context.commit('LOADING', false, { root: true })
          }
        })
      })
    }
  },
  mutations: {

  },
  getters: {

  }
}
