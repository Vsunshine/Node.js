// console.log(global); //全局对象，类似与浏览器中的 window；

// let timer = setInterval(()=>{
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
//     i= 9? clearInterval(timer):'';
// },1000)

let timer = setTimeout(()=>{
    for(var i=0; i<10; i++){
        console.log(i);
    }
},1000)