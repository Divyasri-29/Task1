// x=parseInt(window.prompt("Enter num1"));
// y=parseInt(window.prompt("Enter num2"));
// if(x > y){
//     console.log(x);
//     document.write(x);
// }
// else{
//     console.log(y);
//     document.write(y);
// }

// var x=10;
// var x=20; // var can be redeclare
// document.write(x);

// let x=10;
// let x=20; // let cannot be redeclare
// document.write(x);

// const x=10; // initialization and assigning the value should be at one time
// document.write(x);

// var a=[10,20,30,40];
// a.push(50)
// console.log(a);
// a.pop()
// console.log(a);
// a.shift()
// console.log(a);
// a.unshift()
// console.log(a);
// a.splice(2,0,20,1,2,3,4);
// console.log(a);
// a.splice(2,1,20,1,2,3,4);
// console.log(a);
// console.log(a.slice(2,4));

// var a=[1,2,3,4,5,6,7,8,9,10]
// a.map(ele=>{
//     console.log(ele);
// })


// prime number
// var n=parseInt(window.prompt("Enter a number"));
// var c=0;
// for(i=1;i<=100;i++){
//     if(n%i==0){
//         c+=1;
//     }
// }
// if(c==2){
//     console.log("It is a prime number");
// }
// else{
//     console.log("Not a prime number");
// }

// prime numbers within a given range
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// var x=new Date();
// console.log(x.getDate());
// console.log(x.getDay());
// console.log(x.getMonth());
// console.log(x.getFullYear());
// console.log(x.getMilliseconds());
// console.log(x.getSeconds());
// document.write(x.getDate() + "-" + (x.getMonth()+1) +"-" + x.getFullYear());

// console.log(Math.sqrt(25))
// console.log(Math.pow(2,5))
// console.log(Math.sign(-25))
// console.log(Math.sign(25))
// console.log(Math.max(2,5,6,4,2))
// console.log(Math.min(2,1,2,1,-1))

// console.log(Math.round(4.3))   //nearest integer
// console.log(Math.ceil(3.2))    //highest near integer
// console.log(Math.floor(4.6))   //lowest near integer
// console.log(Math.trunc(11.2))  //removes all the decimal values and return only integer
// console.log(Math.random() * 51);

// function karna(a,b){
//     console.log(a+b);
// }
// karna(2,4)

// function karna(a,b){
//     return a+b;
// }
// console.log(karna(2,4));

// function karna(a=20, b, c){
//     console.log(a+b);
// }
// karna(2,4)

// x=10+1
// console.log(x)
// var x;

// x=10+1
// console.log(x)
// let x;

// var x = {
//     name: "divya",
//     getname : function(){
//         console.log(x.name) // or
//         console.log(this.name)
//     }
// }
// x.getname()

// error handling
// try{
//     {
//         let x=0;
//         // var x=0;
//     }
//     console.log(x);
// }
// catch(err){
//     // console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }
// finally{
//     console.log("This will execute irresepctive of error");
// }

// try{
//     {
//         let name=window.prompt("Enter name");
//         if(name ==="sravya"){
//             // throw "Sravya Error";
//             throw "naaku burra ledhu ouchhh ouchh..!!!";
//         }

//         // er ={
//         //     name: "sravya",
//         //     message: "naaku burra ledhu ouchhh ouchh..!!!"
//         // }
//         // console.log(er);
//     }
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("This will execute irresepctive of error");
// }

// area of traingle using herons formula
// var a=parseInt(window.prompt("Enter 'a' value:"));
// var b=parseInt(window.prompt("Enter 'b' value:"));
// var c=parseInt(window.prompt("Enter 'c' value:"));
// var s=(a+b+c)/2;
// var herons = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(herons);

// squares of a equation
try{
    var a=parseInt(window.prompt("Enter 'a' value:"));
    var b=parseInt(window.prompt("Enter 'b' value:"));
    var c=parseInt(window.prompt("Enter 'c' value:"));
    var det=(b*b)-4*a*c;
    var deter=Math.sqrt(det);
    if(det < 0){
        throw "Roots are imaginary";
    }
    else{
        var for1=(-b+deter)/(2*a);
        var for2=(-b-deter)/(2*a);
        console.log(for1);
        console.log(for2);
    }
}
catch(err){
    console.log(err);
}
