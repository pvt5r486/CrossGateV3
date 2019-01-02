
export default {
  namespaced: true,
  strict: true,
  state: {
    messages: []
  },
  actions: {
    updateMessage (context, { message, status = 'danger' }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('pushMessage', {
        message,
        status,
        timestamp
      })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            context.commit('removeMessage', index)
          }
        })
      }, 3000)
    }
  },
  mutations: {
    pushMessage (state, message) {
      state.messages.push(message)
    },
    removeMessage (state, index) {
      state.messages.splice(index, 1)
    }
  },
  getters: {
    messages (state) {
      return state.messages
    }
  }
}
