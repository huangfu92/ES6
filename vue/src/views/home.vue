<!--
 * @Author: 皇甫国贝
 * @Date: 2019-09-27 15:19:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-13 10:58:21
 * @Description: 
 -->
<template>
  <div>
      <p class="name"></p>
      <div class="namea"> 这是home组件</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      vmsg:"Hello Vue"
    }
  },
  created () {
    
  },
  methods : {
  }
}
</script>
<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
.namea{
  background:#000;
  width:200px;
  height:200px;
}
</style>