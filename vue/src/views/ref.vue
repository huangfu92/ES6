<!--
 * @Author: 皇甫国贝
 * @Date: 2019-09-27 15:19:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-13 14:41:13
 * @Description: 
 -->
<template>
  <div>
    {{ userNmae }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userNmae: "小V"
    };
  }
};
</script>
<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped></style>
