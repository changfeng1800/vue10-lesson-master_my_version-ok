////ok

<template>
  <div>
    <MHeader>收藏</MHeader>
    <ul class="content">
      <!-- ////:key='l.bookId'是我加的 -->
      <li v-for="l in list" :key='l.bookId'>
        <img :src="l.bookCover" alt="">
        <div class="box">
          {{l.bookName}}
          <p>
            <button @click="add(l.bookId,-1)">-</button>
            {{l.count}}
            <button @click="add(l.bookId,1)">+</button>
          </p>
          <p>
            单价{{l.bookPrice}}
            小计{{(l.count*l.bookPrice).toFixed(2)}}
          </p>
          <button @click="remove(l.bookId)">删除</button>
        </div>
      </li>
      <li>
        <span>总价{{totalPrice}}</span> <button @click="clear">清空购物车</button>

      </li>
    </ul>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import {mapState,mapMutations,mapGetters} from 'vuex';
  import * as Types from '../vuex/mutation-types'   ////mutation用宏的写法，目的是为了写的时候有提示，这至于写错
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {
          ...mapMutations([Types.CHANGE_COUNT,Types.REMOVE_CART,Types.CLEAR_CART]),   ////放的是mutation的名字，mutation就可以轻松使用了

          ////改变数量 mutation
          add(id,count){
            this[Types.CHANGE_COUNT]({id,count}); ////mutation没有异步
          },

          ////删一个购物车 mutation
          remove(id){
            this[Types.REMOVE_CART](id);
          },

          ////清空购物车 mutation
          clear(){
              this[Types.CLEAR_CART]()
          }
        },
        computed: {
          ...mapGetters(['totalPrice','list']), ////数据里面放的是getter的名字，然后就可以轻松使用了
        },
        components: {MHeader}
    }
</script>
<style scoped>
  img{width: 120px;}
  li {border-bottom: 1px solid #ccc;display: flex;height: 140px;}
  .box{font-size: 15px;font-weight: bold;padding: 10px}
  li:last-child{
    height: 30px;
    justify-content: space-around;
    line-height: 30px;
    border-bottom: none;
  }
</style>
