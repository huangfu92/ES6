/*
 * @Author: your name
 * @Date: 2019-09-27 15:19:30
 * @LastEditTime: 2019-11-13 14:33:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /quality/Users/huangfu/ES6/vue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
