////ok

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   ////默认会找下面的index

Vue.config.productionTip = false  ////???

// 导入轮播图插件，第1步
import VueAwesomeSwiper from 'vue-awesome-swiper';  ////github
// 使用轮播图插件，第2步
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',   ////之所以可以用template,是因为设置了compiler和runtime, template可以写这里，也可以写到上面，只是不同的写法而已.
  components: { App }
})




// 7-5 
// 图标库的使用 