<!--
 * @Author: 皇甫国贝
 * @Date: 2019-09-27 15:19:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-13 14:39:30
 * @Description: 
 -->
<template>
  <div id="app">
    <HelloWorld ref="ren" />
    <HomeName ref="homename" />
    <!-- <Life ref="Life" /> -->
  </div>
</template>

<script>
import HelloWorld from "./views/HelloWorld.vue";
import HomeName from "./views/home.vue";
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
