// 任务17.mp4：2-5.promise-ajax

// resolve代表的是转向成功态
// reject代表的是转向失败态   resolve和reject均是函数
// promise的实例就一个then方法,then方法中有两个参数

let p = new Promise((resolve,reject)=>{
    setTimeout(function () {
        let a = '蘑菇';
        reject(a);  //reject是参数
    },2000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});


//怎样测试 复制到浏览器控制台