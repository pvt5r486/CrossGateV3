import axios from 'axios'

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: {
      carts: []
    }
  },
  actions: {
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data)
        }
        context.commit('LOADING', false, { root: true })
      })
    },
    addtoCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      return new Promise((resolve, reject) => {
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
            reject(new Error(`執行失敗,原因:${response.data.message}`))
          }
        })
      })
    },
    delCartItem (context, { id, prodName }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      return new Promise((resolve, reject) => {
        axios.delete(api).then(response => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}【${prodName}】`, status: 'success' }, { root: true })
            context.dispatch('getCart')
            resolve()
          } else {
            context.dispatch('alertModules/updateMessage', { message: `${response.data.message}【${prodName}】` }, { root: true })
            reject(new Error(`執行失敗,原因:${response.data.message}`))
          }
        })
      })
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    cart (state) {
      return state.cart
    }
  }
}
