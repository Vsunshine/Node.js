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
exports.findAll = function (cb) {
    let sql = 'select * from posts';

    db.query(sql, (err, rows) => {
        if (err) {
            return cb(err);
        }

        cb(null,rows);
    })
}

//删除
exports.delete = function (data,cb){
    let sql = 'delete from posts where id=?';

    db.query(sql,data,(err)=>{
        if(err){
            return cb(err);
        }
        cb(null);
    })
}

//编辑1
exports.xiugai = function (data,cb){
    let sql = 'select * from posts where id=?'

    db.query(sql,data,(err,rows)=>{
        if(err){
            return cb(err);
        }
        cb(null,rows);
    })
}
