// functions in js
// functions are used to call based on situations
// this helps in code resuability

'this is how we write a function'

function greet(){
    console.log("hello world")
}

greet()  // this is the way to call a function

// hello world
greet()
greet()  
'here it prints 3 times'

'==========================================================='


'here we will be learning how to pass a value to a function'
'and how it return a value '


function greet(){
    return 'hello world'
}
a=greet()
console.log(a)

// this is how we return a value
'we cant have multiple returns  in a function those it has it breaks at'
'first return it encounter'


'-----------------'

' this is the way to pass a value to a function '

function greet(name){
    a='hi'+ ' '+ name
    return a
}
a=greet('reddy')
console.log(a)


// hello reddy

'even this also same '
function greet(name){
    
    return `hello ${name}`
}
a=greet('reddy')
console.log(a)

'we can even pass multiple values'

'-----------------------------------------------------'

// function expression in JavaScript

'what is an expression'
'a=7+8-9 . This is a expression'
'function is an object type'


let a= add(a,b)

'here the function is first evaluated and then  assigned to a '

'------------------------'

let a= add(a,b){
    return a+b;
}
let result=a(3+8)
console.log(result)

'here we make sure that name of the fun should always be function itself'

/*
'let a= add(a,b){
    ^

SyntaxError: Unexpected token '{'
at Object.compileFunction (node:vm:352:18)*/

'-------------------------'
'this is an anonymous function bcoz it doesnt had a name'
/* this function is assigned to a varialbe called a

here a is a variable
*/

'this is the way to write '
let a= function(a,b){
    return a+b;
}
let result= a(3,8);

console.log(result); // 11


'---------------------------------'

'if we provide only one parameter then it prints NaN'
let a= function(a,b){
    return a+b;
}
let result= a(3);

console.log(result);  // NaN

'so when displays it may be the function paramters count mismatch '

'-----------------------------------------'


let a= function(a,b){
    return a+b;
}
let sum=a;

console.log(sum); // [Function: a]
'here sum is a function called a'


'----------------------------------------'

let a= function(a,b){
    return a+b;
}
let sum=a;
let b=9

console.log(sum); 
'here b variable inside the function is a local varialbe'
'b variable outside the function is a global variable'

'--------------------------------------------'

val=8
function fun(a){
    console.log(val)    
}
fun(6)

'here the global variable can be accessed inside the function'


// this also works
function fun(a){
    console.log(val)    
}
val=9
fun(6)

'===================================================='

val=8
function fun(a){
    console.log(val)    
}
val=9
fun(6)

'here it prints 9'

'===================================================='

function fun(a){
    console.log(val)    
}

fun(6)
val=0
'here value is called after the function so it throws an error'
/*
console.log(val)    
                ^

ReferenceError: val is not defined
*/

'we cant access local variable outside the function it throws an error'
'it shows referenceError: num is not defined'

'==============================='

'this is the way to assign a default value'

let a= function(a,b=1){
    return a+b;
}
let result= a(3);
console.log(result)  //4
'here b takes a default value when we didnt assign one '


'---------------------------------------'

// arrow function 

'this is the way to assign a default value'

let a= function(user){
    console.log('hello'+user)
}
let result= a('reddy');  // here we should make sure that we declare 
                        // as a string not a varible
console.log(result)  

/* output is:
helloreddy
undefine
*/

console.log(a('reddy'))
'even these at end gives  output as '
'helloreddy'
'undefined'

'================='

// this is how arrow function write
let greet = (user)=>{
    console.log('hello'+user)
}
console.log(greet('reddy'))

'output is same as above'



'here we converted anonymous function into arrow function '
let add = (a,b) => a+b
console.log(add(7,8))  // 17


'===================================================='


'===================================================='


'===================================================='











