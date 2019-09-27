<!--
 * @Author: 皇甫国贝
 * @Date: 2019-09-27 10:39:14
 * @LastEditors: 皇甫国贝
 * @LastEditTime: 2019-09-27 15:22:14
 * @Description: 
 -->
# 手摸手讲述VUE项目搭建及Es6的应用

> 前言：在做项目之前，我们先分析一下，一个项目的成型，都需要哪些技术:
`vue.js`  `vueX` `Element` `vue-router` `Axios` `ES6` `vue-cli3`
那上面说的这些技术是什么那

 > * [vue.js](https://cn.vuejs.org/v2/guide/) ： 
 >   >框架（渐进式，自底向上逐层应用，Vue 的核心库只关注视图层）
 > * [vueX](https://vuex.vuejs.org/zh/api/) ： 
 >   >全局状态管理器 
 > * [vue-router](https://router.vuejs.org/zh/guide/)：  
 >   >路由
 > * [vue-cli3](https://cli.vuejs.org/zh/)：    
 >   >vue官方提供的快速搭建项目的工具（主要是项目的依赖：eslint、babel等）[vue-cli2](https://cli.vuejs.org/zh/guide/ )
 > * [Axios](https://blog.csdn.net/a5nan/article/details/89096027)：    
 >   >基于Promise 用于浏览器和 nodejs 的 HTTP client [官网](http://www.axios-js.com/)
 > * [ES6](http://es6.ruanyifeng.com/#docs/set-map)：    
 >   >ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准


 废话不说了，现在让我们开始一个项目的搭建，在这里我们用的是最新的vue脚手架vue-cli3,问什么用vue-cli3？[请点击这里](https://segmentfault.com/q/1010000019785471)
 
 <h4>首先检查当前环境,打开服务终端</h4>：
```
    node -v  //检查是不是最新node版本[官网](http://nodejs.cn/)
    npm -v   //查看npm是否正常[官网]（https://www.npmjs.cn）
```
当前环境一切正常之后，我们切换到需要放的项目的文件夹

全局安装vue-cli3:命令：`npm install -g @vue/cli`
创建项目：`vue create my-project`

完成创建之后；

进入新建项目文件夹中： `cd vue`
启动项目：`npm run serve`