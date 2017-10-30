let express = require('express');

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


module.exports = admin;
 
