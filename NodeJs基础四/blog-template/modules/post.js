let db = require('./db');

exports.insert = function (data,cb){
    let sql = 'insert into posts set ?';

    db.query(sql,data,function (err){
        if(err){
            return cb(err);
        }
        cb(null);
    })
}