// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false;

//全局注册组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    VueResource
  },
  template: '<App/>'
});
//index.html -> main.js ->App.vue
