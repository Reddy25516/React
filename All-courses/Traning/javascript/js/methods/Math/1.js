

random 
abs
cbrt 
ceil 
floor 
round 
sign
sqrt 
trunc


// ***********************************************************


Math.random()
"Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)"

Math.random(); 
console.log(Math.random())     //0.1668555125'




// Returns a random integer from 0 to 9:
//  Math.floor converts the decimal into integer 
Math.floor(Math.random() * 10);


console.log(Math.ceil(Math.random() * 10))  
'this return values from 1 to 10 '


// ********************************************
//  this is the code to generate numbers bw 1 to 100
k=parseInt(Math.random() * 101);

// ********************************************


// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);


// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);


// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);


// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;



// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;



// *****************************************************************

var d=Math.abs(-3);
console.log(d);


Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN




// **************************************************

console.log(Math.cbrt(64));
// expected output: 4


// ****************************************************



console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7


Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity


// **********************************************************



console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6


// ********************************************************

console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6



// *****************************************************************

console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1

console.log(Math.sign(0));
// expected output: 0

console.log(Math.sign('-3'));
// expected output: -1


// *********************************************************


var d=Math.sqrt(9);
console.log(d);



var d=Math.sqrt(-16);
console.log(d);  // NaN


// ***********************************************************

// Math.trunc() function returns the integer part of a number by removing any fractional digits.


console.log(Math.trunc(13.37));
// expected output: 13

console.log(Math.trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));
// expected output: -0

// *********************************************************88