import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/test',
    component: () => import('@/views/test/testView.vue'),
    meta: {
      title: '首頁'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
