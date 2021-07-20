import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaskHelper from '../views/task-helper.vue'
import Photos from '../views/photos.vue'
import Validation from '../views/form-validation.vue'


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
    component: TaskHelper
  },
  {
    path: '/photos',
    name: 'Fotos',
    component: Photos
  },
  {
    path: '/form-validation',
    name: 'Validation',
    component: Validation
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
