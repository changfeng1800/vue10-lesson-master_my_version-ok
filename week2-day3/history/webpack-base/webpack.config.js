
//这里面放的是规则

// webpack必须采用commonjs写法
let path = require('path'); // 专门处理路径用的,以当前路径解析出一个绝对路径
console.log(path.resolve('./dist'));

let HtmlWebpackPlugin = require('html-webpack-plugin');     ////设置自动生成html用到
module.exports = {
    entry:'./src/main.js', // 打包的入口文件，webpack会自动查找相关的依赖进行打包,全都打包成一个js文件
    output:{
        filename:'build.js',// 打包后的名字
        path:path.resolve('./dist') //必须是一个绝对路径 ////所以用path
    },
    // 模块的解析规则
    // - js 匹配所有的js 用babel-loader转译 排除掉node_modules
    module:{
        rules:[ //规则有n个，所以是数组
        //规则1:  解析js结尾 用babel-loader  排除node_modules   ////因为node_modules里面的js文件不能动
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            // use时从右往左写
        //规则2  解析.css 
            {test:/\.css$/,use:['style-loader','css-loader']},  ////注意顺序从右到左
        //规则3  解析.less   用后面这些包
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 转化base64只在8192字节以下转化。其他情况下输出图片（转化成base64就会放到.js文件里面，其它不转，是图片）
        //规则4       解析.图片       用后面这些包       
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
        ]
    },
    //自动生成 html (webstorm设置自动保存，没保存有*，提示，设置)
    plugins:[
        new HtmlWebpackPlugin({ // 自动插入到dist目录中(我们希望最终上线再产生dist,一直读写硬盘，太费资源)
            template:'./src/index.html', // 使用的模板
           // filename:'login.html' // 产出的文件名字,默认是index.html，改了跑起来还不行，要在地址栏手动加上login.html
        })
    ]
};


