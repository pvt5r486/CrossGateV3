import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: {
      carts: []
    },
    loadingItem: ''
  },
  actions: {
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      return new Promise((resolve) => {
        axios.get(api).then(response => {
          if (response.data.data.carts) {
            context.commit('CART', response.data.data)
            context.commit('LOADINGITEM', '')
            context.commit('LOADING', false, { root: true })
            resolve()
          } else {
            context.commit('LOADINGITEM', '')
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}` }, { root: true })
          }
        })
      })
    },
    addtoCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      return new Promise((resolve) => {
        axios.post(api, { data: cart }).then(response => {
          if (response.data.success) {
            context.dispatch('getCart')
            context.dispatch('alertModules/updateMessage', {
              message: `【${response.data.data.product.title}】${response.data.data.qty} ${response.data.data.product.unit}${response.data.message}`,
              status: 'success' }, { root: true })
            resolve()
          } else {
            context.dispatch('alertModules/updateMessage',
              { message: `【${response.data.data.product.title}】${response.data.data.qty} ${response.data.data.product.unit}${response.data.message}` }, { root: true })
          }
        })
      })
    },
    delCartItem (context, { id, prodName }) {
      context.commit('LOADINGITEM', id)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      return new Promise((resolve) => {
        axios.delete(api).then(response => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}【${prodName}】`, status: 'success' }, { root: true })
            context.dispatch('getCart')
            resolve()
          } else {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}【${prodName}】` }, { root: true })
          }
        })
      })
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    },
    LOADINGITEM (state, payload) {
      state.loadingItem = payload
    }
  },
  getters: {
    cart (state) {
      return state.cart
    },
    loadingItem (state) {
      return state.loadingItem
    }
  }
}
