


let a= true
console.log(a.toUpperCase())
console.log("reddy")

/*
workspace/Main.js:4
console.log(a.toUpperCase())
              ^

TypeError: a.toUpperCase is not a function
    at Object.<anonymous> (/workspace/Main.js:4:15)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

*/

'when ever we encounter an error the statements after the error are not executed'






let pi=3.14152
console.log(pi.toFixed(101))


/*
console.log(pi.toFixed(101))
               ^

RangeError: toFixed() digits argument must be between 0 and 100

*/


let value pi=3.14152
console.log(pi)

/*
let value pi=3.14152
          ^^

SyntaxError: Unexpected identifier
*/


console.log(pi)


/*
console.log(pi)
            ^

ReferenceError: pi is not defined
*/



'===================================================================='


'throw/new Throw'



function div(a,b){
    if (b==0){
        throw "a number cant be divided by zero"
    }
    return a/b
}
console.log(div(4/0))   // NaN

'----------------------'


function div(a,b){
    if (b==0){
        throw new Error("a number cant be divided by zero") 
    }
    return a/b
}
console.log(div(4/0))   // NaN


'====================================================================='


// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
/*
NaN
An error caught
Error message: ReferenceError: a is not defined
*/


'==========================================================='

try {
    console.log(a);

}
catch(error) {
   console.log(error); 
   console.log(error.message);   // a is not defined
   console.log(error.name) //ReferenceError
}

'this is the error '
/*

ReferenceError: a is not defined
    at Object.<anonymous> (/workspace/Main.js:5:18)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

'========================================================================='


