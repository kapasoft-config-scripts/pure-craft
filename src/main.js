import Vue from 'vue'
import App from './App.vue'
// import * as VueRouter from 'vue-router'
// import ContactPage from '@/components/pages/ContactPage.vue'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')
