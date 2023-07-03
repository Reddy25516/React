
function user(){
    console.log("hello");
}
user();

// to run in vsc use node 1.js 
// hello 


'----------------'


function user(num){
    console.log("the entered number is",num);
}
user(10);

// the entered number is 10

'-------------------------'

function user(num){
    return num+9;
}
 var val =user(10);
 console.log(val); // 19 


'-------------------------'

isarray :

var data=[2,3,4];
console.log(Array.isArray(data))  // true 


'--------------------------'
map: 

var data=[2,3,4];
data.map(
    function(element){
        console.log(element);
    }
)

//2
//3
//4

'-----------------------------'


var data=[1,2,3,4];
 var output= data.map(
    function(element){
        return element*3;
    }
)
console.log(output)  //[ 3, 6, 9, 12 ]



'======================================'

// filter 

var data=[1,2,3,4];
 var output= data.filter(
    function(element){
        return element%2==0;
    }
)
console.log(output)   // [2,4]


'====================================='


//forEach 

var data=[1,2,3,4];
data.forEach(
    function(element){
        console.log(element)
    }
)

//1
//2
//3
//4

'-----------------------------'




var data=[1,2,3,4];
var output = data.every(
    function(element){
        return element>0
    }
)
console.log(output) // true 


'-------------------'

var data=[1,2,3,4];
var output = data.every(
    function(element){
        return element>3
    }
)
console.log(output) // false

'-===================='

indexof :


var data=[1,2,3,4];
console.log(data.indexOf(3));

'==========================='

var data=[1,5,2,1,2,3,4,3,2,3,1];  
console.log(data.lastIndexOf(3)); //9 
console.log(data.lastIndexOf(5)); // 1

'============================================'

// stringfy will convert an object into JSON file 


var data = {
    name : "john",
    age : 28
}
var jsonfile = JSON.stringify(data);
console.log(jsonfile)

// {"name":"john","age":28}
'here we can see that '
'even on the left sides we can see that the string is enclosed with quotes '

'=================================='


var date = new Date();
console.log(date);
// 2022-07-04T16:59:00.895Z   
// + 5.30 hrs gives IST 


'=========================='

//let
'when we declare with let we cant access outside the block of code '

{
    let data=0;
}
console.log(data)

/*
PS E:\OneDrive\vs_code\courses\react js\reactjs\2\1> node 2.js
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

    */

    '-------------------------'

// with var it is possible to access even outside of the block of the code 

{
    var data=0;
}
console.log(data)  // 0


'====================================='

// arrow function 

const user = () =>  console.log("hello ")
user(); // hello 


// with var we still get the same output 

var user = () =>  console.log("hello ")
user();  // hello 



'---------------------------'

// with parameter 


var user = (num) =>  {return num+7}
console.log(user(8));   // 15



var user = num =>  {return num+7}
var val = user(8)
console.log(val);   // 15



'============================================='



class User{
    admin(){
        console.log("this is a class method ");
    }
}

let obj = new User();
// here we created the instance of a class and then we referred through the instance of the class 
obj.admin();  // this is a class method 


'============================='

'whenever we are giving the argumented values then we have to create '
' a constructor for the class '

// this is the way of passing a message to a class 

class User{
    constructor(msg){
        this.msg = msg;
    }
    admin(){
        console.log("the greeting message is ",this.msg);
    }
}

let obj = new User("hi");
obj.admin();    // the greeting message is  hi


'=========================================='

// for of 

var data =[2,3,2,13,4,5,9];
for( var a of data){
    console.log(a);
}

/*
2
3
2
13
4
5
9

*/

'-------------------------------------------------'


// default  in function  


function user(name, age=30){
    console.log(name+" "+age)
}

user("reddy");  /// reddy 30


'====================================='

// Rest operator 

function user(name, ...value){
    console.log(name);
    console.log(value);
}

user("reddy",25,"cas",90);  


//reddy
// [ 25, 'cas', 90 ]

'================================================='

let arr1=[1,2,344,2,21,2];
let arr2=[4,32,21,4544,32,3]
let arr3=[...arr1,...arr2]
console.log(arr3)

/*[
    1,    2, 344,  2,
    21,    2,   4, 32,
    21, 4544,  32,  3
  ]
*/


'---------------------------------------'


Destructuring :
"when we just want to assingn value of an object or an array to a specific data 
'then it is called destructuring'

let person={
    name: "reddy",
    age : 34,
    gmail : "redddy25516",
}

// here we should enclose with closed braces 
const {name,age,gmail} = person 
console.log(age)  // 34 

'-----------------'

'this is array destructing '



let person=["reddy",34,"reddy25516"]
const [name,age,gmail]= person 
console.log(gmail)  // reddy25516

'======================================================='


