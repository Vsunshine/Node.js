//path获取路径相关信息
//文件名，目录，后缀等；

let path = require('path');

let img = '../../../01HTML/0713HTML第一天/image/1.jpg';

// console.log(path.parse(img));  //获取文件目录相关信息；

// let {dir,ext,name} = path.parse(img);
// console.log(dir,ext,name);  //输出路径，后缀，文件名


//dirname 获得目录名称
// let dirname = path.dirname(img);
// console.log(dirname);

//extname 获得文件后缀
// let extname = path.extname(img);
// console.log(extname);

//join 处理多个路径
// let join = path.join('./a','./b','./c');
// console.log(join); // a/b/c

// let join = path.join('./a', './b', './c', '../d');
// console.log(join); // a/b/d

let a = './a/dd'

let b = 'aa/vv/c';  

console.log(path.join(a,b));  // 会自动补全斜杠；



