import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import api from './service/api'
import VueQuillEditor from 'vue-quill-editor'
// use
Vue.use(VueQuillEditor)

Vue.prototype.$api = api
 
Vue.use(Vuetify)

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/editor.css'

import "./assets/style.less"
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  if(to.meta.title) store.commit('setNavTitle', to.meta.title);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
