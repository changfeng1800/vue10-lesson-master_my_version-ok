////ok

<template>
  <div id="app">
    <!-- 写了下面，路由的东西才能展示出来 -->
    <router-view></router-view>
    <!-- 开始测试时下面可以写router-link来测试，拿到base 下面的Tab里面了，App里面不应该写太多 -->
    <Tab></Tab>
  </div>
</template>

<script>
//导入组件
import Tab from './base/Tab.vue';
export default {
  name: 'app',  ////name一定要写吗???
  components:{
    //Tab 是App的组件
    Tab
  }
}
</script>

// App里面的样式是公共样式，所以没有scoped

<style>
  *{margin: 0;padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance:none;} /*去掉输入框默认样式*/
  /*下面也是公共样式，所以放到这里*/
  .content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto}
</style>
