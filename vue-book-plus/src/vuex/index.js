////ok
////vuex 文件单独存放


import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';  ////logger,当vuex里面的action执行时，会自动在console里面打印出来，可以看到old数据，和new数据
import mutations from './mutations';  ////所有的mutation单独放
import getters from './getters'     ////getters单独存放
Vue.use(Vuex);

let state = { ////state在这里
  cartList:[]
};
export default new Vuex.Store({
  strict:true,  ////开启严格模式,在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  modules:{
    a:{
      state,
      mutations,
      getters,
    }
  },
  plugins: [createLogger()] ////如果正在使用 vue-devtools，你可能不需要此插件
})
