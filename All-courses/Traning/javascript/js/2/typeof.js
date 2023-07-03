
'number'
'undefined'
'string'
'object'


//-----------
'null'
'undefined'


'type of Infinity is also a number '

var number1 = 3/0;
console.log(number1)  // Infinity
console.log(typeof(number1)); // number
if(typeof(number1)=='number'){
  console.log("yes");
}
else{
  console.log("no")
}; //yes 



// ***********************************************

//  checking whether a number is infinity or not 

var number1 = 3/0;

if(number1=='Infinity'){
  console.log("yes");
}
else{
  console.log("no")
}; 


// ***************************************



// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN


// *********************************************


// The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. 

var name1;
console.log(name1); // undefined


// It is also possible to explicitly assign a variable value undefined. For example,

var name1 = undefined;
console.log(name1); // undefined

//****************************************************** */