<template>
  <div>

  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: function () {
        return {
          redirePath: '/admin/shopping-demo'
        }
      }
    }
  },
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      status: {
        loadIcon: false
      }
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$store.dispatch('updateLoading', true)
      this.$http.get(api).then(response => {
        if (response.data.success && response.data.order) {
          vm.order = response.data.order
          vm.$store.dispatch('updateLoading', false)
        } else {
          vm.$store.dispatch('updateLoading', false)
          vm.$bus.$emit('message:push', '糟糕...沒有這筆訂單喔！', 'danger')
          vm.$router.push(`/admin/shopping-demo`)
        }
      })
    },
    payOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.status.loadIcon = true
      this.$http.post(api).then(response => {
        if (response.data.success) {
          if (response.data.success) {
            vm.$bus.$emit('message:push', response.data.message, 'success')
            vm.getOrder()
          } else {
            vm.$bus.$emit('message:push', '付款失敗 :( ', 'danger')
          }
          vm.status.loadIcon = true
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderID
    this.getOrder()
  }
}
</script>
