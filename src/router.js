import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 切換路由時回到畫面頂部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index',
      component: () => import('@/components/index'),
      children: [
        {
          name: '關於我們',
          path: 'index',
          component: () => import('@/views/About')
        },
        {
          path: 'gamehost',
          component: () => import('@/components/gameHost'),
          children: [
            {
              name: '主機介紹',
              path: '/',
              component: () => import('@/views/gameHostMenu')
            },
            {
              name: '主機介紹-Switch',
              path: 'switch',
              component: () => import('@/views/switch')
            },
            {
              name: '主機介紹-PS4',
              path: 'ps4',
              component: () => import('@/views/ps4')
            },
            {
              name: '主機介紹-N3DS',
              path: 'n3ds',
              component: () => import('@/views/n3ds')
            }
          ]
        },
        {
          name: 'CrossGate商城',
          path: 'shopping',
          component: () => import('@/views/crossgate')
        },
        {
          name: '產品介紹',
          path: 'productDetail/:prodId',
          component: () => import('@/views/productDetail')
        },
        {
          name: '我的購物車',
          path: 'myshoppingCart',
          component: () => import('@/views/shopCart')
        },
        {
          name: '我的訂單',
          path: 'myorders',
          component: () => import('@/views/myorders')
        },
        {
          name: '確認訂單',
          path: 'orderCheckout/:orderID',
          component: () => import('@/views/orderCheck')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/admin',
      redirect: '/login',
      // 搭配 redirect 代表如果輸入 path 則導引到redirect路徑
      component: () => import('@/components/dashboard'),
      children: [
        // 根的路徑通常會加上 '/'   子路徑則不會加上 '/'
        {
          path: 'products',
          component: () => import('@/views/products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          component: () => import('@/views/orders'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          component: () => import('@/views/coupon'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
