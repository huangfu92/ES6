<!--
 * @Author: your name
 * @Date: 2019-09-27 15:19:30
 * @LastEditTime: 2019-11-13 21:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /quality/Users/huangfu/ES6/vue/src/App.vue
 -->
<template>
  <div id="app">
    <HelloWorld ref="ren" />
    <HomeName ref="homename" />
    <!-- <Life ref="Life" /> -->
  </div>
</template>

<script>
import HelloWorld from "./views/HelloWorld.vue"; //实例
import HomeName from "./views/home.vue"; // 比较样式的scoped属性
// import Life from "./views/life.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HomeName
    // Life
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
