let express = require('express');

let post = require('../modules/post');

//后台主路由
let admin = express.Router();

admin.get('/',(req,res)=>{
    // res.send('这是后台get');
    res.render('./admin/index',{});
})

admin.get('/blog_add',(req,res)=>{
    // res.send('这是后台get');
    res.render('./admin/blog_add',{});
})

admin.get('/blog_list',(req,res)=>{
    // res.send('这是后台get');
    res.render('./admin/blog_list',{});
})

admin.get('/repass',(req,res)=>{
    // res.send('这是后台get');
    res.render('./admin/repass',{});
})

admin.get('/settings',(req,res)=>{
    // res.send('这是后台get');
    res.render('./admin/settings',{});
})

admin.post('/blog_add',(req,res)=>{
    // console.log(req.body);
    let tim = new Date();
    //添加时间与id；
    // req.body.uid = req.session.loginfo.id;
    req.body.time = tim;        
    post.insert(req.body, (err)=>{
        if(!err){
            res.json({
                code:10000,
                mes:'添加成功'
            })
        }
    })
})


module.exports = admin;
 
