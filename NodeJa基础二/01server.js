let http = require('http');
let url = require('url');
let server = http.createServer();
server.listen(3000,()=>{
    console.log('已监听');
})

server.on('request',(req,res)=>{
    console.log('请求方式：',req.method);
    console.log('请求地址：',req.url);
    console.log('请求头：',req.headers);

    res.end();
})