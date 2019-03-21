// webpack必须采用commonjs写法
let path = require('path'); // 专门处理路径用的,以当前路径解析出一个绝对路径 node写法
console.log(path.resolve('./dist'));
module.exports = {
    entry:{
        main:'./src/main.js',
        main1:'./src/main1.js'
    }, // 打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename:'[name].js',// 打包后的名字
        path:path.resolve('./dist') //必须是一个绝对路径
    }
};



//基本上听不懂
// 1 帮我们解决了第1个问题：模块问题
// 2 兼容问题 es6转es5  es7转es5  还有很多问题
