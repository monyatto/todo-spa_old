import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/memos',
      name: 'memos',
      component: () => import('../views/MemosView.vue'),
    },
    {
      path: '/memos/new',
      name: 'new',
      component: () => import('../views/NewMemo.vue'),
    },
    {
      path: '/memos/:memoId',
      name: 'memo',
      component: () => import('../views/MemoView.vue'),
    }
  ]
})

export default router
