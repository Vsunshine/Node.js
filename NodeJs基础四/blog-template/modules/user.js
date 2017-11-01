let db = require('./db');

//插入数据
exports.insert = (data,cb)=>{
    let sql = 'insert into users set ?';
    // 对密码进行加密
    data.pass = db.md5(data.pass);
    //插入数据
    db.query(sql,data,(err)=>{
        // 如果有错误，处理错误
        if(err){
            return cb(err);
        }
        //没错误，给个null；
        cb(null);
    });
}

//查询数据
exports.auth = (email,pass,cb) => {
    let sql = 'select * from users where email=?';

    db.query(sql,email,(err,rows)=>{
        if (err) {
            return cb(err);
        }
        if(rows[0].pass == db.md5(pass)){
            return cb(null,rows[0]);
        }

        cb({msg:'账号或密码错误'});
    })
}

//查询某个用户信息
exports.find = function (id,cb){
    let sql = 'select * from users where id=?'

    db.query(sql,id,(err,rows)=>{
        if(err){
            return cb(err);
        }
        cb(null,rows);
    })
}

//更新信息
exports.update = function (id,data,cb){
    let sql = 'update users set ? where id=?';
    db.query(sql,[data, id],(err)=>{
        if (err) {
            return cb(err);
        }
        cb(null);
    })
}