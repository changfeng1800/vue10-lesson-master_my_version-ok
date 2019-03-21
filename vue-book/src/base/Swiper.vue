<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'], // this.swiperSlides
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
        },
      }
    }
  }

//7-6 .mp4 轮播图组件
//有人给包装成了一个组件 vue-awesome-swiper 讲了一下
//什么叫组件，复用的才叫组件，只用一次的不算
// 安装完swiper组件，webpack dev server找不到了，没别的办法，重新安装一次


</script>
<style scoped>
/*全屏*/
  img{width: 100%}
</style>
