let express = require('express');
let app = express();
app.listen(3000);

app.set('views', './views');
app.set('view engine', 'xtpl');

app.use(express.static('./public'));

//express中，有个中间件的概念；
// 所谓中间件就是指在请求或响应的中间阶段
// 对请求和响应做出处理的一系列逻辑

// express中。用use来实现这一概念
// use有两个参数，第一个是路由，第二个是回掉函数，处理逻辑
// 第一个参数不写，是所有的路由都会执行这个；
app.use((req, res, next) => {
    req.name = 'hyw';
    req.age = 18;
    res.sex = '男';
    res.shen = '178cm';
    // 必须写next(),请求或响应才能往下继续执行，传递给下一个中间件
    next();
})
app.use('/',(res,req,next)=>{
    req.ceshi = '测试';
    next();
})
app.get('/', (req, res) => {
    console.log(req.name);
    console.log(req.age);
    console.log(res.sex);
    console.log(res.shen);
    console.log(res.ceshi);
    res.render('index', {});
})