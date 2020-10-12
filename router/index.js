import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Form from '../components/form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'home',
    components : Home
  },
  {
    path : '/form',
    name : 'form',
    components : Form
  }
]

const router = new VueRouter({
  routes
})

export default router
