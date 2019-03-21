////ok 其实就是mutation文件导出来单独使用

import * as Types from './mutation-types';

let mutations = {

  ////加入购物车
  [Types.ADD_CART](state,book){ ////这就是一个mutation方法，[Types.ADD_CART]就是mutation的名字，就是一个字符串
    let car= state.cartList.find(item=>item.bookId ==book.bookId);
    if(car){
      car.count++;
    }else{
      book.count = 1;
      state.cartList.push(book);
    }
  },

  ////更改数量
  [Types.CHANGE_COUNT](state,{id,count}){
    let cartList = [...state.cartList]  ////还可以这样复制????浅克隆，深克隆
    let car= cartList.find(item=>item.bookId ==id);
    if(car.count+count>0){
      car.count += count;
      state.cartList = cartList;
    }
  },

  ////购物车删一个
  [Types.REMOVE_CART](state,id){
    state.cartList = state.cartList.filter(item=>item.bookId!=id);
  },

  ////清空购物车
  [Types.CLEAR_CART](state,id){
    state.cartList = []
  },
};
export default mutations;
