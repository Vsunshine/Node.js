// os 封装了读取系统信息的模块



let os = require('os');
// console.log(os);
// console.log(os.hostname());  //操作系统的主机名
// console.log(os.cpus()); //cpu信息
console.log(os.userInfo()); // 我的文档信息
