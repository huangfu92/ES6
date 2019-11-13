/*
 * @Author: your name
 * @Date: 2019-09-27 15:19:30
 * @LastEditTime: 2019-11-13 10:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /quality/Users/huangfu/ES6/vue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
// import "./assets/index.less"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
