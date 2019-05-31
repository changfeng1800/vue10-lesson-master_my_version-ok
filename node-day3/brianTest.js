let fs = require('fs')
let util = require('util')
let read = util.promisify(fs.readFile)
let path = require('path')
let EventEmitter = require('events')
let {inherits} = require('util')


/* var buffer = Buffer.from('hello')
// buffer.fill(0x12)
console.log(buffer.toString())
var buf1 = buffer.slice(0,2)
console.log(buf1.toString())
buf1[0] = 0x21
console.log(buf1)
console.log(buffer) */

/* let sum = null
for(var i=0; i<8; i++){
    sum += 1*Math.pow(2,i)
}
console.log(sum) */


/* var buf1 = Buffer.from('sha')
var buf2 = Buffer.from('xueche')
var buf = Buffer.allocUnsafe(9)

buf1.copy(buf,0)
buf2.copy(buf,3)
console.log(buf.toString())
console.log(Buffer.concat([buf1,buf2]).toString()) */

/* console.log((255).toString(16))
console.log(parseInt('11',16)) */
/* 
var buf = Buffer.from('尚')
console.log(buf) */

/* let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+='abcdefghijklmnopqrstuvwxyz';
str += '0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);
 */



/* let result = fs.readFileSync('1.txt','utf8')
console.log(result) */

/* fs.readFile('./1.txt','utf8',function(err,data){
    if(err) return console.log('err',err)
    fs.readFile(data,'utf8',(err,data)=>{
        if(err) return console.log('err2',err)
        console.log('data2',data)
    })
}) */

/* function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err) return reject(err)
            resolve(data)
        })
    })
} */

/* 
read('1.txt','utf8').then((data)=>{
        return read(data, 'utf8')
    }).then((data)=>{
        console.log('data22', data)
        return data + ' shang'
    }).then(data=>{
        console.log('data33',data)
    }).catch((err)=>{
        console.log('err22',err)
    }) */


    /* async function result(){
        let content1 = await read('1.txt', 'utf8')
        console.log('content1',content1)
        let content2 = await read(content1,'utf8')
        console.log('content2',content2)

    }
    result() */

/* let school ={};
read('1.txt','utf8').then(data=>{
    school.name = data;
    out()
},err=>{

});
read('2.txt','utf8').then(data=>{
    school.age = data;
    out()
},err=>{
    
});

function out(){
    if(school.name && school.age){console.log('out', school)}
} */

/* async function result(){
    let [name,age] = await Promise.all([read('1.txt', 'utf8'), read('2.txt','utf8')])
    console.log(name,age)
}
result() */


/* Promise.race([read('y.txt','utf8'),read('2.txt','utf8')]).then(data=>{console.log(data);},err=>{
    console.log(err)
}); */


/* Promise.resolve('123').then(function (data) {
    return data+456
}).then(function (data) {
    console.log('data', data);
}).catch(err=>{
    console.log('err', err)
}); */

/* fs.writeFile('1.txt', '{name:3, age: 4}', function(err){
    if(err){console.log('err',err)}
}) */


/* function copySync(source,target) { //带sync是同步 readFileSync + writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
copySync('1.txt','2.txt'); */

/* function copy(source,target,callback) { // readFile writeFile
    fs.readFile(source,function (err,data) {
        if(err) return callback(err);
        fs.writeFile(target,data,callback)
    })
}
copy('1.txt','2.txt',function (err) {
   console.log('拷贝成功')
}); */

/* fs.stat('111.txt',function (err,stats) {
    if(err){/!*文件不存在*!/}
    console.log(stats.isFile()); //判断是不是文件
    console.log(stats.isDirectory()); // 判断是不是文件夹
}) */

/* console.log(path.join(__dirname, './a', './b'))
console.log(path.resolve('./a', './b'))
console.log(path.win32.delimiter)
console.log(path.win32.sep); */


/* function Girl() {}
let girl = new Girl();
inherits(Girl,EventEmitter); // {'失恋':[cry,eat]}
let fn = function (param) { // 订阅
    console.log('cry',param)
};
girl.once('lose',fn);
girl.on('lose',function (param) { // 订阅
    console.log('eat',param)
});
girl.removeListener('lose',fn);
girl.emit('lose','me'); // 发布
girl.emit('lose','me'); // 发布 */



/* let rs = fs.createReadStream('1.txt',{highWaterMark:1});
let arr = [];
rs.on('data',function (chunk) {
    arr.push(chunk);
    console.log(chunk)
    rs.pause()
    setTimeout(()=>{
        rs.resume()
    },1000)
})

rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
})

rs.on('err',function (err) {
    console.log('err:', err);
}) */



// 可写流 默认要占用16384 = 16k
/* let ws = fs.createWriteStream('./1.txt',{highWaterMark:2});
// 可写流有两个方法 write end
var flag = ws.write(1+''); // 可写流来些数据必须时字符串类型或者buffer类型
console.log(flag);
var flag = ws.write(1+'');
console.log(flag);
var flag = ws.write(1+'');
console.log(flag);
// ws.end('吃饱了'); // end调用后会把所有的write中的内容以最快速度写入文件
//ws.write(1+''); //write after end 调用end后不能在用write
ws.on('drain',function () { // 当读入的文件 全部写入后 就恢复读取
    console.log('eat end');
}) */

function pipe(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    // 开启可读流
    rs.on('data',function (chunk) {
        if(ws.write(chunk) === false){ // 可写流不能在继续写入了
            rs.pause(); // 暂停读取
        }
    });
    ws.on('drain',function () { console.log('write time');
        rs.resume(); //  当当前读入的内容都写入到了文件中 调用继续读取
    });
    rs.on('end',function () { // 当读取完毕 强制将内存中未写完的内容写入到文件中，关闭文件
       ws.end();
    });
}
pipe('1.txt','2.txt');
// 通过流可以实现分段 但是 不关心文件中的内容，readFile 可以看到文件中的具体内容