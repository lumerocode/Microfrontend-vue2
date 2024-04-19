import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'
import './assets/main.css'

new Vue({
  render: (h) => h(App),
  store: Store
}).$mount('#app')
