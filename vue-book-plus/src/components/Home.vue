////ok

<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks" :key="hot.bookId">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
   //1.引入组件 2.注册组件 3.使用组件
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getAll} from '../api';
    import Loading from '../base/Loading.vue'
    export default {
        created(){
          this.getData(); ////页面加载，要数据
        },
        data(){
            return {sliders: [],hotBooks:[],loading:true}
        },
        methods: {
          async getData(){
            let [sliders,hotBooks] = await getAll();// [sliders,books]    ////async await搭配使用，像使用同步一样使用异步。
            this.sliders = sliders;
            this.hotBooks = hotBooks;
            // .... 轮播图和热门图书已经获取完成 ////loading消失
            this.loading = false;
          }
        },
        computed: {},
        components: {
          MHeader,Swiper,Loading
        }
    }
</script>
<style scoped lang="less">
 h3{color: #999;padding: 5px 0}
.container{
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap; /*默认不换行*/
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img{width: 100%}
    }
  }
}
</style>
