// var [a,b,c] = ['aa','bb','cc'];
// console.log(a,b,c); //aa bb cc

// var [a,b,c] = [{name:'小明'},'bb','cc'];
// console.log(a,b,c); //{name:'小明'},bb,cc

// let [a,b,c] = ['aa','bb'];
// console.log(a,b,c); //aa bb undefined；

// let [a,b,c] = ['aa','bb',null];
// console.log(a,b,c); //aa bb null；

// let [a,b,c] = ['aa','bb',undefined];
// let [a,b,c] = ['aa','bb',undefined];  
// console.log(a,b,c); //报错，let 不允许重复声明

// let [a,b,...c] = ['aa','bb',1,2,3];
// console.log(a,b,c); //aa bb [1,2,3];

// let [a,b,c] = 'dfffgggg';
// console.log(a,b,c); //d f g

let [a,b,...c] = 'dfffgggg';
console.log(a,b,c); //d f [ 'f', 'f', 'g', 'g', 'g', 'g' ]