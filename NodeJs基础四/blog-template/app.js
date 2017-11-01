let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
//设置模板目录
app.set('views', './views');
//express 会自动引入模板 xtpl  ，
//文件后缀必须为xtpl;
app.set('view engine', 'xtpl');
app.listen(3000);
app.use(express.static('./public'));
//获取post请求数据的中间件
app.use(bodyParser.urlencoded({
    extended: false
}));
//使用设置喝获取session的中间件
app.use(session({
    secret: 'fad',
    resave: false,
    saveUninitialized: false
}));

//检查用户是否登录，没有登录的话跳转登陆页；
app.use('/admin', (req, res, next) => {
    if (!req.session.loginfo && req.url != '/login') {
        //重定向  ，
        // return 的作用是   http要求再请求头设置前不允许有响应主体
        return res.redirect('/login');
    }

    next();
})



// 使用 express.Router() 来创建主路由，主路由可以认为是一个中间件

let admin = require('./routes/admin');
let home = require('./routes/home');
//  这里设置中间件；；；
app.use('/admin', admin);
app.use('/', home);