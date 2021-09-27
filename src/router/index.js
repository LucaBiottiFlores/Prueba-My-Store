import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Home',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/nuevo-producto',
    name: 'NewProduct',
    component: () => import('../views/NuevoProducto.vue')
  },
  {
    path: '/carrito-de-compras',
    name: 'ShoppingCar',
    component: () => import('../views/ShoppingCar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
