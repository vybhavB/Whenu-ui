require('dotenv').config();
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
// import './../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js';
// import VueGeolocation from "vue-browser-geolocation";
// Initialize Firebase
// Vue.use(VueGeolocation);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
