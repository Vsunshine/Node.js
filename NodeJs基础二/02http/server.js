let http = require('http');
let server = http.createServer();
let url = require('url');
let querystring = require('querystring');

server.listen(3000,(err)=>{
    if(!err){
        console.log('已监听');
    }
})

server.on('request',(req,res)=>{
    // console.log('请求地址',req.url);
    // console.log('请求方式',req.method);
    // console.log('请求头',req.headers);

    // 系统模块url可以解析get方式传来的参数
    //加上第二个参数 true 可以将属性query转换成对象，便于获取
    // let par = url.parse(req.url,true);
    // console.log(par.query);

    // 当请求方式为post时，请求的数据都在请求主体中，
    // post请求时，会触发 一个事件 data；
    let formdata = '';
    req.on('data',(chunk)=>{
        formdata += chunk;
    })
    // 数据传输完毕时，会触发另一个事件 end
    req.on('end',()=>{
        // console.log(formdata);  //此时  得到传输过来的数据
        // 用另外一个系统模板querystring 来解析
        let par = querystring.parse(formdata);
        console.log(par);  //此时将参数转换成对象；
    })

    res.write('sss');
    res.end();
})
