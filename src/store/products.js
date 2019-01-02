import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {
    products: [],
    product: {}
  },
  actions: {
    getProducts (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        if (response.data.success) {
          context.commit('PRODUCTS', response.data.products)
          context.commit('LOADING', false, { root: true })
        }
      })
    },
    getProduct (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        context.commit('PRODUCT', response.data.product)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    product (state) {
      return state.product
    }
  }
}
