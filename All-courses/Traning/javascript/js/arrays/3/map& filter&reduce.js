

'mapping'

var num=[1,2,3,4,5]

var new_num=[]
for (let i of num){
    new_num.push(i*2)
}
console.log(new_num)   // [ 2, 4, 6, 8, 10 ]


// ***********************************************************

'using map function '

var num=[1,2,3,4,5]
var new_num=num.map(function(i){
    return i*2
})

console.log(new_num)   // [ 2, 4, 6, 8, 10 ]




'with arrow function '


var num=[1,2,3,4,5]

var new_num=num.map((i) => i*2)

console.log(new_num)   // [ 2, 4, 6, 8, 10 ]



'==================================================='



'object'


let doct =[
    {name : "kazi", age :20},
    {name : "ariyan", age :30},
    {name : "reddy" , age : 22},
]

var doctmap= doct.map((i) => i.age)
console.log(doctmap) //  [ 20, 30, 22 ]


'========================================================='



'filter'


var num=[1,2,3,4,5]
let odd_num=[]

for (let i of num){
    if (i%2==1){
         odd_num.push(i)
    }
}
console.log(odd_num)   //  [ 1, 3, 5 ]




'using filter'

var num=[1,2,3,4,5]
var new_num=num.filter(function(i){
    return i%2==1
})

console.log(new_num)  // [ 1, 3, 5 ]




// *****************************************************


'reduce'

var num=[1,2,3,4,5]


let sum=0
for (let i of num){
    sum+=i 
}
console.log(sum)  // 15 



'using reduce'

var num=[1,2,3,4,5]
sum=0
'here sum must be declared to get the correct output'
let total_sum = num.reduce(function(sum,i){
    return sum+i 
})
console.log(total_sum) // 15




// *************************************

// filter 


function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]


'----------------------------------------------'

var array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num>1;
//    this is same as writing if(num>1) => return num
}

console.log(array.filter(isPrime)); 



'----------------------------------------------'


// Arrow function
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )



//  arrow fuction with (element and index )


var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var new_array= array.filter((element,i) => (element*i)>=20);
console.log(new_array);



// ***************************************************


// maps in js


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


'---------------------------'


