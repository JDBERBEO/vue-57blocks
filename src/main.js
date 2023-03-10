import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/base/_bulma.scss';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  store,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
