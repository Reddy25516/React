

var nums=[42,51,24,98]
nums.forEach((n)=> {console.log(n)})

/*
42
51
24
98

*/

var nums=[42,51,24,98]
nums.forEach((n)=> {console.log(n**2)})

'we can also find square as above'

'-----------'

var nums=[42,51,24,98]
nums.forEach((n,i,nums)=> {console.log(n,i,nums)})


/*

42 0 [ 42, 51, 24, 98 ]
51 1 [ 42, 51, 24, 98 ]
24 2 [ 42, 51, 24, 98 ]
98 3 [ 42, 51, 24, 98 ]

*/




var nums=[42,51,24,98]
nums.forEach((n,i,nums)=> {console.log(i,n,nums)})

'here i takes index and n takes values'
/*

0 42 [ 42, 51, 24, 98 ]
1 51 [ 42, 51, 24, 98 ]
2 24 [ 42, 51, 24, 98 ]
3 98 [ 42, 51, 24, 98 ]

*/


'----------------------'

// filter in js

var nums=[42,51,24,98,65]
console.log(nums.filter(n=> n%2==0));4

//[ 42, 24, 98 ]

'---------'
'if we want to comment multiple lines at a time them'
'select those lines , control+/'


var nums= 'adja akdj adj aldk a'.split(' ')

nums=nums.filter(n=> n.length%2==0)
console.log(nums)


/*
var nums= 'adja akdj adj aldk a'.split(' ')

nums=nums.filter(n=> n.length%2==0)
console.log(nums)
*/


'-----------'

var nums=[42,51,24,98,65]
nums.filter(n => n%2===0).forEach(n=>{console.log(n)});
console.log(nums)

// output:
// 42
// 24
// 98
// [42,51,24,98,65]



'========================================================================='

'Unshift'
nums=[1,2,3,66,43,32]
nums.unshift(22,11)
console.log(nums)

'[22, 11,  1,  2,3, 66, 43, 32]'
'here it will 22 and 11 at the begining of the list '

'============================================================'

'push'
nums=[1,2,33,66,43,32]

nums.push(44,55)
console.log(nums)  // [ 1,  2,  33,66, 43, 32, 44, 55]


'============================================================'


"spread operator"

var nums=[2,1,3,4,6]
console.log(...nums) // 2 1 3 4 6




var nums=[2,1,3,4,6]

console.log(...nums)
console.log(nums)   // [ 2, 1, 3, 4, 6 ]

var copied_nums = [...nums]
console.log(copied_nums)  // [ 2, 1, 3, 4, 6 ]




'here this also helpful us to combine data '

var num1=[1,2,3]
var num2=[4,5,6];
var data=[...num1,...num2]
console.log(data)
// [ 1, 2, 3, 4, 5, 6 ]







// *****************************************************************************


'The concat() method creates a new array by merging (concatenating) existing arrays:'



var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];

var myChildren = myGirls.concat(myBoys);
console.log(myChildren)

// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]







var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);

console.log(myChildren)

// ['Cecilie', 'Lone','Emil',    'Tobias','Linus',   'Robin','Morgan']



'The concat() method can also take strings as arguments:'

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 




// *************************************************************************



'pad'
'we can only pad the strings we cant pad nums'





let minute ='8';
let hour = '6';
console.log(minute.padStart(4,'0'))   // 0008
console.log(minute.padEnd(5,'0'))   // 80000
console.log(minute.padStart(4))   // it is padded with 4 (includes spaces)

str='reddy'
console.log(str.padStart(7,'*'))  // **reddy


name= '   reddy  '
console.log(name.trimStart())  //reddy  
console.log(name.trimEnd())//   reddy

// *************************************************************************