

a=103.3234;
console.log(a.toFixed(2));

'console.log(a.toFixed(2)); //103.32'
// but this returns a string we need to convert it to number 
// to convert it into number then we have to use 


// 

a=103.3234;
console.log(a.toFixed(2)); //103.32

console.log(+a.toFixed(2)); 

console.log(typeof a.toFixed(2));   // string
console.log(typeof +a.toFixed(2));   // number



// Ternary operator 
'works with 3 different parameters '


a=103
var b=a>100 ? "value is greater than 100": "value is lesser than 100"
console.log(b)


// program to find the greatest of three numbers

a=103;
b=763;
c=282;
console.log((a>b && a>c) ? "a is large" : (b>c) ? "b is large": "c is large")





//  we cant access the variable outside of the loop  that declared with let keyword

if (true){
    let a=10;
    console.log(a);
}
console.log(a);

/*
10
/tmp/eJb6kF0jC2.js:9
console.log(a);
            ^

ReferenceError: a is not defined
    at Object.<anonymous> (/tmp/eJb6kF0jC2.js:9:13)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
*/

'but with var it is possible '







