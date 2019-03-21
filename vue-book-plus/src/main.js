////ok


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 


// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
// 使用轮播图插件
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.imgtn.bdimg.com/it/u=3779605030,1222595953&fm=27&gp=0.jpg', ////错误图片
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',    ////加载中图片
  attempt: 1
});
import store from './vuex'    ////引入store文件，默认引入文件夹里面的index文件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   ////router是一个对象
  store,
  template: '<App/>',
  components: { App }
})
