////ok  getter独立出来使用

let getters = {
  totalPrice:(state)=>state.cartList.reduce((prev,next)=>prev+next.count*next.bookPrice,0), ////这是箭头函数写法
  list:(state)=>state.cartList
}

export default getters
