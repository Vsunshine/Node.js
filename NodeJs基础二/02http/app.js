let http = require('http');
let server = http.createServer();

server.listen(3000,(err)=>{
    if(!err){
        console.log('已监听');
    }
})

server.on('request',(req,res)=>{

    // 设置响应头
    res.writeHead(200, {
        'Content-Type':'text/html; charset=UTF-8'
    })
    res.write('app.js已响应ssss');



    res.end();
})