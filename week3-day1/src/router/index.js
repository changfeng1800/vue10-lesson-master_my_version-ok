import Vue from 'vue';
import Home from '../components/Home.vue';      ////这是两个component
import List from '../components/List.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter); // 和以前不一样的地方引入router必须使用use
// 注册一些全局的内容
export default new VueRouter({  ////export default别人就可以接收了,default后面的东东就是别人inport进去的
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List},
    ]
});