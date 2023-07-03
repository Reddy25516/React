




let a=19; b=89,c=78;
let max; 
if (a>b && a>c){
  max=a
  console.log("the biggest value is",a)
}
else if ( b>c){
  max=b 
  console.log("the biggest value is",b)
}
else{
  max=c
  console.log("the biggest value is",c)
}
console.log(max)

'===================================================================='

let a=19; b=89;
let c;
c= a>b ? a:b 
console.log(c)

// this is the way of using ternary opearator 





'this is the code to find the biggest of three numbers using ternary operator'
let a=19; b=89,c=78;
let max; 
 
max = a>b && a>c ? a : b>c ? b:c 
console.log("the biggest number is"+max)
/*
when we use + for printing we dont get a space in output
but when we use , operator then we get a space in output
*/


'============================================================================='



let a=15 
if (a%3==0 && a%5==0){
  console.log("FizzzBuzz");
}
else if(a%5==0){
  console.log("buzz")
}
else if(a%3==0){
  console.log("fizzz")
}
else{
  console.log("nothing")
}


'using ternary operator'


let a=10;
res= (a%3==0 &&a%5==0) ? "fizzbuzz": a%3==0 ? "fizz" : a%5==0 ? "buzz": "nothing"
console.log(res)