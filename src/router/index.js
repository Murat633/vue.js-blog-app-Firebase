import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MakaleEkle from '../views/MakaleEkle.vue'
import MakaleDetay from '../views/MakaleDetay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ekle',
      name: 'ekle',
      component: MakaleEkle
    },
    {
      path: '/makale/:id',
      name:'Detay',
      component: MakaleDetay,
      props:true
    } 
  ]
})

export default router
