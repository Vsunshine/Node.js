let express = require('express');

let user = require('../modules/user');

let home = express.Router();

home.get('/', (req, res) => {
    // res.send('这是前台的get');
    res.render('./home/index', {});
})

home.get('/about', (req, res) => {
    res.render('./home/about', {});
})

home.get('/article', (req, res) => {
    res.render('./home/article', {});
})

home.get('/center', (req, res) => {
    res.render('./home/center', {});
})

home.get('/join', (req, res) => {
    res.render('./home/join', {});
})

home.get('/login', (req, res) => {
    res.render('./home/login', {});
})

home.get('/register', (req, res) => {
    res.render('./home/register', {});
})

home.post('/register', (req, res) => {
    console.log(req.body);
    //将数据加入数据库
    user.insert(req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                mesg: '添加成功'
            })
        }
    })
})

home.post('/login', (req, res) => {
    user.auth(req.body.email, req.body.pass, (err, row) => {
        //登录成功，设置一个session
        req.session.loginfo = row;
        if (!err) {
            res.json({
                code: 10000,
                mesg: '登录成功',
            })
        }else{
            res.json({
                mesg:'账号或密码错误'
            })
        }
    })
})

module.exports = home;