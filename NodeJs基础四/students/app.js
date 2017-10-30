let express = require('express');
let app = express();
//设置模板目录；
app.set('views','./views');
//使用模板引擎
//express 会自动导入模板
//第二个参数为文件后缀
app.set('view engine','xtpl');
//设置静态资源的请求
app.use(express.static('public'));

app.listen(3000,(err)=>{
    if (!err) {
        console.log('服务启动');
    }
})

app.get('/',(req,res)=>{
    // res.send('hello,get')
    // 读入文件内容，并返回给浏览器
    res.render('add',{});
})

app.post('/',(req,res)=>{
    res.send('hello,post')
})