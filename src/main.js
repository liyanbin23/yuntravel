import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import Element from 'element-ui'
import Axios from 'axios'
import waterfall from 'vue-waterfall2'
import './element-variables.scss'
import './assets/icon/iconfont.css'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor /* { default global options } */)

Vue.use(BaiduMap, {
    // 个人密钥
    ak: 'oz8AZIPGBYIYoThZbUqHjV1pOFAOSITm'
})
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(waterfall)
Vue.prototype.$axios = Axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
