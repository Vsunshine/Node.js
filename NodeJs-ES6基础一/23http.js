//获取http模块
let http = require('http');
let url = require('url');
//创建一个服务，
let server = http.createServer();
//监听端口
server.listen(3000);

// 通过request来处理浏览器发来的请求；
// req:Request的缩写； 这个参数是处理请求相关的数据
// res:response的缩写； 这个参数是处理响应相关的数据
server.on('request', (req, res) => {
    console.log('有人访问了！！！！'); //每次服务器被访问两次，是因为浏览器小图标有一次
    // console.log(req);   //请求信息
    // console.log(req.headers);    //请求头
    // console.log(req.url);  //请求参数
    console.log(url.parse(req.url, true));  //url.parse()解析url字符串 并返回一个url对象
    
    //响应内容
    // 设置响应类型及编码
    res.writeHead('200',{
         'Content-Type': 'text/html; charset=UTF-8'
    })
    res.write('hello Node.js响应成功');

    // 关闭响应
    res.end();
})