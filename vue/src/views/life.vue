<!--
 * @Author: your name
 * @Date: 2019-11-13 11:09:04
 * @LastEditTime: 2019-11-13 11:11:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /quality/Users/huangfu/ES6/vue/src/views/wuw.vue
 -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      message: "钩子函数小测试"
    };
  },
  beforeCreate() {
    console.group("beforeCreate 创建前状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  created() {
    console.group("created 创建完毕状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeMount() {
    console.group("beforeMount 挂载前状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  mounted() {
    console.group("mounted 挂载结束状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeUpdate() {
    console.group("beforeUpdate 更新前状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("真实dom结构：" + document.getElementById("app").innerHTML);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  updated() {
    console.group("updated 更新完成状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("真实dom结构：" + document.getElementById("app").innerHTML);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  beforeDestroy() {
    console.group("beforeDestroy 销毁前状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  destroyed() {
    console.group("destroyed 销毁完成状态 ------------>");
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  }
};
</script>
