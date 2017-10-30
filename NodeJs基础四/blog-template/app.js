let express = require('express');
let app = express();
//设置模板目录
app.set('views','./views');
//express 会自动引入模板 xtpl  ，
//文件后缀必须为xtpl;
app.set('view engine','xtpl');
app.listen(3000);
app.use(express.static('./public'));


// 使用 express.Router() 来创建主路由，主路由可以认为是一个中间件

let admin = require('./routes/admin');
let home = require('./routes/home');
//  这里设置中间件；；；
app.use('/admin',admin);
app.use('/',home);