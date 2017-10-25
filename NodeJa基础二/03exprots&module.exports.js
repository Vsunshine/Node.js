console.log('ggg');
let  vision = '1.0.0';
let addCart = () =>{
    console.log('田间购物车');
}
let deleteCart = () =>{
    console.log('删除购物车');
}
let xiuCart = () =>{
    console.log('修改购物车');
}
let yiCart = () =>{
    console.log('溢出购物车');
}

// function addCart() {
//     console.log('田间购物车');
// }

// function deleteCart() {
//     console.log('田间购物车');
// }

// function xiuCart() {
//     console.log('田间购物车');
// }

// function yiCart() {
//     console.log('田间购物车');
// }


// module.exports.add = addCart;
// module.exports.dele = deleteCart;
// module.exports.xiuCart = xiuCart;
// module.exports.yiCart = yiCart;
// module.exports.vis = vision;

exports.add = addCart;
exports.dele = deleteCart;
exports.xiuCart = xiuCart;
exports.yiCart = yiCart;
exports.vis = vision;