// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChatScrool from 'vue-chat-scroll'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
Vue.use(VueChatScrool);
Vue.config.productionTip = false;
// Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
