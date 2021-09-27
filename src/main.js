import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import { TabPane ,Tabs} from 'element-ui'


Vue.use(TabPane)
Vue.use(Tabs)
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

