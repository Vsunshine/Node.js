// 函数解构赋值

fuzhi = (age,name,...k) =>{
    console.log(age); //15
    console.log(name);//ming
    console.log(k);  //输出为【’nan‘, 99】
}

fuzhi(15,'ming','nan',99);