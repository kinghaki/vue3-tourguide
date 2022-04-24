import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home'

  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/AppHome.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('@/views/AppEvent.vue')
  },
  {
    path: '/spot',
    name: 'spot',
    component: () => import('@/views/AppSpot.vue')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('@/views/AppFood.vue')
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: () => import('@/views/AppEventDetail.vue')
  },
  {
    path: '/spot/:id',
    name: 'SpotDetail',
    component: () => import('@/views/AppSpotDetail.vue')
  },
  {
    path: '/food/:id',
    name: 'FoodDetail',
    component: () => import('@/views/AppFoodDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*', // router4，萬用字元寫法
    redirect: '/home'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
