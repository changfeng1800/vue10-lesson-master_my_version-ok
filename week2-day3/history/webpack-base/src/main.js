
console.log('testMain')

let str = require('./a.js');    ////commonJS写法

import xxx from './b.js';   //ES6语法
console.log(str);
console.log(xxx);

let a = b => c=> d=> b+c+d; ////es6解析试试
let obj ={school:'zfpx'};
let obj1 = {age:8};     //这里的age,不能和上面重名，不能写school

let newObj = {...obj,...obj1}; // es7语法
console.log(newObj);

import './index.css'; //js里面引入css，也不能起名，引入就好了
import './style.less';  //引入less

// 在js中引入图片需要import,或者写一个线上路径
import page from './2.jpg';
console.log(page); // page就是打包后图片的路径
let img = new Image();
img.src = page; // 写了一个字符串 webpack不会进行查找
document.body.appendChild(img);






