<template>
  <div class="p-3">
    <swiper :options="swiperOption" class="prodSwiper"  v-if="filterData.length > 0">
      <swiper-slide v-for="item in filterData" :key="item.id">
        <prodCard :card-data="item" :status="status" @returnProdID="addtoCart"></prodCard>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import prodCard from './prodcard'
export default {
  name: 'prodSilder',
  components: {
    swiper,
    swiperSlide,
    prodCard
  },
  props: {
    prodCategory: {
      type: String,
      default: ''
    },
    searchResult: {
      type: Array,
      default: function () {
        return []
      }
    },
    searchFilter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        speed: 600,
        grabCursor: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          }
        }
      },
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    addtoCart (id, qty = 1) {
      const vm = this
      vm.status.loadingItem = id
      const prodSwiper = document.querySelector('.prodSwiper')
      prodSwiper.swiper.autoplay.stop()
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
        .then(() => {
          vm.status.loadingItem = ''
          prodSwiper.swiper.autoplay.start()
        })
        .catch(() => {
          vm.status.loadingItem = ''
          prodSwiper.swiper.autoplay.start()
        })
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  created () {
    this.getProducts()
  },
  updated () {
    $('.prodSwiper').on('mouseenter', function () {
      this.swiper.autoplay.stop()
    })
    $('.prodSwiper').on('mouseleave', function () {
      this.swiper.autoplay.start()
    })
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.searchFilter || vm.searchResult.length) {
        return vm.searchResult
      } else {
        return vm.products.filter((item) => {
          if (vm.prodCategory === '') {
            return item
          } else {
            return item.category === vm.prodCategory
          }
        })
      }
    },
    ...mapGetters('productsModules', ['products'])
  },
  watch: {
    prodCategory () {
      const prodSwiper = document.querySelector('.prodSwiper')
      prodSwiper.swiper.slideTo(0, 600)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
    min-height: 370px
}
</style>
