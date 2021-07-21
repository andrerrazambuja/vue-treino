import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMask from 'v-mask';
Vue.use(VueMask);
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
