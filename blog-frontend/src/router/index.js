import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact/index.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles/index.vue')
  },
  {
    path: '/articles/:slug',
    name: 'Article Details',
    component: () => import(/* webpackChunkName: "articles-details" */ '../views/Articles/show.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
