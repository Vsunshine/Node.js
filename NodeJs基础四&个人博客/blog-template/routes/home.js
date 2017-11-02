let express = require('express');

let user = require('../modules/user');

let post = require('../modules/post');

let home = express.Router();

home.get('/', (req, res) => {
    //每页条数
    let myts = 2
    //当前页
    let dqy = req.query.dqy || 1;
    post.cunt((err,row)=>{
        if(err)  return;
        
        //总条数
        let zts = row[0].total;
        //总页数
        let zys = Math.ceil(zts/myts);
        
        post.findAll(myts, dqy, (err,rows)=>{
            console.log(rows);
            if(!err){
                res.render('./home/index',{
                    posts:rows,
                    zys:zys,
                    dqy:dqy
                })
            }
        })
    })
    
})

home.get('/about', (req, res) => {
    res.render('./home/about', {});
})

home.get('/article', (req, res) => {
    post.xiugai(req.query.id, (err,row)=>{
        console.log(req.query.id);
        if(!err){                         
            res.render('./home/article',{post:row[0]})
        }
    })
    // res.render('./home/article', {});
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
    // console.log(req.body);
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