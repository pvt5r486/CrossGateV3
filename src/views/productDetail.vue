<template>
  <div class="container">
    <div class="row no-gutters" v-if="product.id">
      <div class="col-md-8">
        <div class="prodImg">
          <img :src="product.imageUrl" alt="">
        </div>
      </div>
      <div class="col-md-4">
        <div class="prodInfo addCartblock">
          <h2>{{product.title}}</h2>
          <div class="prodPrice">
            <del>原價 {{product.origin_price | currency}}</del>
            <h4>特價 {{product.price | currency}}</h4>
          </div>
          <select class="form-control mb-3" v-model="buyNum">
            <option :value="num" v-for="num in 10" :key="num" >
              選購 {{num}} {{product.unit}}
            </option>
          </select>
          <p class="text-right text-main font-weight-bold mb-1">小計 {{buyNum * product.price | currency}}</p>
          <button type="button" class="addTocardBtn" @click="addtoCart(product.id,buyNum)" :disabled="status.loadingIcon" >
            <i class="fas fa-spinner fa-spin mr-1" v-if="status.loadingIcon"></i>放入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8" v-if="product.id">
        <div class="prodInfo">
          <h3>產品描述</h3>
          <p>{{ product.description }}<em class="blockquote-footer text-right">{{ product.content }}</em></p>
        </div>
      </div>
      <div class="col-md-12"  v-if="product.id">
        <h3 class="page_title my-3">同類別遊戲</h3>
        <prodSilder :prod-category="product.category" ></prodSilder>
      </div>
      <div class="col-md-12">
        <div class="prodInfo">
          <h3>消費者權益</h3>
          <ul class="prodNotice">
            <li>退款必須滿足兩個條件，分別是『遊戲時數低於2小時』與『購入沒有超過14天』。</li>
            <li>若只有『稍微』超過退款條件，或是有非常合理的理由( 遊戲有致命BUG、官方伺服器停止營運等等 )，我們就會同意退款。</li>
            <li>退款的遊戲數量沒有上限，但是請注意，若我們發現您濫用退款機制，就會以個案駁回您的退款要求，甚至降低您未來的退款成功率。</li>
            <li>退款成功後，將於7個工作天內將款項退回給您。</li>
          </ul>
          <em class="blockquote-footer subSlogan">以上數點，我們保有最終解釋權，如無法接受，請勿購買本產品。</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import prodSilder from '@/components/prodsilder'
import { mapGetters } from 'vuex'
export default {
  components: {
    prodSilder
  },
  data () {
    return {
      productID: '',
      buyNum: 1,
      status: {
        loadingIcon: false
      }
    }
  },
  methods: {
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    addtoCart (id, qty = 1) {
      const vm = this
      vm.status.loadingIcon = true
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
        .then(() => {
          vm.status.loadingIcon = false
          vm.buyNum = 1
        })
        .catch(() => {
          vm.status.loadingIcon = false
        })
    }
  },
  computed: {
    ...mapGetters('productsModules', ['product'])
  },
  created () {
    const vm = this
    vm.productID = vm.$route.params.prodId
    vm.getProduct(vm.productID)
  },
  watch: {
    '$route.params.prodId': function () {
      const vm = this
      vm.productID = vm.$route.params.prodId
      vm.getProduct(vm.productID)
    }
  }
}
</script>
