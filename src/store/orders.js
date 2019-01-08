import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  strict: true,
  state: {
    order: {
      user: {}
    },
    status: {
      loadIcon: false
    },
    orders: [],
    pagination: {}
  },
  actions: {
    createdOrder (context, order) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      context.commit('LOADING', true, { root: true })
      axios.post(api, { data: order }).then(response => {
        if (response.data.success) {
          context.dispatch('cartModules/getCart', null, { root: true })
          context.dispatch('alertModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
          context.commit('LOADING', false, { root: true })
          router.push(`/orderCheckout/${response.data.orderId}`)
        } else {
          context.dispatch('alertModules/updateMessage', { message: `${response.data.message}` }, { root: true })
          context.commit('LOADING', false, { root: true })
        }
      })
    },
    getOrder (context, orderID) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderID}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        if (response.data.success && response.data.order) {
          context.commit('ORDER', response.data.order)
          context.commit('LOADING', false, { root: true })
        } else {
          context.commit('LOADING', false, { root: true })
          context.dispatch('alertModules/updateMessage', { message: `糟糕...沒有這筆訂單喔！` }, { root: true })
          router.push(`/shopping`)
        }
      })
    },
    payOrder (context, orderID) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderID}`
      context.commit('LOADINGICON', true)
      axios.post(api).then(response => {
        if (response.data.success) {
          context.dispatch('alertModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
          context.commit('LOADINGICON', false)
          context.dispatch('getOrder', orderID)
        } else {
          context.commit('LOADINGICON', false)
          context.dispatch('alertModules/updateMessage', { message: `'付款失敗 :(` }, { root: true })
        }
      })
    },
    getOrders (context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        context.commit('ORDERS', response.data.orders)
        context.commit('PAGINATION', response.data.pagination)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    ORDER (state, payload) {
      state.order = payload
    },
    LOADINGICON (state, payload) {
      state.status.loadIcon = payload
    },
    ORDERS (state, payload) {
      state.orders = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  getters: {
    order (state) {
      return state.order
    },
    status (state) {
      return state.status
    },
    orders (state) {
      return state.orders
    },
    pagination (state) {
      return state.pagination
    }
  }
}
