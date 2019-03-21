////ok

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  mode:'history',   ////history????
  routes: [
    {
      path:'/',   ////url路径是斜杠时跳到 /home
      redirect:'/home',
    },
    {
      path:'/home',
      component:()=>import('../components/Home.vue'),   ////router懒加载，不会打包成一个JS文件，每个router打包成一个。
      meta:{keepAlive:true}},   ////页面缓存（在 <router-view></router-view>处增加页面缓存功能）
    {
      path:'/collect',
      component:()=>import('../components/Collect.vue')
    },
    {
      path:'/add',
      component:()=>import('../components/Add.vue')
    },
    // /detail/1  {bid:1} 路径参数 必须有但是可以随机
    {
      path:'/detail/:bid',  ////设置 url = detail/1时跳转路径, bid是变量 配合：List.vue 第8行, 路由跳转，再配合Detail.vue第51行，接收路由参数
      component:()=>import('../components/Detail.vue'),
      name:'detail'},   ////name的作用：
    {
      path:'/list',
      component:()=>import('../components/List.vue')},
    {
      path:'*',   ////路径错误，默认到到home
      redirect:'/home'
    },
  ]
})
