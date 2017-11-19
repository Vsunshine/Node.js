process.nextTick(function(){
    console.log("nextTick延迟")
});
setImmediate(function(){
    console.log("setImmediate延迟");
});
console.log("正常执行");

// 输出结果

// 正常执行
// nextTick延迟
// setImmediate延迟


// setImmediate(function(){
//     console.log("setImmediate延迟");
// });
// process.nextTick(function(){
//     console.log("nextTick延迟")
// });
// console.log("正常执行");

// 输出结果

// 正常执行
// nextTick延迟
// setImmediate延迟

// nextTick()回掉函数的优先级比setImmediate()高
// process.nextTick()属于idle观察者,setImmediate()属于check观察者.在每一轮循环检查中,
// idle观察者先于I/O观察者,I/O观察者先于check观察者.

//加入2个nextTick()的回调函数
// process.nextTick(function(){
//     console.log("nextTick延迟执行1");
// });
// process.nextTick(function(){
//     console.log("nextTick延迟执行2");
// });
// //加入两个setImmediate()回调函数
// setImmediate(function(){
//     console.log("setImmediate延迟执行1");
//     process.nextTick(function(){
//         console.log("强势插入");
//     });
// });
// setImmediate(function(){
//     console.log("setImmediate延迟执行2");
// });
// console.log("正常执行");

// 正常执行
// nextTick延迟执行1
// nextTick延迟执行2
// setImmediate延迟执行1
// 强势插入
// setImmediate延迟执行2

// 从执行结果上看出:当第一个setImmediate()的回调函数执行完后,
// 并没有立即执行第二个,而是进入了下一轮循环,再次按nextTick()优先,setImmediate()次后的顺序执行.
// 之所以这样设计,是为了保证每次循环能够较快的执行结束.防止CPU占用过多而阻塞后续I/O调用的情况.