let http = require('http');
let app = http.createServer();
let url = require('url');
let fs = require('fs');
let path = require('path');
let template = require('art-template');
let mime = require('mime');
let mysql = require('mysql');
let db = require('./config/db');
let moment = require('moment');

template.defaults.root = './views';
template.defaults.extname = '.html';
template.defaults.rules[1].test = /##([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*##/;

app.listen(3000,(err)=>{
    if (!err) {
        console.log('服务已启动');        
    }
})

app.on('request',(req,res)=>{
    let {pathname, query} = url.parse(req.url, true);
    // 模板
    res.reander = function (tal,data){
        let html = template(tal,data);
        res.writeHeader(200,{
            'Content-Type':'text/html; charset=UTF-8'
        })
        res.end(html);
    }
    switch (pathname) {
        case '/':
        case '/inedx':
            db.query('select * from lists',(err,rs)=>{
                if(!err){
                rs.forEach(function (item,i){
                    // 计算时间差
                    let ago = moment(item.datetime).fromNow();
                    item.ago = ago;
                })
                console.log(rs);
                res.reander('index',{lists:rs});
                }
            })
            
            break;
        case '/create':
            //获取传来的数据,将数据传入数据库
            query.no = Math.floor(Math.random()*10000);
            // 用于变纸条背景色
            query.colo = 'a' + Math.ceil(Math.random()*5);
            query.datetime = new Date();
            db.query('insert into lists set ?', query, (err,rows)=>{
                if(!err){
                    // 将数据再返回给前页，用于展示
                    // moment([2007, 0, 29]).fromNow(); 
                    res.writeHeader(200,{
                        'Content-Type': 'application/json'
                    }) 
                    res.end(JSON.stringify({
                        code: 1000,
                        title:'添加成功',
                        query:query
                    }))
                }
            })
            break;
        default:
            //获取请求的真实地址；
            let realPath  = path.join('./public',pathname);
            //读取文件内容
            fs.readFile(realPath,(err,data)=>{
                if (!err) {
                    res.writeHeader(200,{
                        'Content-Type':mime.getType(realPath)
                    })   
                    res.end(data);     
                }
            })
            // break;
    }
})