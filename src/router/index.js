import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import taskHelper from '../views/task-helper.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task-helper',
    name: 'Task Helper',
    component: taskHelper
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
