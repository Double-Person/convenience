import Vue from 'vue'
import App from './App'
// import uView from "uview-ui";
// Vue.use(uView);
import {imgBaseUrl} from "./api/request.js"
Vue.prototype.$imgBaseUrl = imgBaseUrl



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
