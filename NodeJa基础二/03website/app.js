let http = require('http');
let server = http.createServer();
let url = require('url');
let fs = require('fs');
let path = require('path');
let mime = require('mime');


server.listen(3000,(err)=>{
    if(!err){
        console.log('已监听');
    }
})

server.on('request', (req, res) => {
    //判断请求的那个地址
    //响应不同的页面
    if (req.url == '/') {
        //设置响应头
        res.writeHeader(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        })
        //将首页index.html的内容响应给浏览器； 
        fs.readFile('./index.html','UTF-8', (err, data) => {
            if (!err) {
                res.write(data);
                res.end();
            }
        })
    } else {
        
        //index.html中的href，图片等都会再次发起请求;
        let pat = path.join('./', req.url);
        console.log(pat);
        // 设置响应头
        //通过第三方模块。可以获取不同资源的 mime
        fs.readFile(pat, (err, data) => {
            if (!err) {
                res.writeHeader(200, {
                    'Content-Type': mime.getType(pat)
                })

                res.write(data);
                res.end();
            }
        })

    }
})