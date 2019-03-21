// 发布 emit 订阅 on  自己写一个 {}
function Girl() {
    this._events = {}
}
Girl.prototype.on = function (eventName,callback) {

    if(this._events[eventName]){ // 不是第一次
        this._events[eventName].push(callback); // {失恋:[cry,eat,shopping]}
    }else{
        //给对象加属性
        this._events[eventName] = [callback] //{失恋:[cry]}
    }
};                                        //参数不固定，剩余运算符：剩下的参数做为array放进去
Girl.prototype.emit = function (eventName,...args) { //[我，你，他]
    // [].slice.call(arguments,1);
    // Array.from(arguments).slice(1);
    //变量用[]
    if(this._events[eventName]){            //展开运算符
        this._events[eventName].forEach(cb=>cb(...args));
    }
};
let girl = new Girl();
let girl1 = new Girl();
let cry = (who) =>{console.log(who+'哭');};
let shopping = (who) =>{console.log(who+'购物');};
let eat = (who) =>{console.log(who+'吃');};
girl.on('失恋',cry); // {失恋:[cry]}
girl.on('失恋',eat); // {失恋:[cry,eat]}
girl.on('失恋',shopping); // {失恋:[cry,eat,shopping]}
girl1.emit('失恋');


//???看不懂，原型链
// 发布 emit 订阅 on  自己写一个

