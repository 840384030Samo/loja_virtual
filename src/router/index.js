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
import AdminLocais from '@/views/AdminLocais.vue'
import LocaisChegada from '@/views/LocaisChegada.vue'
import VisualizacaoBilhetes from '@/views/VisualizacaoBilhetes.vue' 
import PreVisualizacao from '@/views/PreVisualizacao.vue'
import cd from '@/views/cd.vue'
import SimumadorDestino from '@/components/SimumadorDestino.vue'
import Contactos from '@/views/contactos.vue'
import LayoutSobre from '@/views/layoutSobre.vue'
import HomeLogin from '@/views/homeLogin.vue'
import Cadastro from '@/views/Cadastro.vue'
import AddPublicidade from '@/views/AddPublicidade.vue'
import HomePublicidade from '@/views/homePublicidade.vue'
// import Cadastro from '@/views/Cadastro.vue'
// import Login from '@/views/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'cd',
    component: cd
  },
  {
    path: '/simulador',
    name: 'simulador',
    component: SimuladorPage
  },

  {
    path: '/layoutSobre',
    name: 'layoutSobre',
    component: LayoutSobre
  },

    {
    path: '/layoutSobre',
    name: 'layoutSobre',
    component: LayoutSobre
  },

  
    {
    path: '/addPublicidade',
    name: 'addPublicidade',
    component: AddPublicidade
  },

    {
    path: '/homePublicidade',
    name: 'homePublicidade',
    component: HomePublicidade
  },
    {
    path: '/contactos',
    name: 'contactos',
    component: Contactos
  },
   {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },

   {
    path: '/homeLogin',
    name: 'homeLogin',
    component: HomeLogin
  },
  {
    path: '/SimumadorDestino',
    name: 'SimumadorDestino',
    component: SimumadorDestino
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
  },

  
  {
    path: '/AdminLocais',
    name: 'admin',
    component:  AdminLocais
  },
  {
    path: '/LocaisChegada',
    name: 'lociass',
    component:  LocaisChegada
  },
  {
    path: '/Visualizacaobilhetes',
    name: 'bilhetes',
    component: VisualizacaoBilhetes
  },
  {
    path: '/PreVisualizacao',
    name: 'PreVisualizacao',
    component: PreVisualizacao
  }


]

const router = createRouter({
  history: createWebHistory(),  // Escolha aqui o modo de histórico
  routes
})

export default router
