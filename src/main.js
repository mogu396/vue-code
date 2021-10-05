import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import './assets/iconfont/iconfont.css'
import { TabPane ,Tabs, Pagination,Col,Row} from 'element-ui'


Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(Col)
Vue.use(Row)
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
  Vue.prototype.$bus=this
  }
}).$mount('#app')

