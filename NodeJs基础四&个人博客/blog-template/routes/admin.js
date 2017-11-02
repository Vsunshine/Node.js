let express = require('express');

let post = require('../modules/post');

let user = require('../modules/user');

let md5 = require('md5');

let db = require('../modules/db');
//后台主路由
let admin = express.Router();

admin.get('/', (req, res) => {
    // res.send('这是后台get');
    res.render('./admin/index', {});
})

admin.get('/tu',(req,res)=>{
    res.send({
        avatar:req.session.loginfo.avatar,
        name:req.session.loginfo.name
    });
})

admin.get('/blog_add', (req, res) => {
    // res.send('这是后台get');
    // 设置不同的显示方式
    if (req.query.id) {
        post.xiugai(req.query.id, (err, rows) => {
            if (!err) {
                res.render('./admin/blog_add', {
                    posts: rows[0]
                });
            }
        })
        return;
    }
    res.render('./admin/blog_add', {});
})

admin.get('/blog_list', (req, res) => {
    //查询数据库中的所有列表
    post.findAll((err, rows) => {
        // 查询失败
        if (err) {
            return res.send('数据库查询失败');
        }
        // console.log(rows);
        // 查询成功
        res.render('./admin/blog_list', {
            posts: rows
        });
    })

})

//删除
admin.get('/delete', (req, res) => {
    // console.log(req.query);
    post.delete(req.query.id, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '删除成功'
            })
        }
    })
})

admin.get('/revise', (req, res) => {
    post.xiugai(req.query.id, (err, rows) => {
        if (!err) {
            res.render('./admin/blog_add', {});
            res.json({
                code: 10000,
                msg: '查询成功'
            })
        }
    })
})

admin.get('/repass', (req, res) => {
    // res.send('这是后台get');
    res.render('./admin/repass', {});
})

admin.get('/settings', (req, res) => {
    // res.send('这是后台get');
    // res.render('./admin/settings', {});
    // 查询当前用户所有信息
    var id = req.session.loginfo.id;
    user.find(id, (err, rows) => {
        if (!err) {
            console.log(rows);
            res.render('./admin/settings', {
                user: rows[0]
            })
        }
    })
})

//个人中心修改
admin.post('/update', (req, res) => {
    var id = req.session.loginfo.id;
    user.update(id, req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '更新成功'
            })
        }else{
            res.json({
                msg: '更新失败'
            })
        }
    })
})


admin.post('/blog_add', (req, res) => {
    //先判断文章存在不,判断有没有id
    if (req.body.id) {
        let sql = 'update posts set ? where id=?'
        db.query(sql,[req.body, req.body.id], (err)=>{
            if(!err){
                res.json({
                    code:10000,
                    masg:'修改成功'
                })
            }
        })

    } else {
        console.log(req.body);
        let tim = new Date();
        //添加时间与id；
        delete req.body.id;
        req.body.uid = req.session.loginfo.id;
        req.body.time = tim;
        post.insert(req.body, (err) => {
            if (!err) {
                res.json({
                    code: 10000,
                    mes: '添加成功'
                })
            }
        })
    }


})

//修改密码
admin.post('/mima', (req, res) => {
    var id = req.session.loginfo.id;
    user.find(id, (err, rows) => {
        if (!err) {
            req.body.pass = md5(req.body.pass);
            req.body.newpass = md5(req.body.newpass);
            //判断旧密码是否正确
            if (req.body.pass == rows[0].pass) {
                //更新密码
                let sql = 'update users set pass=? where id=?';
                db.query(sql, [req.body.newpass, id], (err) => {
                    if (!err) {
                        res.send('更新成功');
                    }
                })
            }
        }
    })
})

//退出操作
admin.get('/quit',(req,res)=>{
    req.session.loginfo = '';
    res.send('10000');
})

module.exports = admin;