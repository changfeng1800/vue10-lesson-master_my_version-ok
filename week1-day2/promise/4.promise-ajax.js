function ajax({url='',type='get',dataType='json'}) {    //ES6写法，数据解析，形参解析   
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function () { // xhr.readState=4 xhr.status = 200
            console.log('xhr.status',xhr.status)
            if(xhr.status === 0){     ///这里xhr.status===0 才可以，原来的200不行
                resolve(xhr.response); //成功调用成功的方法
            }else{
                reject('not found');
            }
        };
        xhr.onerror = function (err) {
            reject(err);//失败调用失败的方法
        };
        xhr.send();
    })
}

//看不懂
////怎样测试?  ajax({url:'adfadfa'}).then(data=>{console.log(data)},data=>{console.log(data)}) //=> not found
