import { createRouter, createWebHistory } from 'vue-router'

const layout = (name) => () => import(`../layouts/${name}.vue`);
const view = (name) => () => import(`../views/${name}.vue`);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout('Default'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: view('Dashboard'),
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: layout('Error') },
      ]
    },
  ]
})

export default router
