
<!--template里面只能有一个根元素-->
<template>
  <div>
    {{msg}}
    <!--<router-view></router-view>-->
    <!-- 一点就弹个框，一个组件 -->
    <button @click="show">notify</button>   
  </div>
</template>
<script>
  export default {  //导出一个对象
      methods:{
        show(){
          this.$notify('我很丑',{delay:1000});  ////???
        }
      },
      data(){
          return {msg:'hello'}
      }
  }
</script>
<style>
</style>