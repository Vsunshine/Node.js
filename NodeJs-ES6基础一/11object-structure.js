// let {name:name} = {name:'hyw'};
// console.log(name);// hyw

// let {age:abc} = {name:'hyw',age:16};
// console.log(abc);// abc 找的是 age对应的属性值；

// let {age:abc,name:name} = {name:'hyw',age:16};
// console.log(abc,name);// 


// let {age:abc,name:name} = {name:'hyw'};
// console.log(abc,name);// undefined hyw;

let {age:abc,name:name,child:aaa} = {name:'hyw',age:17,child:{name:'huang',age:44}};
console.log(abc,name,aaa);// undefined hyw;


