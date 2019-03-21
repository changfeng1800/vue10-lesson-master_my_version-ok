


// 如果是第三方模块不须要加./ 如果是文件模块需要加./
// 在另一个文件中将内容解构出来即可使用
// import拥有声明功能,可以变量提升 console.log(str)
// import放到页面的顶部(开发时最后，虽然es上有写可以提升)

// import {str,str2,a} from './a.js';  ////这是完整的写法，有点小麻烦，用下面的写法
import * as b from './a.js'     //不想这样麻烦就用默认导出
console.log('a.js',b.str,b.str2);
b.a();


// xxx代表的是default后的结果
import xxx from './b.js';   ////导出一个文件有这种写法很好
console.log('b.js',xxx);   //xxx 代表default后面的东西





