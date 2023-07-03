
'JavaScript strings are for storing and manipulating text.'

'A JavaScript string is zero or more characters written inside quotes.'



let text1 = "John Doe";


//You can use single or double quotes:

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes



//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';




//String Length
// To find the length of a string, use the built-in length property:

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


'Escape Character'
'use the backslash escape character.'

/*
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
*/


let text11 = "We are the so-called \"Vikings\" from the north.";

let text12= 'It\'s alright.';


let text13 = "The character \\ is called backslash.";
//The sequence \\  inserts a backslash in a string:



'======================================================================='

/*
Template Literals
Template Strings
String Templates
Back-Tics Syntax
*/


"Template Literals use back-ticks (``) rather than the quotes ("") to define a string:"

let text23 = `Hello World!`;
console.log(text) // Hello world!


let text22 = `He's often called "Johnny"`;


let text123 =
    `The quick
    brown fox
    jumps over
    the lazy dog`;



let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;


'==========================================================================='

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
let tot = `Total: ${(price * (1 + VAT)).toFixed(3)}`;

console.log(total) // 12.50
console.log(tot)   //12.500


'==========================================================================='





