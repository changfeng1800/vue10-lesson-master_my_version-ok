function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买')
            }else{
                reject('不买')
            }
        },Math.random()*1000);
    });
}
buyPack().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data);
});

//怎样测试 复制到浏览器控制台