import Vue from 'vue';  //高级的es6语法
// 这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
// vue = compiler + runtime (compiler可以编译模板)
// compiler有6k
import App from './App.vue';    ////???App现在是什么
new Vue({
    // render函数的作用是将虚拟dom渲染成真实的dom
    // createElement返回的是虚拟的dom

    ////因为是runtime，所以这里不能写template
    render:h=>h(App)    ////???
    // ...App
}).$mount('#app');  ////和el:'#app'这种写法一样，只是另一种写法
//不用.$mount('#app') 也可以用el:"#app"


/*
render:function (createElement) {
    return createElement('h1',[
        'hello',
        createElement('span', '一则头条')
    ]);
}*/

// 6-7 .mp4  这里要用vue了

