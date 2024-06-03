import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/Accueil.vue',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
