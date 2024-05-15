/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import LoginView from '../pages/LoginView.vue'
import HelloWorld from '../pages/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes: [
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView 
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld 
    }
  ]

})

export default router
