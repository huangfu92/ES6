<!--
 * @Author: 皇甫国贝
 * @Date: 2019-09-27 15:19:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-13 16:28:41
 * @Description: 
 -->
<template>
  <div>
    <!---scoped--->
    <p class="name"></p>
    <refs ref="refData" />
    <div class="namea">这是Hello组件</div>
    <el-button type="primary" @click="handleChange">获取子组件变量</el-button>
    <p>子组件参数是：（{{ aaa }}）</p>
    <p v-show="showIf">v-show</p>
    <p v-if="!showIf">v-if</p>
    <el-button type="primary" @click="handleChangeIfShow"
      >切换show状态</el-button
    >
    <!---text\html\{{}}\model--->
    <!-- <p v-text="vmsg"></p>
      <p v-text="vHtml"></p>
      <div v-html="vHtml"></div>
      <p>你好{{name}}</p>
      <div v-if="Is_type">
        <p>你的年龄{{ age }}</p>
        <button @click="ClicPluskAge">点击按钮加一岁</button>
        <button @click="ClickRedAge">点击按钮减一岁</button>
      </div>
      <button @click="IS_Age">{{!Is_type?"显示":"隐藏"}}年龄</button>
      <p>请输入你的手机号<input v-model="iphone"/></p>
       您输入的手机号是{{iphone}}<br>
       <select v-model="news" >
         <option 
         v-for="(v,k) in grade" 
         :value="v"
         :key="k">
           {{v.name}}
         </option>
       </select><br>
您选中的人是<span class="spanA">{{news.name}}</span>,选中人的年龄是<span  class="spanA">{{news.age}}</span><br> -->
  </div>
</template>

<script>
import refs from "@/views/ref.vue";
export default {
  name: "HelloWorld",
  components: {
    refs
  },
  data() {
    return {
      vmsg: "Hello Vue",
      vHtml: "<p>Hello Vue</p>",
      name: "张三",
      age: 18,
      showIf: false,
      Is_type: false,
      iphone: "",
      grade: [
        { name: "张三", age: 12 },
        { name: "李四", age: 13 },
        { name: "王五", age: 14 },
        { name: "王二麻子", age: 16 },
        { name: "王六", age: 15 },
        { name: "王七", age: 11 },
        { name: "梧语", age: 17 }
      ],
      news: {
        name: "未知",
        age: 0
      },
      aaa: ""
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    handleChange() {
      this.aaa = this.$refs.refData.userNmae;
    },
    handleChangeIfShow() {
      this.showIf = !this.showIf;
    },
    ClicPluskAge() {
      this.age = this.age++ === 100 ? 100 : this.age;
    },
    ClickRedAge() {
      this.age = this.age-- === 0 ? 0 : this.age;
    },
    IS_Age() {
      this.Is_type = !this.Is_type;
    },
    SelectFun(v) {
      // eslint-disable-next-line no-console
      console.log(11111, v);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.spanA {
  color: red;
  font-size: 14px;
  font-weight: 700;
}
.namea {
  background: #f00;
  width: 200px;
  height: 200px;
}
</style>
