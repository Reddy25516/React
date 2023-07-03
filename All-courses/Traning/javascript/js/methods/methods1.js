
'Length method'
'substring'
'substr'
'replace'
'touppercase'
'tolowercase'
'concat'
'trim'
'padding'
'tostring'
'charAt'


'============================================================================='

'Length method'

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = txt.length;
console.log(length)

'============================================================================='

/*
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/



/*
Substring()
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
*/


var str4 = "Apple, Banana, Kiwi";
var part4 = str4.substring(7, 13);
console.log(part) // Banana


'============================================================================='

/*
substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
*/


var str5 = "Apple, Banana, Kiwi";
var part5 = str5.substr(7, 3);
console.log(part) // Ban



'If you omit the second parameter, substr() will slice out the rest of the string.'

var str = "Apple, Banana, Kiwi";
var part = str.substr(7);  //substr
console.log(part) // Banana, Kiwi



// negative indexing 
var str = "Apple, Banana, Kiwi";
var part = str.substr(-4);
console.log(part)  // kiwi




'============================================================================='

'Replace:'

/*

The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set.

*/

'here it only replaces the first word it encounter '
var text6 = "Please visit Microsoft and Microsoft!";
var newText1 = text6.replace("Microsoft", "W3Schools");
console.log(newText)  
//Please visit W3Schools and Microsoft!




'By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:'

var text7 = "Please visit Microsoft!";
var newText3 = text7.replace("MICROSOFT", "W3Schools");
console.log(newText)  
//Please visit Microsoft!

'here can see here the text is not changed after replacing'




'To replace case insensitive, use a regular expression with an /i flag (insensitive):'
'here in below it got changed'
var text9 = "Please visit Microsoft!";
var newText5 = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText5)  
//Please visit W3Schools!



'To replace all matches, use a regular expression with a /g flag (global match):'
var text10 = "Please visit Microsoft and Microsoft!";
var newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText)  
//Please visit W3Schools and W3Schools!






'============================================================================='

'toUpperCase:'
'A string is converted to upper case with toUpperCase():'

var text11 = "Hello World!";
 text12 = text1.toUpperCase();  // HELLO WORLD!




'toLowercase:'
 text1 = "Hello World!";       // String
 text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2)


'============================================================================='


'concat : concat() joins two or more strings:'

var text1 = "Hello";
var text2 = "World";

var text3 = text1.concat(" ", text2);
console.log(text3)   // Hello World


'The concat() method can be used instead of the plus operator. These two lines do the same:'

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");


'============================================================================='

'Trim: '
'The trim() method removes whitespace from both sides of a string:'

var text1 = "      Hello World!      ";
var text2 = text1.trim();
console.log(text2)  //Hello World!


'============================================================================='


'Padstart:'

var text = "5";
var padded = text.padStart(4,"x");
console.log(padded)   // xxx5

/*
here we can see that when we give length as 4 
the text will be paded upto length 4
with the given value 
*/

var text = "5";
var padded = text.padStart(2,"0");  // 02
console.log(padded) 


var text = "5";
var padded = text.padStart(4,"0");
console.log(padded)   // 0005


/*
The padStart() method is a string method.
To pad a number, convert the number to a string first.
*/



var numb = 5;
var text = numb.toString();
var padded = text.padStart(4,"0");
console.log(padded)   



'PADend'
'The padEnd() method pads a string with another string:'


var text = "5";
var padded = text.padEnd(4,"x");
console.log(padded)   //5xxx


var text = "5";
var padded = text.padEnd(4,"0");
console.log(padded) //5000


'============================================================================='

'toString:'
'this method is used to convert a number into string'

var numb = 5;
var text = numb.toString();

'============================================================================='


/*
Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]

*/


var text = "HELLO WORLD";
var char = text.charAt(0);
console.log(char) // H


var text = "HELLO WORLD";
var char = text[0];
console.log(char) // H


'============================================================================='

'Split'


/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/

var text = "HELLO WORLD i am world";
var char = text.split(' ');
console.log(char)
// [ 'HELLO', 'WORLD', 'i', 'am', 'world' ]




