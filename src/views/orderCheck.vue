<template>
  <div class="container">
    <orderCheckout :option="option"></orderCheckout>
  </div>
</template>

<script>
import orderCheckout from '@/views/orderCheckout'
export default {
  components: {
    orderCheckout
  },
  data () {
    return {
      option: {
        redirePath: '/shopping'
      }
    }
  }
}
</script>
