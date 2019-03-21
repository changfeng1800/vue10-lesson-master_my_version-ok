import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Add from '../components/Add.vue'   //用@ 点不进去，不方便
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import List from '../components/List.vue';
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},  ////redirect???? url是 '/'时跳转到哪里.
    {path:'/home',component:Home},    //路径都是小写的
    {path:'/collect',component:Collect},
    {path:'/add',component:Add},
    // /detail/1  {bid:1} 路径参数 必须有但是可以随机
    {path:'/detail/:bid',component:Detail,name:'detail'},
    {path:'/list',component:List},
    {path:'*',redirect:'/home'},
  ]
})
