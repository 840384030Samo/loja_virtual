import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimuladorPage from '@/components/SimuladorPage.vue'
import loginPage from '@/components/loginPage.vue'
import cadastroPage from '@/components/cadastroPage.vue'
import ColetaDados from '@/components/coletaDados.vue'
import MaputoDetalhes from '@/views/MaputoDetalhes.vue'
//import InhambaneDetalhes from '@/views/InhambaneDetalhes.vue'
import GazaDetalhes from '@/views/GazaDetalhes.vue'
import TeteDetelhes from '@/views/TeteDetelhes.vue'
import InhambaneDetalhess from '@/views/InhambaneDetalhess.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/simulador',
    name: 'simulador',
    component: SimuladorPage
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/dados',
    name: 'dados',
    component: ColetaDados
  },
  {
    path: '/register',
    name: 'register',
    component: cadastroPage
  },
  // ========================= paginas de detalhes ===========================
  {
    path: '/maputodetalhes',
    name: 'maputo',
    component: MaputoDetalhes
  },
  {
    path: '/gazadetalhes',
    name: 'gaza',
    component: GazaDetalhes
  },
  {
    path: '/inhambaneDetalhess',
    name: 'inhambane',
    component: InhambaneDetalhess
  },


  {
    path: '/tetedetalhes',
    name: 'tete',
    component: TeteDetelhes
  },


  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),  // Escolha aqui o modo de histórico
  routes
})

export default router
