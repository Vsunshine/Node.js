let db = require('./db');

//插入
exports.insert = function (data, cb) {
    let sql = 'insert into posts set ?';

    db.query(sql, data, function (err) {
        if (err) {
            return cb(err);
        }
        cb(null);
    })
}
//查询
exports.findAll = (...agrs) => {
    let sql, cb, dqy, myts, tiao;
    //判断数组长度及类型，看参数是否是回掉函数
    if (agrs.length === 1 && typeof agrs[0] == 'function') {
        sql = 'select * from posts left join users on posts.uid=users.id';
        cb = agrs[0];
    } else {
        //当前页码
        dqy = agrs[1];  
        //每页条数
        myts = agrs[0];
        //回调函数
        cb = agrs[2];
        //计算查询条数
        tiao = (dqy-1)*myts
        sql = 'select * from posts left join users on posts.uid=users.id limit ?, ?';
    }
    db.query(sql, [tiao, myts],(err, row) => {
        if (err) {
            return cb(err);
        }
        cb(null, row);
    })
}

//博客总条数
exports.cunt = (cb)=>{
    let sql = 'select count(*) as total from posts';
    db.query(sql,(err,row)=>{
        if(err){
            return cb(err);
        }
        cb(null,row);
    })
}

//删除
exports.delete = function (data, cb) {
    let sql = 'delete from posts where id=?';

    db.query(sql, data, (err) => {
        if (err) {
            return cb(err);
        }
        cb(null);
    })
}

//编辑1
exports.xiugai = function (data, cb) {
    let sql = 'select * from posts left join users on posts.uid = users.id where posts.id=?'

   let aa = db.query(sql, data, (err, rows) => {
        if (err) {
            return cb(err);
        }
        cb(null, rows);
    })

    console.log(aa.sql);
}