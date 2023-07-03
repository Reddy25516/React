


let a=19; b=89;
console.log(a);
console.log(b);

/*
this is the way of declaring multiple statements in single line
it should be seperated with semicolon
*/


'======================================================================='

var a=15; 
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


'==========================================================='

//PS C:\Users\DELL\OneDrive\vs_code\courses\react js> node index.js
reddy


'node index.js'
'with these we can run a file in visual studion code '

'==============================================='

'with var keyword we can access it globally '

for (var i=0;i<=4;i++){
  console.log("reddy")
}

console.log(i)

/*
reddy
reddy
reddy
reddy
reddy
5
*/

'=========================================================='

'let keyword cant be accessed globally'
for (let i=0;i<=4;i++){
  console.log("reddy")
}
console.log(i)

/*
console.log(i)
            ^
ReferenceError: i is not defined
*/

'==================================================================='


'with let it works'

for (let i=0;i<=4;i++){
  console.log(i)
  
}

'when we declare with const it cannot be changed later '

for (const i=0;i<=4;i++){
  console.log(i)
  
}

/*
for (const i=0;i<=4;i++){
                     ^
TypeError: Assignment to constant variable.
*/


'==================================================='

'Arrow function'

let add =(a,b) => {return a+b}
console.log(add(8,9))


'below code also works'
let add =(a,b) => a+b
console.log(add(8,9))


'below wont work '
'whenever we are using {} curly brackets  we should include a return type'
let add =(a,b) => {a+b}
console.log(add(8,9)) //undefiined



'to get the power of a value '
let power = a => a**2
console.log(power(6))


'-----------'

//object function 

let add =function(a,b){
  return a+b
}
console.log(add(8,9))

'------------'

// normal function 
function add(a,b){
  return a+b
}
console.log(add(8,9))

'========================================================'

'this keyword in javascript'

const mango ={
  color : 'yellow',
  price : 120 ,
  weight : 70,
  about : function(){
      return 'the price of mango is '+ price 
  }
}

console.log(mango.about()) // whenever we are calling a function we should include the 
                               //parenthesis
/*
C:\Users\DELL\OneDrive\vs_code\courses\react js\index.js:7
        return 'the price of mango is '+ price
                                         ^

ReferenceError: price is not defined
*/

'----------'

'when we include this while accessing it shows no error '
const mango ={
  color : 'yellow',
  price : 120 ,
  weight : 70,
  about : function(){
      return 'the price of mango is '+ this.price 
  }
}

console.log(mango.about()) //the price of mango is 120

'===================================================================='


'class and object in js '

//we should use class keyword to define a class 
class Fruit{
  // way of creating a constructor of a class
  constructor(name){
      this.name= name;
      
  }
  // defining a method in a class
  call(){
      console.log(this.name +"is a fruit")
  }
}
// object creation for the class 
let add = new Fruit("Mango")
// way of calling a class method 
add.call() 
// Mangois a fruit


'=================================================================='

