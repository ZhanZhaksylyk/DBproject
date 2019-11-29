import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false
// eslint-disable-next-line no-console
new Vue({
  render: h => h(App),
}).$mount('#app')
