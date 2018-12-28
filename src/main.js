import Vue from 'vue'
// 引用 第三方 套件
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import $ from 'jquery'

// 引用自定
import App from './App.vue'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import timeTampsFilter from './filters/timetamps'
import categoryClassNameFilter from './filters/categoryClassName'
import pagination from '@/components/pagination'
import modal from '@/components/modal'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.use(VeeValidate, { events: 'change' })
VeeValidate.Validator.localize('zh_TW', zhTWValidate)

// 全域啟用元件
Vue.component('Loading', Loading)
Vue.component('pagination', pagination)
Vue.component('modal', modal)
Vue.filter('currency', currencyFilter)
Vue.filter('timeTamps', timeTampsFilter)
Vue.filter('category', categoryClassNameFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // 避免再 modal 打開時使用者按上一頁導致卡死
  $('.modal').modal('hide')
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    // 現在的執行環境是在 router 下，並不是在 Vue 的元件內，所以無法使用 this.$http.post
    axios.post(api).then(response => {
      response.data.success ? next() : next({ path: '/login' })
    })
  } else {
    next()
  }
})
