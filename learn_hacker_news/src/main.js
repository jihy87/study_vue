import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 라우터 연결
  router: router,
}).$mount('#app')
