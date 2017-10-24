//创建新数组

var arr = Array.of(2,5,3,6,4);  //这个方法可以直接在数组里添加数据；
// console.log(arr);

// arr.forEach(function (value,key){
//     console.log(value,key);  // 元素 下标；
// })

// var k = arr.find(function (val, key){
//     // console.log(val,key);

//     return val>3;
// })

// console.log(k);   //返回元素

var k = arr.findIndex(function (val, key){
    // console.log(val,key);

    return val>3;
})

console.log(k);  //返回下标




