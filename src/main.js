import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTypedJs from 'vue-typed-js'


import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 全局注册
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from "axios";
// use
Vue.use(mavonEditor)
Vue.use(VueAwesomeSwiper)
Vue.use(VueTypedJs)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import { Button,  Message} from "element-ui"

Message.install = function (Vue) {
  Vue.prototype.$message = Message
}

Vue.use(Button)
Vue.use(Message)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
