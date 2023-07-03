

/*
JavaScript Search Methods
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()

*/


' indexOf()'
'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.'




var str = "Please locate where 'locate' occurs!";

console.log(str.indexOf("locate"))//7





const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1





"lastIndexOf()"
"The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:"

var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate"))  //21


//Both indexOf(), and lastIndexOf() return -1 if the text is not found:




//Both methods accept a second parameter as the starting position for the search:

var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate",15))  //7



var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate",15)) //21


//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.



'====================================================================='


'search()'
'The search() method searches a string for a specified value and returns the position of the match:'

var str = "Please locate where 'locate' occurs!";
str.search("locate");  //7


/*
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/


'====================================================================='


'match'


var text = "Ain The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g))
// [ 'ain', 'ain', 'ain' ]


'Perform a global, case-insensitive search for "ain":'

var text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi))
//  [ 'ain', 'AIN', 'ain', 'ain' ]


'====================================================================='


"includes()"
"The includes() method returns true if a string contains a specified value."

var text = "Hello world, welcome to the universe.";
console.log(text.includes("world")) // true



//Check if a string includes "world", starting the search at position 12:

var text = "Hello world, welcome to the universe.";
text.includes("world", 12);  //false


'====================================================================='

'Startswith()'
'The startsWith() method returns true if a string begins with a specified value, otherwise false:'

'The startsWith() method is case sensitive.'


var text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"))  // true
console.log(text.startsWith("hello"))   // false





var text = "Hello world, welcome to the universe.";

text.startsWith("world")    // Returns false
var text = "Hello world, welcome to the universe.";

text.startsWith("world", 5)    // Returns false
var text = "Hello world, welcome to the universe.";

text.startsWith("world", 6)    // Returns true


'====================================================================='

'endswith:'
'The endsWith() method returns true if a string ends with a specified value, otherwise false:'


var text = "John Doe";
console.log(text.endsWith("Doe"))  // true


//Check if the 11 first characters of a string ends with "world":

var text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);  


var text = "Hello world, welcome to the universe.";
console.log(text.endsWith("world", 11))  // true 


