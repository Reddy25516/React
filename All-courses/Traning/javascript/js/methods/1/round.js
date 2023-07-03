
/*

ceil 
round 
trunc
floor
sign
toFixed 
toPrecision 

*/
Math.round()
"Math.round(x) returns the nearest integer:"

console.log(Math.round(4.6))     //5
console.log(Math.round(4.5))    ///5
console.log(Math.round(4.4))   //4
console.log(Math.round(-4.4))   //-4




Math.ceil()
"Math.ceil(x) returns the value of x rounded up to its nearest integer:"


console.log(Math.ceil(4.6))     //5
console.log(Math.ceil(4.5))    ///5
console.log(Math.ceil(4.4))   //5
console.log(Math.ceil(-4.4))   //-4



Math.floor()
"Math.floor(x) returns the value of x rounded down to its nearest integer:"

console.log(Math.floor(4.6))     //4
console.log(Math.floor(4.5))    ///4
console.log(Math.floor(4.4))   //4
console.log(Math.floor(-4.4))   //-5




Math.trunc()
"Math.trunc(x) returns the integer part of x:"

console.log(Math.trunc(4.6))     //4
console.log(Math.trunc(4.5))    ///4
console.log(Math.trunc(4.4))   //4
console.log(Math.trunc(-4.4))   //-4



Math.sign()
"Math.sign(x) returns if x is negative, null or positive:"


console.log(Math.sign(4.6))     //1 

console.log(Math.sign(0))   //0
console.log(Math.sign(-4.4))   //-1



//************************************************************** */



num=27.322
console.log(num.toFixed(2))// 27.32 
console.log(parseFloat(num)); // 27.322
console.log(parseFloat(num).toFixed(2));  // 27.32 


num=0.004;
console.log(num.toFixed(2))  // 0.00 


num=0.004
console.log(num.toPrecision(3));  /// 0.00400


num=74
console.log(num.toPrecision(3));  // 74.0

num1=8377
console.log(num1.toPrecision(3));  // 8.38e+3


num2=8378.23372
console.log(num2.toPrecision(3));  // 8.38e+3
console.log(num2)

if(num1.toPrecision(3)==num2.toPrecision(3)){
  console.log("both are equal");   // both are equal
}


//********************************************************************* */

