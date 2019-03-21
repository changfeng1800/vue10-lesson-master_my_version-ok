//干，这是后端代码


let http = require('http');
let fs = require('fs');
let url = require('url');

// 获取轮播图 /sliders
let sliders = require('./sliders');
function read(cb) { //用来读取数据的  ////公共函数
  fs.readFile('./book.json','utf8',function (err,data) {
    if(err || data.length === 0){
      cb([]); // 如果有错误 或者文件没长度 就是空数组
    }else{
      cb(JSON.parse(data)); // 将读出来的内容转化成对象
    }
  })
}

function write(data,cb) { // 写入内容   ////公共函数
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}

http.createServer((req,res)=>{
    //下面这一片是解决跨域问题,跨域头
    res.setHeader("Access-Control-Allow-Origin", "*");  //8080调3000，跨域了。
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

    let {pathname,query} = url.parse(req.url,true); // true把query转化成对象
    if(pathname === '/sliders'){
      res.setHeader('Content-Type','application/json;charset=utf8');  //图片格式
      return res.end(JSON.stringify(sliders));  //不要少写s,如果刷新，看network，一起pending,一会儿错误，就极有可能是server错误
    }
    if(pathname === '/hot'){
      read(function (books) {
        let hot = books.reverse().slice(0,6);
        res.setHeader('Content-Type','application/json;charset=utf8');
        res.end(JSON.stringify(hot));
      });
      return
    }
    if(pathname === '/book'){ // 对书的增删改查
      let id = parseInt(query.id); //取出的字符串
      switch (req.method){  // ?id=1
        case 'GET':
          if(!isNaN(id)){ // 查询一个
              read(function (books) {
              let book = books.find(item=>item.bookId===id);
              if(!book) book = {}; // 如果没找到则是undefined
              res.setHeader('Content-Type','application/json;charset=utf8');
              res.end(JSON.stringify(book));
            });
          }else{ // 获取所有图书
            read(function (books) {
              res.setHeader('Content-Type','application/json;charset=utf8');
              res.end(JSON.stringify(books.reverse()));
            })
          }
          break;
        case 'POST':
          let str = '';
          req.on('data',chunk=>{
              str+=chunk
          });
          req.on('end', () => {
              let book = JSON.parse(str);
              read(function (books) { // 添加id
                book.bookId = books.length?books[books.length-1].bookId+1:1;
                books.push(book); //将数据放到books中 ，books在内存中
                write(books,function () {
                    res.end(JSON.stringify(book));
                });
              });
          });
          break;
        case 'PUT':
          if(id){// 获取了当前要修改的id
              let str = '';
              req.on('data',chunk=>{
                str+=chunk;
              });
              req.on('end',()=>{
                let book = JSON.parse(str);//book要改成什么样子
                read(function (books) {
                   books = books.map(item=>{
                     if(item.bookId === id){ // 找到id相同的那一本书
                       return book
                     }
                     return item; // 其他书正常返回即可
                   });
                   write(books,function () { // 将数据写回json中
                     res.end(JSON.stringify(book));
                   })
                });
              })
          }
          break;
        case 'DELETE':
          read(function (books) {
            books = books.filter(item=>item.bookId !== id);
            write(books,function () {
              res.end(JSON.stringify({})); // 删除返回空对象
            });
          });
          break
      }
      return
    }
    //listen是监听函数，不能用8080了，已经 被占用了
}).listen(3000);
