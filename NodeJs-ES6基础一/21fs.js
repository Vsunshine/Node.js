// fs对文件或者文件目录进行操作

let fs = require('fs');

// fs.mkdir('test',(abc)=>{
//     //如果有错误，abc为对象，显示错误信息；
//     //没有错误，为null；
//     console.log(abc);
// });     //创建目录

//创建文件
fs.writeFile('./test/hello.html','<h1>hello</h1>',(err)=>{
    if(!err){
        console.log('创建成功');
    }
})