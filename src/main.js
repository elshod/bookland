import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import router from './router'  
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );
Vue.use(VueRouter) 

require('@/assets/css/style.css')

Vue.config.productionTip = false
new Vue({
  router,  // !
  render: h => h(App),
}).$mount('#app')
