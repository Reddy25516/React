

var numbers = [3, 1, 4, 1, 5];
nums=numbers
nums[1]=99;
console.log(numbers);

// [ 3, 99, 4, 1, 5 ]


/********************************************************** */



var numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
var sorted = [...numbers].sort((a, b) => a - b);
console.log(sorted);
console.log(numbers);


// [ 1, 1, 3, 4, 5 ]
// [ 3, 1, 4, 1, 5 ]


/********************************************************** */

//  creating a new copy 

const numbers = [3, 1, 4, 1, 5];
nums=[...numbers]
nums[1]=99;
console.log(numbers); //[3, 1, 4, 1, 5]


// 


// For simple JSON objects, the simplest way would be:
    var objectIsNew = JSON.parse(JSON.stringify(objectIsOld));


// *******************************************************************


// 'To copy an object in JavaScript, you have three options:

// Use the spread (...) syntax
// Use the Object.assign() method
// Use the JSON.stringify() and JSON.parse() methods
// '


const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {
    ...person
};


// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));



// *******************************************************************