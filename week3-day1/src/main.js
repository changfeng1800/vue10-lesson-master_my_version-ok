import Vue from 'vue'; // runtime不支持template 只支持render（）
// compiler + runtime  compiler是编译template的
import App from './App.vue';

import router from './router/index.js'; //不写index.js也行，会默认找这个名字的文件
import notify from './plugin/notify.js';
Vue.use(notify,{   //注册一些全局的内容，不写这个就会报：router-view 没有       ////???有什么用
                   //这是一种插件的写法
    delay:5000
}); // 使用带有install的对象
new Vue({
    router, ////这是一个数组
    el:'#app',
    render:h=>h(App),   //渲染App组件   ////???

    //下面是以前写法，有这种写法就是compiler + runtime，但是最上面要写成'from vue/dist/vue.js' (router里面也要改),为两句话多6kB
    //components:{App},
    //template:'<App/>'

});


//如果满屏报红 jsLint jsHint
//改了配置文件要重启